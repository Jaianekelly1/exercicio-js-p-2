//Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
//Exemplos:
//somarNumeros([10, 10, 10]) // retornará 30
//somarNumeros([15, 15, 15, 15]) // retornará 60

function somaDeNumero(numeros) {
    return numeros.reduce((valorAnterior, valorAtual) => {
        return valorAnterior + valorAtual
    });
}

console.log(somaDeNumero([10, 10, 10]))
console.log(somaDeNumero([15, 15, 15, 15]))