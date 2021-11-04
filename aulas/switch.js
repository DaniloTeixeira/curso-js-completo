// switch statement

const grade = "B";

// Usando o if
if (grade === "A") {
  console.log("Você tirou um A");
} else if (grade === "B") {
  console.log("Você tirou um B");
} else if (grade === "C") {
  console.log("Você tirou um C");
} else if (grade === "D") {
  console.log("Você tirou um D");
} else if (grade === "E") {
  console.log("Você tirou um E");
} else {
  console.log("Nota inválida!");
}

// Usando o switch - o comando "break" irá parar a execução, caso  a condição acima retornar true
//                   o comando "default" será executado, caso nenhuma das condições acima retornarem true
switch (grade) {
  case "A":
    console.log("Você tirou um A");
    break;
  case "B":
    console.log("Você tirou um B");
    break;
  case "C":
    console.log("Você tirou um C");
    break;
  case "D":
    console.log("Você tirou um D");
    break;
  case "E":
    console.log("Você tirou um E");
    break;
  default:
    console.log("Nota inválida!");
}
