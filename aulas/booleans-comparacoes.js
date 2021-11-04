// Booleans e Comparações

// Boolean - representa os valores true e false
// console.log(true, false)

// Métodos podem retornar booleans
const email = 'danilo@email.com.br'

// includes() - verifica se a string passada como parâmetro, existe na string verificada, retorna true ou false, a comparação é cammel case
const includes = email.includes('@')
// console.log(includes)

const names = ['dio', 'roger', 'robert']
const arrayIncludes = names.includes('Roger')
// console.log(arrayIncludes)

// Operadores de comparações - usados para comparar valores, retorna true ou false

// =    representa atribuição de valor
// ==   compara se dois valores são do mesmo valor
// ===  strict comparison - compara se dois valores são do mesmo valor e do mesmo tipo
// !=   compara se dois valores são possuem valores diferentes
// !==  strict comparison - compara se dois valores possuem valor e tipo diferentes
// !    operador de negação, ele inverte o sinal lógico negando-o
// !!   operador de negação da negação, inverte a última negação e converte o valor para boolean
// >    verifica se um valor é maior que o outro
// <    verifica se um valor é menor que o outro
// <=   verica se um valor é menor ou igual a outro
// >=   verica se um valor é maior ou igual a outro
// ||   comparação 'ou'
// &&   comparação 'e'
// ??   null coalescensing - operador lógico que retorna seu operando do lado direito quando o operando do lado esquerdo é null ou undefined, 
//                         caso contrário retorna seu operando do lado esquerdo

const age = 35
const nome = 'danilo'
console.log(nome == 'danilo') // true
console.log(nome == 'Danilo') // false
console.log(nome > 'André') // true - as últimas letras do alfabeto são maiores que suas antecessoras no JavasCript
console.log(nome > 'Danilo') // true - letras minúsculas são maiores que letras maiúsculas no JavasCript