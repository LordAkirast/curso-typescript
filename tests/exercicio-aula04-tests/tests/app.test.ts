import app from "index";
import supertest from "supertest"

describe("GET /health", () => {

    it("se mandar um corpo valido deve retornar ok", async () => {
        const result = await supertest(app).get("/health")
        const status = result.status;

        expect(status).toEqual(200)
    });
})