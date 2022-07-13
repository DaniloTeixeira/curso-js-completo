const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('Clicou no botão!');
// });

// -> Removendo elemento do DOM
const ul = document.querySelector('ul');
// ul.remove();

const liList = document.querySelectorAll('li');

liList.forEach(li => {
    li.addEventListener('click', (event) => {
        const clickedElement = event.target;
        // clickedElement.style.textDecoration = 'line-through';

        clickedElement.remove();
    });
});

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Novo item';

    // Insere o li dentro da ul, como último elemento
    ul.append(li);

    // Insere a li dentro da ul, como primeiro elemento
    // ul.prepend(li);
});
