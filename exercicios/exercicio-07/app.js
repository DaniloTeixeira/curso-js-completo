/*
  01

  - Inverta o valor dos booleans do console.log() abaixo;
  - O resultado exibido no console deve ser: false true.
*/

console.log(!true, !false);

/*
  02

  - Abaixo do array "animals", verifique se o animal "leão" **não** existe no  
    array. Se não existir, exiba no console a mensagem "Leão não existe no array  
    animals.";
  - Se existir, exiba no console a mensagem "Existe um leão no array animals.".
*/

const animals = ["macaco", "tucano", "elefante", "pavão", "hipopótamo"];
const isLionNotExists = !animals.includes("leão");

if (isLionNotExists) {
  console.log("Leão não existe no array animals.");
} else {
  console.log("Existe um leão no array animals.");
}

/*
  03

  - Some os números do array abaixo;
  - Se durante a soma, o resultado ultrapassar 400, pare a operação e exiba  
    a frase abaixo no console, substituindo "RESULTADO_DA_SOMA" pelo valor  
    correto.
  
  "A soma ultrapassou 400. Até aqui, o valor atual é RESULTADO_DA_SOMA."
*/

const randomNumbers = [59, 61, 73, 57, 35, 73, 21, 87, 43];

let sum = 0;
const limit = 400;

for (let i = 0; i < randomNumbers.length; i++) {
  sum += randomNumbers[i];

  if (sum > limit) {
    console.log(
      `A soma ultrapassou ${limit}. até aqui, o valor atual é ${sum}.`
    );
    break;
  }
}

/*
  04

  - Concatene as strings do array abaixo, formando uma frase;
  - Se durante a concatenação a palavra "certeza" existir, ela não deve ser  
    concatenada;
  - Exiba a frase no console.
*/

const sentence = [
  "A",
  "certeza",
  "dúvida",
  "é",
  "o",
  "princípio",
  "da",
  "sabedoria.",
];

let newSentence = "";

for (let i = 0; i < sentence.length; i++) {
  const isCertezaExists = sentence[i].includes("certeza");

  if (isCertezaExists) {
    continue;
  }
  newSentence += `${sentence[i]} `;
}

console.log(newSentence);

/*
  05

  - Itere sobre o array "randomValues" apenas até a 4ª string dele;
  - Exiba a string abaixo no console, mantendo a formatação de lista e inserindo  
    as informações corretas:

  "
    3 informações sobre o array randomValues:
      - As primeiras 4 strings são XX, XX, XX e XX;
      - Até que as primeiras 4 strings fossem iteradas, XX booleans foram iterados;
      - O array foi iterado por XX vezes.
  "
*/

const randomValues = [
  57,
  false,
  "JS",
  [],
  true,
  "HTML",
  31,
  null,
  false,
  "CSS",
  97,
  true,
  "Git",
  11,
  "sticker",
  false,
  "GitHub",
  true,
  null,
];

let booleansAmount = 0;
let totalIterationAmount = 0;
let stringsAmount = 0;
let stringNames = [];

for (let i = 0; i < randomValues.length; i++) {
  let value = randomValues[i];

  if (stringsAmount === 4) {
    break;
  }

  if (typeof value === "string") {
    stringsAmount++;
    stringNames.push(value);
  }

  if (typeof value === "boolean") {
    booleansAmount++;
  }

  totalIterationAmount++;
}

console.log(`3 informações sobre o array randomValues:
  - As primeiras 4 strings são ${stringNames
    .join(", ")
    .replace(", Git", " e Git")};
  - Até que as primeiras 4 strings fossem iteradas, ${booleansAmount} booleans foram iterados;
  - O array foi iterado por ${totalIterationAmount} vezes.`);

/*
  06

  - Descomente a constante abaixo atribua a ela algum tipo de bebida. Exemplo:  
    água, refrigerante ou suco;
  - Utilize um switch statement com cases para essas 3 possibilidades de bebida;
  - Se o tipo da bebida é água, atribua à uma variável a mensagem "Substância 
    química cujas moléculas são formadas por dois átomos de hidrogênio e um de 
    oxigênio.";
  - Se o tipo da bebida é refrigerante, a mensagem "Bebida não alcoólica e não 
    fermentada, fabricada industrialmente, à base de água mineral e açúcar." 
    deve ser armazenada;
  - Se é suco, atribua a mensagem "Bebida produzida do líquido extraído de 
    frutos.";
  - Se nenhum desses 3 tipos de bebida der match, a variável deve armazenar 
    "Bebida desconhecida.";
  - Exiba a mensagem no console. Teste também as outras possibilidades de tipo  
    da bebida além da que você escolheu.
*/

const drinkType = "refrigerante";

const isJuice = "Bebida produzida do líquido extraído de frutos.";

const isSoda =
  "Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açúcar.";

const isWater =
  "Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio.";

const invalidBeverage = "Bebida desconhecida.";

switch (drinkType) {
  case "suco":
    console.log(isJuice);
    break;
  case "refrigerante":
    console.log(isSoda);
    break;
  case "água":
    console.log(isWater);
    break;
  default:
    console.log(invalidBeverage);
    break;
}

/*
  07

  - Reescreva o código comentado abaixo, utilizando um switch statement;
  - Depois de escrever o switch, modifique o valor da declaração da const "a"  
    para testar o switch que você escreveu.
*/

const a = 2;
let response = `O valor de "a" é `;

// if (a === 0) {
//   console.log(`O valor de "a" é ${a}`)
// } else if (a === 1) {
//   console.log(`O valor de "a" é ${a}`)
// } else {
//   console.log('O valor de "a" é qualquer número, exceto 0 e 1')
// }

switch (a) {
  case 0:
    console.log(`${response} ${a}.`);
    break;
  case 1:
    console.log(`${response} ${a}.`);
  default:
    console.log(`${response} qualquer número, exceto 0 e 1.`);
    break;
}
