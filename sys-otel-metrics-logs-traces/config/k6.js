import tempo from "https://jslib.k6.io/http-instrumentation-tempo/1.0.0/index.js";
import { check } from "k6";
import { scenario } from "k6/execution";
import http from "k6/http";

tempo.instrumentHTTP({
  propagator: "w3c",
});

export const options = {
  discardResponseBodies: true,
  scenarios: {
    rps10duration30s: {
      executor: "constant-arrival-rate",
      duration: "30s",
      rate: 10,
      preAllocatedVUs: 20,
    },
  },
};

export default function () {
  const res = http.get(`http://dice:8080/dice?id=${scenario.iterationInInstance}`);

  check(res, {
    "status is 200": (r) => r.status === 200,
  });
}
