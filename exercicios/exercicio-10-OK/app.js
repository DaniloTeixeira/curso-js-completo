/*
  01

  - Crie um objeto "cat" que possui as seguintes propriedades:
    - name, que recebe o nome do gato;
    - age, que recebe a idade;
    - color, que recebe a cor;
    - bestFriends, que recebe um array com os melhores amigos do gato;
    - sound, que é um método que retorna o miado do gato.
  - Exiba o objeto no console.
*/

cat = {
  name: 'Garfield',
  age: 2,
  color: 'Amarelo',
  besfriends: ['Alfredo', 'Bechano'],

  sound() {
    return 'meawww!';
  }
};

console.log(cat);

/*
  02

  - Exiba a mensagem abaixo no console, substituindo os "X" pelas informações  
    corretas.

  Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "X", "age", que recebeu "X", "color", que recebeu "X", "bestFriends", que recebeu um array com os itens "X" e "X", e "sound", que recebeu uma função que retorna "X".
*/

console.log(`Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "${cat.name}", "age", que recebeu "${cat.age}", "color", que recebeu "${cat.color}", "bestFriends", que recebeu um array com os itens "${cat.besfriends[0]}" e "${cat.besfriends[1]}", e "sound", que recebeu uma função que retorna "${cat.sound()}".`);

/*
  03

  - Adicione 2 anos à idade do gato e exiba a idade atualizada no console.
*/

cat.age += 2;
console.log(cat.age);

/*
  04

  - Crie uma função que adiciona um amigo(a) no array de amigos do gato;
  - Exiba o array de amigos no console para verificar se o novo amigo(a) foi  
    adicionado.
*/
const addFriends = (friend => cat.besfriends.push(friend));

addFriends('Novo amigo');

console.log(cat.besfriends);

/*
  05

  - Crie uma função que adiciona mais uma cor à cor do gato;
  - Utilize a sintaxe de colchetes para fazer isso;
  - Exiba a nova cor do gato no console, também utilizando a sintaxe de  
    colchetes.
*/

const changeColor = (color => cat['color'] += ` e ${color}`);

changeColor('preto');

console.log(cat.color);

/*
  06

  - Crie uma função que retorna um boolean indicando se um valor recebido por  
    parâmetro é um objeto;
  - Utilize a função para exibir no console se "cat" é um objeto.
*/

// 3 maneiras diferentes
const isObject = (obj => obj instanceof Object);
const isObject2 = (obj => typeof obj === 'object');
const isObject3 = (obj => obj === Object(obj));

console.log(isObject(cat));

console.log(isObject2(cat)); // Não funciona em todos os casos, pode retornar falso "true", caso o valor seja nulo e    falso "false" se o valor for uma função

console.log(isObject3(cat));

/*
  07

  - Crie um objeto "dog" que possui as mesmas propriedades do objeto "cat";
  - Crie uma função que retorna a mensagem abaixo, com as informações corretas;
  - Exiba a mensagem no console.

  "A soma das idades de NOME_DO_GATO e NOME_DO_CACHORRO é RESULTADO_DA_SOMA."
*/

dog = {
  name: 'Dudu',
  age: 3,
  color: 'Marrom e preto',
  besfriends: ['Belinha', 'Amora'],

  sound() {
    return 'au! auuuu!!!';
  }
};

const getSumAges = ((obj1, obj2) => `A soma das idades de ${obj1.name} e ${obj2.name} é ${obj1.age + obj2.age}.`);

console.log(getSumAges(cat, dog));

/*
  08

  - Se você descomentar os 2 console.log abaixo, verá que a função "isAnSUV"  
    está funcionando corretamente. Mas ela pode ser melhorada;
  - Como você refatoraria esta função?
*/

cars = ['Honda HR-V', 'Jeep Renegade', 'Ford EcoSport', 'Hyundai', 'iX35'];

const isAnSUV = (car) => cars.includes(car);

console.log(isAnSUV('Honda Civic'));
console.log(isAnSUV('Ford EcoSport'));

/*
  09

  - Crie uma função que recebe um parâmetro 'type';
  - Dentro da função, crie um objeto com as seguintes propriedades:
    - null, que recebe a mensagem 'Seta, explicitamente, uma variável sem valor.'
    - undefined, que recebe a mensagem 'Representa um valor não-setado.'
    - object, que recebe a mensagem 'Arrays, Datas, Objetos literais, Funções, etc.'
  - Se o valor que o parâmetro type receber corresponder à alguma das 3
    propriedades, retorne a mensagem que a propriedade armazena;
  - Teste a função, exibindo no console a mensagem de cada propriedade.
*/

const getTypeDefinition = (type => {
  // Maneira 1
  const obj = {
    null: 'Seta, explicitamente, uma variável sem valor.',
    undefined: 'Representa um valor não-setado.',
    object: 'Arrays, Datas, Objetos literais, Funções, etc.'
  };

  return obj[type];


  // Maneira 2
  //   return {
  //     null: 'Seta, explicitamente, uma variável sem valor.',
  //     undefined: 'Representa um valor não-setado.',
  //     object: 'Arrays, Datas, Objetos literais, Funções, etc.'
  //   }[type];
});

console.log(getTypeDefinition('null'));
console.log(getTypeDefinition('undefined'));
console.log(getTypeDefinition('object'));