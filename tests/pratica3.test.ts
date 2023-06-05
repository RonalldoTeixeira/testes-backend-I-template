import { pratica3 } from "../src/pratica3"

describe("pratica 3",()=>{

    test("verifica se entradas são do tipo number",()=>{
        const result = pratica3 ("4" as any, "6" as any)
        expect(result).toBeNull
    })

    test("verificar se a Função retorna objeto com soma e multiplicação de ambas entradas",()=>{
        const result = pratica3(4,6)
        expect(result).toEqual({soma:10, multiplicacao: 24})
        
    })

})