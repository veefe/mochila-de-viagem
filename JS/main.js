
const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');
const itens = []; //cria array de objetos para itens **só guarda strings

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    criaElemento(nome.value, quantidade.value);

    nome.value = "";
    quantidade.value = "";
});

function criaElemento(nome, quantidade) {

    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);

    //pega os valores de nome e quantidade
    const itemAtual = {
        'nome': nome,
        'quantidade': quantidade
    }

    //insere o item atual no array itens
    itens.push(itemAtual)

    //converte os valores de itens em strings usando o JSON e armazena no localStorage
    localStorage.setItem('item', JSON.stringify(itens));
};