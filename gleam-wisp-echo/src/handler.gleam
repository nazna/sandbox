import gleam/json
import gleam/string_builder
import wisp.{type Request, type Response}

pub fn handler(req: Request) -> Response {
  use <- wisp.rescue_crashes
  use <- wisp.log_request(req)

  let model = json.object([
    #("name", json.string("nazna")),
    #("age", json.int(28)),
  ])

  let body = json.to_string_builder(model)
  wisp.log_info(string_builder.to_string(body))

  wisp.json_response(body, 200)
}
