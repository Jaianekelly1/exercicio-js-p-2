// Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes,
// ou seja, sem as vogais.
// Exemplos:
// removerVogais("Cod3r") // retornará "Cd3r"
// removerVogais("Fundamentos") // retornará "Fndmnts"

function removerVogais(frase) {
    const vogais = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]

    vogais.forEach( vogal => frase = frase.replace(vogal, ''))

    return frase
}
console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))