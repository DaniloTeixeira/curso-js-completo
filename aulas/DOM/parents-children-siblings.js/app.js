// Parents, children e siblings

const article = document.querySelector('article');

// // -> .children selecionar os elementos filhos
// console.log(article.children)

// // -> Array.from(), converte em um array
// Array.from(article.children).forEach(element => {
//     element.classList.add('article-element');
// });

const title = document.querySelector('h2');

// -> .parentElement seleciona o elemento pai
console.log(title.parentElement);

// -> encadeando dois parentElement, vimos que é o pai do elemento pai
console.log(title.parentElement.parentElement);

// -> seleciona o próximo elemento irmão
console.log(title.parentElement.nextElementSibling);

// -> seleciona o elemento irmão anterior
console.log(title.parentElement.previousElementSibling);
