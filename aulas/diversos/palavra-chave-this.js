// palavra chave "this" ->  é um objeto de contexto, ele representa o contexto no qual o código atual está sendo executado

const user = {
    name: 'João',
    age: 35,
    email: 'joao@gmail.com',
    city: 'São Roque',
    blogPosts: ['Feijuca do João', 'Receitas caseiras'],

    login() {
        console.log('Usuário logado.');
    },

    logout() {
        console.log('Usuário delogado.');
    },

    logBlogPosts() {
        console.log(`${this.name} escreveu os seguintes posts:`);
        this.blogPosts.forEach(post => console.log(post));
    }
};

user.login();
user.logout();
user.logBlogPosts();

console.log(this); // Neste caso está referenciando o objeto global window