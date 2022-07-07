// Objetos em arrays

const user = {
    name: 'João',
    age: 35,
    email: 'joao@gmail.com',
    city: 'São Roque',
    blogPosts: [
        { title: 'Feijuca do João', likes: 40 },
        { title: 'Receitas caseiras do João', likes: 35 },
    ],

    login() {
        console.log('Usuário logado.');
    },

    logout() {
        console.log('Usuário delogado.');
    },

    logBlogPosts() {
        console.log(`${this.name} escreveu os seguintes posts:`);
        this.blogPosts.forEach(post => console.log(post.title, post.likes));
    }
};

user.logBlogPosts();