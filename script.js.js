const projetos = [
  {
    nome: "Calculadora",
    descricao: "Aplicação em JavaScript que realiza operações matemáticas básicas."
  },
  {
    nome: "Site de Loja",
    descricao: "Layout de e-commerce desenvolvido com HTML e CSS."
  },
  {
    nome: "Lista de Tarefas",
    descricao: "Sistema simples para adicionar e remover tarefas usando JavaScript."
  }
];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
  `;

  container.appendChild(div);
});