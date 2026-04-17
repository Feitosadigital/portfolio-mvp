const projetos = [
    {
        nome: "Portfólio Pessoal do Augusto",
        descricao: "Meu primeiro site utilizando HTML, CSS e JavaScript",
        link: "#"
    },
    {
        nome: "Sistema Escolar Para Alunos",
        descricao: "Projeto simples de cadastro de alunos online",
        link: "#"
    },
    {
        nome: "Página de Serviços",
        descricao: "Site de divulgação de serviços escolares",
        link: "#"
    }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank">Ver projeto</a>
    `;

    lista.appendChild(card);
});