// Funções / Métodos

// Hoisting -> usando o tipo de declaração de função abaixo (function declaration),
// por debaixo dos panos o JS puxa a criação da função para o começo do arquivo,
// permitindo que   que a função seja chamada antes mesmo de sua criação.

// Function declaration
function sayHello() {
  console.log("Olá!");
}

// chamar, executar ou invocar a função
// sayHello();

// Function expression - neste tipo não é possivel chamar a função antes da sua criação,
//                       pois ela não é puxada para o início do código.
const showFood = function () {
  console.log("Churrasco");
};

// showFood();

// Argumentos, parâmetros e default parameters
// A variável criada entre os parenteses na declaração da função, é chamada de parâmetro, pode conter vários parâmetros
const myFunc = function (name, lastname) {
  console.log(`Olá ${name} ${lastname}!`);
};

// O valor passado entre os parenteses da invocação da função, se chama argumento
// myFunc("Danilo", "Teixeira");

// Retornando valores
const double = function (number) {
  return number * 2;
};

const result = double(3);

const showResult = function (value) {
  return `O dobro do valor informado é: ${value}`;
};

console.log(showResult(result));
