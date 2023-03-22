// Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
//     exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
//     Exemplos:
//     receberNomeDoMes(1) // retornará "janeiro"
//     receberNomeDoMes(4) // retornará "abril"

const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

function numeroDoMes(numero) {
    return meses[numero-1];
}

console.log(numeroDoMes(1))
console.log(numeroDoMes(2))
console.log(numeroDoMes(3))
console.log(numeroDoMes(4))
console.log(numeroDoMes(5))
console.log(numeroDoMes(6))
console.log(numeroDoMes(7))
console.log(numeroDoMes(8))
console.log(numeroDoMes(9))
console.log(numeroDoMes(10))
console.log(numeroDoMes(11))
console.log(numeroDoMes(12))