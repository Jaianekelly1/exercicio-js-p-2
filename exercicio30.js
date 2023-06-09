// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num
// array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto com
// Resoluções - Exercícios - Curso Fundamentos de Programação15os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
// Exemplo:
// recerberMelhorEstudante({
// Joao: [8, 7.6, 8.9, 6], // média 7.625
// Mariana: [9, 6.6, 7.9, 8], // média 7.875
// Carla: [7, 7, 8, 9] // média 7.75
// }) // retornará { nome: "Mariana", media: 7.875 }

function receberMelhorEstudante(obj) {
    return Object.keys(obj).map((key) => {
        // calcula a media
        let media = obj[key].reduce((ant, atual) => {
            return ant + atual
        }) / 4;

        return { nome: key, media }

    })
    .sort((a, b) => b.media - a.media)[0];
}


var x = receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875 }

console.log(x);
    

