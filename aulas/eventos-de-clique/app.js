const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('Clicou no botão!');
// });

// -> Removendo elemento do DOM
const ul = document.querySelector('ul');
// ul.remove();


button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Novo item';

    // Insere o li dentro da ul, como último elemento
    ul.append(li);

    // Insere a li dentro da ul, como primeiro elemento
    // ul.prepend(li);
});

ul.addEventListener('click', (event) => {
    const clickedElement = event.target;

    if (clickedElement.tagName === 'LI') {
        clickedElement.remove();
    }
});

// Event Bubbling -> é quando o usuário interage com um elemento no HTML, e o evento se propaga como "bolhas" em seus elementos ancestrais na ordem crescente de aninhamento. Para evitar esse comportamento, deve ser usado o método stopPropagation()

// Event Delegation -> é um padrão para lidar com eventos de forma eficiente. Em vez de adicionar um ouvinte de evento a cada elemento semelhante, podemos adicionar um ouvinte de evento a um elemento pai e chamar um evendo em um destino específico, usando a propriedade .target do objeto evento.