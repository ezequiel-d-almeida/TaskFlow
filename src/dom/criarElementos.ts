import type { Tarefa } from "../types/tarefa.js"

export function criarP(
    tarefa: Tarefa
): HTMLParagraphElement {
    const p = document.createElement("p")

    if (!tarefa.concluida) {
       p.classList.add("tarefa") 
    }

    if (tarefa.concluida) {
        p.classList.add("tarefa_concluida")
    }

    p.textContent = tarefa.titulo
    return p;
}

export function criarPdescricao(
    tarefa: Tarefa
): HTMLParagraphElement {
    const pDescrition = document.createElement("p")

    pDescrition.classList.add("descricao__tarefa")

    pDescrition.textContent = tarefa.descricao
    return pDescrition
}

export function criarPrioridade(
    tarefa: Tarefa
): HTMLParagraphElement {
    const pPriority = document.createElement("p")

    pPriority.classList.add("prioridade__tarefa")

    pPriority.textContent = `priordade: ${tarefa.prioridade}`
    return pPriority;
}

export function criarPcategoria(
    tarefa: Tarefa
): HTMLParagraphElement {
    const pCategory = document.createElement("p")

    pCategory.classList.add("categoria__tarefa")

    pCategory.textContent = `categoria: ${tarefa.categoria}`
    return pCategory;
}

export function criarCard() :HTMLLIElement {
    const li = document.createElement("li")
    li.classList.add("card__tarefa")

    return li;
}

export function criarBotaoConcluir(): HTMLButtonElement {
    const concluse = document.createElement("button")
    concluse.textContent = "Concluir"
    concluse.classList.add("botao__concluir")

    return concluse;
}

export function criarBotaoDeletar(): HTMLButtonElement {
    const deletar = document.createElement("button")
        deletar.textContent = "Excluir"
        deletar.classList.add("botao__excluir")

        return deletar;
}