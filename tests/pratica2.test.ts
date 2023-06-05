import {pratica2} from "../src/pratica2"
describe("pratica 2",()=>{
    test("verificar se [e do tipo number",()=>{
        const result =pratica2("10" as any)
        expect(result).toBeNull()
        
    })
    test("verificar se é pá", ()=>{
        const result = pratica2(10)
        //expect(result).toBe(true)
        expect(result).toBeTruthy()
    })
})