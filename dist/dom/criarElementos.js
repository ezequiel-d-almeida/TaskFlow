export function criarP(tarefa) {
    const p = document.createElement("p");
    if (!tarefa.concluida) {
        p.classList.add("tarefa");
    }
    if (tarefa.concluida) {
        p.classList.add("tarefa_concluida");
    }
    p.textContent = tarefa.titulo;
    return p;
}
export function criarPdescricao(tarefa) {
    const pDescrition = document.createElement("p");
    pDescrition.classList.add("descricao__tarefa");
    pDescrition.textContent = tarefa.descricao;
    return pDescrition;
}
export function criarPrioridade(tarefa) {
    const pPriority = document.createElement("p");
    if (tarefa.prioridade === "Alta") {
        pPriority.classList.add("altaPrioridade");
    }
    else if (tarefa.prioridade === "Média") {
        pPriority.classList.add("mediaPrioridade");
    }
    else {
        pPriority.classList.add("baixaPrioridade");
    }
    pPriority.textContent = `${tarefa.prioridade}`;
    return pPriority;
}
export function criarPcategoria(tarefa) {
    const pCategory = document.createElement("p");
    pCategory.classList.add("categoria__tarefa");
    pCategory.textContent = `${tarefa.categoria}`;
    return pCategory;
}
export function criarCard() {
    const li = document.createElement("li");
    li.classList.add("card__tarefa");
    return li;
}
export function criarBotaoConcluir() {
    const concluse = document.createElement("button");
    concluse.textContent = "Concluir";
    concluse.classList.add("botao__concluir");
    return concluse;
}
export function criarBotaoDeletar() {
    const deletar = document.createElement("button");
    deletar.textContent = "Excluir";
    deletar.classList.add("botao__excluir");
    return deletar;
}
export function criarBotaoEditar() {
    const editar = document.createElement("button");
    editar.textContent = "Editar";
    editar.classList.add("botao__editar");
    return editar;
}
export function criarHeader() {
    const header = document.createElement("div");
    header.classList.add("card__header");
    return header;
}
export function criarBody() {
    const body = document.createElement("div");
    body.classList.add("card__body");
    return body;
}
export function criarInfo() {
    const info = document.createElement("div");
    info.classList.add("card__info");
    return info;
}
export function criarActions() {
    const actions = document.createElement("div");
    actions.classList.add("card__actions");
    return actions;
}
//# sourceMappingURL=criarElementos.js.map