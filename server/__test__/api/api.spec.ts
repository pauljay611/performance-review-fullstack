import mockApi from "./mockApi";

describe("API testing", () => {
  test("return existing endpoint", (done) => {
    mockApi.get("/stores").expect(200, done);
    mockApi.get("/coupons").expect(200, done);
    mockApi.get("/categories").expect(200, done);
  });
});
