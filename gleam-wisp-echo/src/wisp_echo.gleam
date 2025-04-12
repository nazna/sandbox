import gleam/erlang/process
import mist
import wisp
import wisp/wisp_mist

import handler.{handler}

pub fn main() {
  let port = 8080
  let secret_key_base = wisp.random_string(64)

  wisp.configure_logger()

  let assert Ok(_) = handler
    |> wisp_mist.handler(secret_key_base)
    |> mist.new
    |> mist.port(port)
    |> mist.start_http

  process.sleep_forever()
}
