// Arrays
const heroes = ["Batman", "Catwoman", "Iroman"];
// console.log(heroes) // exibe todos os itens do array, pode ser utilizado o [index], para exibir apenas a posição do item indicado

heroes[2] = "Spiderman"; // Atribui um novo valor ao item selecionado do array
// console.log(heroes)

const ages = [31, 25, 39, 40, 25];
// console.log(ages)

const randomArray = ["Parker", "Diana", 19, 18];
// console.log(randomArray)

// Métodos de arrays

// join() - transforma o array em strins e recebe por parâmetro (opcional), o que será utilizado como separador dos itens do array
const joinHeroes = heroes.join("-");
// console.log(joinHeroes)

// indexOf() - recebe o valor do item do array como parâmetro e retorna a primeira posição onde o valor se encontra no array
//           - quando o valor passado por parâmetro, não é encontrado, o retorno é -1
const indexOf25 = ages.indexOf(25);
// console.log(indexOf25)

// concat([]) - gera um novo array, com os itens já existentes, mais os passados como parâmetro, não altera o array original
const moreHeroes = heroes.concat(["Superman", "Wolverine"]);
// console.log(moreHeroes)
// console.log(heroes)

// push() - adiciona itens passados como parâmetro, no array original, ele altera o array original
const pushToHeroes = heroes.push("Cyclops", "Hulk");
// console.log(pushToHeroes)
// console.log(heroes)

// pop() - remove o último item do array e retorna o valor do item removido, não recebe parâmetro, ele modifica o array original
const popHeroes = heroes.pop();
// console.log(popHeroes)
// console.log(heroes)
