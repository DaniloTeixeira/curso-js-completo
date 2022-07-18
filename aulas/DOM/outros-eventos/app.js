// Eventos DOM

// copy
const paragraph = document.querySelector('.copy-me');

paragraph.addEventListener('copy', () => {
    console.log('texto copiado');
});

// mousemove
const div = document.querySelector('.box');

div.addEventListener('mousemove', (event) => {
    div.textContent = `Eixo X: ${event.offsetX}px | Eixo Y: ${event.offsetY}px`;
});

// whell - (captura o scroll da página)
document.addEventListener('wheel', (event) => {
    console.log(event.pageX, event.pageY);
});

// -> Listagem de eventos DOM
// https://developer.mozilla.org/en-US/docs/Web/Events