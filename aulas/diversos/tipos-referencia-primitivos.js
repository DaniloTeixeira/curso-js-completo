// Tipos de referência e tipos primitivos

/* 

TIPOS PRIMITIVOS

 - Numbers
 - Strings
 - Booleans
 - Null
 - Undefined
 - Symbol
 - BigInt    

*/

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`ScoreOne: ${scoreOne} | ScoreTwo: ${scoreTwo}`);

scoreOne = 100;

console.log(`ScoreOne: ${scoreOne} | ScoreTwo: ${scoreTwo}`);


/* 

TIPOS DE REFERÊNCIA

 -> Todos os tipos de objetos
  - Objetos literais
  - Arrays
  - Funções 
  - Datas
  - Todos os outros objetos 

*/

let userOne = { name: 'Danilo', age: 35 };
let userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 36;

console.log(userOne, userTwo);


/*
    A diferencça entre eles é como eles são armazenados na memória
*/

