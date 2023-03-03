
const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');

//Evento de interação com o usuário que recebe os dados passados utilizando inputs do projeto base:

//pega o evento e para o comportamento padrão dele.
//submit é um evento.
//quando disparar o evento clicando em submit, vai executar uma função (evento) que para o comportamento padrão e pega o valor do elemento alvo daquele evento.

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    //cria o elemento novo com base nos valores dos campos de input quando o evento é disparado.
    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value);

    //reseta os cmapos nome e quantidade após o submit
    evento.target.elements['nome'].value = "";
    evento.target.elements['quantidade'].value = "";
});

//Função que recebe esses os dados de item e quantidade, e retorne adicionando-os na lista ul, estilizados com a tag strong.

//para criar o elemento precisa receber os elementos nome e quantidade
function criaElemento(nome, quantidade) {

    const novoItem = document.createElement('li'); //cria o elemento HTML de lista
    novoItem.classList.add('item'); //atribui uma classe ao elemento HTML criado

    const numeroItem = document.createElement('strong'); //cria a tag strong
    numeroItem.innerHTML = quantidade; //da o valor de quantidade como conteúdo da tag strong

    novoItem.appendChild(numeroItem); //cria um objeto NO HTML
    novoItem.innerHTML += nome; // adiciona o nome após tag strong
    
    //const lista = document.getElementById('lista'); **pega o id de lista do HTML

    lista.appendChild(novoItem); //cria um objeto NO HTML: <li>
};