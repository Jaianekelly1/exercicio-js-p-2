// Crie uma função que retorna a String "Olá, " concatenada com um argumento text (a ser passado para a função) e 
// com ponto de exclamação "!" no final 
// Exemplo:
// cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
// cumprimentar("Maria")    // retornará "Olá, Maria!"

function falar(nome) {
    const cumprimentar = "Olá"
    return [cumprimentar, nome].join(', ').concat("!")
}

console.log(falar("jaiane"))