import mockApi from "./mockApi";

describe("API testing", () => {
  test("return existing endpoint", (done) => {
    mockApi.get("/reviews").expect(200, done);
    mockApi.get("/users").expect(200, done);
  });
});
