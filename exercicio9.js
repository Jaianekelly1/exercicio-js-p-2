// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
// o segundo será o número de vezes que haverá repetição. Um array será retornado.
// Exemplos:
// repetir("código", 2) // retornará ["código", "código"]
// repetir(7, 3) // retornará [7, 7, 7]

function repetição(itens, quantidade) {
    let resultado = []

    for(let i = 0; i < quantidade; i++) {
        resultado.push(itens)
    }
    return resultado
}

console.log(repetição("código", 2))
console.log(repetição(7, 3))