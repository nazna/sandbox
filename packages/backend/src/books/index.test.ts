import config from "config";
import request from "supertest";
import app from "../main";

const { version } = config.get("backend");

describe(`/${version}/books`, () => {
  test("GET /books", async (done) => {
    const response = await request(app).get(`/${version}/books`);

    expect(response.status).toEqual(200);

    done();
  });
});
