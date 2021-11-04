// Break e continue

const scores = [50, 25, 0, 30, 100, 20, 10];

// continue - quando a condição retornar true, o continue pula a iteração atual do loop e segue para a próximqa iteração,
// no caso abaixo, quando a iteração tiver valor igual a zero, o número zero não será exibido no console e  o código abaixo
// da condição não será executado e o loop irá retornar sua iteração a partir do próximo item do array
for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue;
  }

  console.log(`Sua pontuação: ${scores[i]}`);

  if (scores[i] === 100) {
    console.log("Parabéns, você atingiu a pontuação máxima!");

    // break - para a execução do loop quando retornar true na condição imposta
    break;
  }
}
