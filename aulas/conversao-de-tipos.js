// Conversão de tipos

let score = '100'

// Number() - função construtora que converte o valor passado como parâmetro para o tipo number
score = Number(score)

// console.log(score + 1)

// typeof - utilizado para verificar o tipo de um valor
// console.log(typeof score)

const crazyConversion = Number('maçã')
// console.log(crazyConversion) // Output: NaN - valor retornado quando é feito uma operação matemática que não faz sentido

// String() - função construtora que converte o valor passado como parâmetro para o tipo string
// typeof - utilizado para verificar o tipo de um valor
const convertedNumber = String(97)
// console.log(convertedNumber, typeof convertedNumber)

// Boolean() - função construtora que converte o valor passado como parâmetro para o tipo boolean
// typeof - utilizado para verificar o tipo de um valor
const booleanConversion = Boolean(10)
// console.log(booleanConversion, typeof booleanConversion)


/* 

    VALORES FALSY: Valores que se tornam false quando há uma conversão de tipo
      - false
      - 0
      - "", '', ``
      - null
      - undefined
      - NaN

    VALORES TRUTHY: Valores que se tornam true quando quando há uma conversão de tipo
      - Qualquer valor que não é falsy

*/

