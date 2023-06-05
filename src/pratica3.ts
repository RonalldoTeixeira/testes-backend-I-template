
type objeto={
    soma: number,
    multiplicacao: number
}

export const pratica3=(a:number, b:number):objeto| null=>{

    if(typeof a !="number" || typeof b !="number"){
        
        return null
    }

    return{soma:a+b, multiplicacao: a*b}
}