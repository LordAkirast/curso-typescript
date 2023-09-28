import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  })
})

describe("Fibonacci sequence", () => {
  it("should return 200 and the number shall be 0 1 1 2 3 5 8 13 ....", async () => {
    const {status, text} = await api.get('/fibonacci?elements=10');
    const result = await api.get('/fibonacci?elements=10')
    expect(status).toBe(200);
    expect(result.body).toEqual([0,1,1,2,3,5,8,13,21,35])
  })
})