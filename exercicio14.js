// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
// elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
// exemplos abaixo para um melhor entendimento:
// Exemplos:
// objetoParaArray({
// nome: "Maria",
// profissao: "Desenvolvedora de software"
// }) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
// objetoParaArray({
// codigo: 11111,
// preco: 12000
// }) // irá retornar [["codigo", 11111], ["preco", 12000]]


function retornandoArray(objeto) {
    const resultado = []
    for (let chave in objeto){
        resultado.push([ chave , objeto[chave] ])
    }
        return resultado
}
console.log(retornandoArray({codigo: 11111, preco: 12000}))