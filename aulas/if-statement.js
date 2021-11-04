// if - condicional 'se'

const age = 18;

if (age > 19) {
  //   console.log("Você tem mais de 18 anos");
}

const simpsons = ["Marge", "Homer", "Lisa", "Bart"];

if (simpsons.length >= 3) {
  //   console.log("O array simpsons tem vários personagens");
}

// else - condicional 'senão'

const password = "oi1234561231";

// && - simboliza 'e', executa o comando, se as duas condições retornarem true
// || - simboliza 'ou', execura o comando, se uma das opções retornarem true
if (password.length >= 12 && password.includes("1")) {
  console.log("Senha muito forte");
} else if (
  password.length >= 8 ||
  (password.includes("1") && password.length > 5)
) {
  console.log("Senha forte");
} else {
  console.log("A senha deve conter 8 ou mais caracteres");
}
