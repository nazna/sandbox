FROM eclipse-temurin:17 as builder
WORKDIR /builder

COPY build.gradle.kts /builder/
COPY gradle /builder/gradle
COPY gradlew /builder/
COPY src/main /builder/src/main

RUN /builder/gradlew build -x test

FROM eclipse-temurin:17
WORKDIR /app

COPY --from=builder /builder/build/libs/*.jar /app/backend.jar

ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=development", "/app/backend.jar"]
