package dev.nazna.api.user.handler;

import com.fasterxml.jackson.databind.exc.ValueInstantiationException;
import dev.nazna.api.user.domain.exception.BadRequestException;
import dev.nazna.api.user.domain.exception.InternalServerErrorException;
import dev.nazna.api.user.domain.exception.NotFoundException;
import dev.nazna.api.user.domain.model.ErrorResponseBody;
import java.util.Map;
import java.util.Objects;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.web.WebProperties;
import org.springframework.boot.autoconfigure.web.reactive.error.AbstractErrorWebExceptionHandler;
import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.boot.web.reactive.error.ErrorAttributes;
import org.springframework.context.ApplicationContext;
import org.springframework.core.annotation.Order;
import org.springframework.core.codec.DecodingException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.codec.ServerCodecConfigurer;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;
import org.springframework.web.server.ServerWebInputException;

@Component
@Order(-2)
public class ExceptionHandler extends AbstractErrorWebExceptionHandler {

  protected static final Logger logger = LoggerFactory.getLogger(ExceptionHandler.class);

  public ExceptionHandler(
      ErrorAttributes errorAttributes,
      WebProperties webProperties,
      ApplicationContext applicationContext,
      ServerCodecConfigurer serverCodecConfigurer) {
    super(errorAttributes, webProperties.getResources(), applicationContext);
    super.setMessageWriters(serverCodecConfigurer.getWriters());
    super.setMessageReaders(serverCodecConfigurer.getReaders());
  }

  @Override
  protected RouterFunction<ServerResponse> getRoutingFunction(ErrorAttributes errorAttributes) {
    return RouterFunctions.route(
        RequestPredicates.all(),
        request -> {
          ErrorAttributeOptions errorAttributeOptions = ErrorAttributeOptions.defaults();
          Map<String, Object> errorAttributeMap =
              getErrorAttributes(
                  request,
                  errorAttributeOptions.including(ErrorAttributeOptions.Include.EXCEPTION));

          Throwable exception = getError(request);

          HttpStatus status =
              HttpStatus.valueOf(
                  Integer.parseInt(Objects.toString(errorAttributeMap.get("status"))));
          ErrorResponseBody responseBody =
              this.loggingAndBuildResponseBody(exception, errorAttributeMap);

          return ServerResponse.status(status)
              .contentType(MediaType.APPLICATION_JSON)
              .bodyValue(responseBody);
        });
  }

  private ErrorResponseBody loggingAndBuildResponseBody(
      Throwable exception, Map<String, Object> eoa) {
    logger.warn(exception.toString(), exception);

    if (exception instanceof ServerWebInputException exs
        && exs.getCause() instanceof DecodingException exd
        && exd.getCause() instanceof ValueInstantiationException exv
        && exv.getCause() instanceof BadRequestException ex) {
      return new ErrorResponseBody(
          eoa.get("timestamp"), ex.getStatus().value(), eoa.get("path"), ex.getMessage());
    } else if (exception instanceof BadRequestException ex) {
      return new ErrorResponseBody(
          eoa.get("timestamp"), ex.getStatus().value(), eoa.get("path"), ex.getMessage());
    } else if (exception instanceof NotFoundException ex) {
      return new ErrorResponseBody(
          eoa.get("timestamp"), ex.getStatus().value(), eoa.get("path"), ex.getMessage());
    } else if (exception instanceof InternalServerErrorException ex) {
      return new ErrorResponseBody(
          eoa.get("timestamp"), ex.getStatus().value(), eoa.get("path"), ex.getMessage());
    } else {
      return new ErrorResponseBody(
          eoa.get("timestamp"),
          HttpStatus.INTERNAL_SERVER_ERROR.value(),
          eoa.get("path"),
          "Unexpected exception was thrown.");
    }
  }
}
