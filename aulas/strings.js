// Métodos comuns de strings

const email = 'danilo@email.com.br'

// Obtém o index da última ocorrência do caractere passado como argumento
// o indexOf(), obtém a primeira ocorrência do caractere passado como argumento
const lastIndexOfA = email.lastIndexOf('a')
console.log(lastIndexOfA) //Output: 9

// Primeiro argumento representa o ponto de partida da seleção
// Segundo argumento é o índice que representa a partir de onde que a string será cortada fora
// O método slice não altera a variável original, mas cria uma cópia dela
const emailSlice = email.slice(0, 6)
console.log(emailSlice, email) // Output: danilo danilo@email.com.br

// Esse método substitui algum caracter
// Primeiro argumento define qual caractereserá inserido
// Segundo argumento define qual carater será substituído
// O método replace não altera a variável original
const emailReplace = email.replace('d', 'D') 
console.log(emailReplace, email) // Output: Danilo@email.com.br

// Concatenação de string e number
const likesMessage = 'O post tem ' + postLikes + ' likes'
console.log(likesMessage) // Output: O post tem 21 likes

// Utilização de aspas simples na string
const aspas = "Essa frase tem 'aspas simples'"
console.log(aspas)

// Segunda opção, utilizando caracterede escape '\' antes das aspas que serão exibidas
const aspas2 = 'Essa frase também tem \'aspas\''
console.log(aspas2)

// Concatenanto utilizando template string
// \n - é utilizado para fazer quebra de linha
const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Matheus Saad'
const postComments = 15
console.log(`Post: "${postTitle}"\nAutor:${postAuthor}\nLikes: ${postComments}`) 
// Output:
// Post: "É bolacha ou biscoito?"
// Autor: Matheus Saad
// Likes: 15

// Criando template string HTML
const html = `
    <h2>Post: ${postTitle}</h2>
    <p>Autor: ${postAuthor}</p>
    <span>Likes: ${postLikes}</span>
`
console.log(html)
// OutPut:
// <h2>Post: É bolacha ou biscoito?</h2>
// <p>Autor: Matheus Saad</p>
// <span>Likes: 21</span>