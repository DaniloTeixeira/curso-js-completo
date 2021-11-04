// Controle de fluxo
// O propósito de um loop, é executar um código repetidas vezes

// For loop - enquanto a condição dentro do loop for true, o bloco de código dentro dele será executado, quando for false, ele é finalizado
for (let i = 0; i < 5; i++) {
  //   console.log(`Dentro do loop: ${i}`);
}

// Este console só será exibido, após a conclusão do loop
// console.log("Loop concluído");

const names = ["Linus", "Ada", "Bill"];

for (let i = 0; i < names.length; i++) {
  //   console.log(names[i]); // exibe cada um dos valores que representam o index do array
  const HTMLTemplate = `index ${i} = ${names[i]}`;
  //   console.log(HTMLTemplate);
}

// While loop
let i = 0;
while (i < 5) {
  //   console.log(`A variável 'i' está aparecendo porque ela vale: ${i}`);
  i++;
}

const names2 = ["Jobs", "Hopper", "Turing"];
let i2 = 0;

while (i2 < names2.length) {
  // console.log(names2[i2]);
  i2++;
}
