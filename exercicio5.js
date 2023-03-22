// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
// números de strings.
// Exemplos:
// Resoluções - 
// maiorOuIgual(0, 0) // retornará true
// maiorOuIgual(0, "0") // retornará false
// maiorOuIgual(5, 1) // retornará true

function maiorOuIgual(num1, num2) {
    if(typeof(num1) === typeof("") || typeof(num2) === typeof("")) {
        return false
    }
    return num1 >= num2;
}

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(5, 1))