/**
 *  DOM - Document Object Model
 *   - Criado pelo browser
 *   - Object "document" -> Gerado pelo carregamento do documento HTML, possui propriedades e métodos que podem ser usados para interagir com o documento carregado no browser
 *  
 */

/* Manipulando o DOM */

// Query Selector
// const errorDiv = document.querySelector('div.error');

// console.log(errorDiv);

// Query Selector All
const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach(paragraph => console.log(paragraph));

const errors = document.querySelectorAll('.error');
console.log(errors);
