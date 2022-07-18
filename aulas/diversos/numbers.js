// Inteiros e decimais
const radius = 10
const pi = 3.14
console.log(radius, pi) // Output: 10 3.14

// Operadores aritméticos
const reminder = 5 % 2
console.log(reminder) // Output: 1 (Resto da divisão)

// Fórmula para calcular área de um quadrado (** 2 = elevado ao quadrado)
const area = pi * radius ** 2 
console.log(area)

// Ordem para resolução de operações matemáticas
// 1- parênteses
// 2- expoentes ou raízes
// 3- multiplicação e divisão
// 4- adição e subtração

const crazyOperation = 5 * (10 - 3) ** 2
console.log(crazyOperation) //  Output: 245

// Incremento e decremento
// quando a variável vai ser modificada deve utilizar o 'let' no lugar do 'const'
let postLikes = 10

// incremento - soma 1 ao valor atual da variável
postLikes++
console.log(postLikes) // Outuput: 11

// decremento - subtrai 1 do valor atual da variável
postLikes--
console.log(postLikes) // Outuput: 10

// Operadores addition, subtraction multiplication e division assignment

// addiction assignment - soma o valor atual da variável ao valor informado
postLikes += 5
console.log(postLikes) // Outuput: 15

// subtraction assignment - subtrai o valor indicado do valor atual da variável
postLikes -= 1
console.log(postLikes) // Output: 14

// multiplication assignment - multiplica o valor atual da variável pelo valor informado
postLikes *= 3
console.log(postLikes) // Output: 42

// division assignment - divide o valor atual da variável pelo valor informado
postLikes /= 2
console.log(postLikes)  // Output: 21 

// NaN - not a number
// Ocorre quando é executada uma operação que não resulta em um número
// Exemplo - console.log(7 * 'oi')

