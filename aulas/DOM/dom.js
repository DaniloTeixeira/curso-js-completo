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
const paragraphs = document.querySelectorAll("p");
// paragraphs.forEach(paragraph => console.log(paragraph));

const errors = document.querySelectorAll(".error");
// console.log(errors);

// GetElementById
const title = document.getElementById("title");
// console.log(title);

const errors2 = document.getElementsByClassName("error");
// console.log(errors2);

const paragraphs2 = document.getElementsByTagName("p");
// console.log(paragraphs2);

const paragraph3 = document.querySelector("p");
// paragraph3.innerHTML += " Texto inserido :)";

const paragraphs3 = document.querySelectorAll("p");
// paragraphs3.forEach((p, index) => {
//   p.innerText += ` | Novo texto: ${index + 1}`;
// });

const div = document.querySelector(".content");
// div.innerHTML += "<h2> Novo H2, inserido com o innerHTML <h2/>";

const people = ["Jhonatan", "Vinícius", "Diego"];
// people.forEach((person) => {
//   div.innerHTML += `<p> ${person} <p/>`;
// });

/**
 * innerTEXT -> Retorna somente o texto, sem formatações ou elementos html
 * innerHTML -> Retorna o texto, com formatações e com elementos html
 * textContext -> Retorna o texto, mas sem os elementos html
 *
 * Os três são getters e setters, podem obter ou modificar valores
 */

// Obtendo e setando atributos
const link = document.querySelector("a");
// console.log(link.getAttribute("href"));

link.setAttribute("href", "https://rogermelo.com.br");
link.innerText = "Website do Roger Melo";

const paragraph4 = document.querySelector(".errorMsg");

// console.log(paragraph4.getAttribute("class"));
paragraph4.setAttribute("class", "success");

paragraph4.setAttribute("style", "color:green;");
