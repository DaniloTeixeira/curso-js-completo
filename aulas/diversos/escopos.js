/**
 * ESCOPOS (É a visibilidade de uma variável)
 * -> Escopo de funções
 * -> Escopo de bloco
 * -> Escopo léxico
 */

// Escopo de função - Variáveis declaradas dentro de uma função, só serão acessadas de dentro da função
function myFn() {
    let cat = 'Zeca';
    const age = 3;
    var color = 'preto';
}

// Escopo global
const dog = 'Pastor-Alemão';

function dogWatch() {
    // Escopo local  
    const dog = 'Border Collie';
    console.log(dog);
}

console.log(dog);


// Escopo de bloco - Variável pode ser acessada apenas no escopo no qual foi criada, com exeção do "var", que pode      ultrapada o escopo na qual foi declarado

if (true) {
    let dragon = 'Balerion';
    console.log(dragon);
}

console.log(dragon); // Disponível apenas no escopo do if


// Escopo léxico - Funções aninhadas estão sujeitas a buscar variáveis no escopo acima mais próximo delas
// Uma variável declarada dentro de uma função, pode ser acessada em uma função aninhada a ela 

const externalFn = () => {
    const book = 'Sapiens';

    const internalFn = () => {
        const book = 'Os Testamentos';

        const extraInternal = () => {
            console.log(book.toUpperCase());
        };

        extraInternal();
    };

    internalFn();
};

externalFn();