import calculator from "calculator"

describe("testes de matematica", () => {
    it("deve retornar o resultado da soma de dois valores", () => {
        const resultado = calculator.sum(1, 2)

        expect(resultado).toEqual(3)
    })
})