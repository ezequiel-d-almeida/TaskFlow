import type { Tarefa } from "../types/tarefa.js"

export function criarP(
    tarefa: Tarefa
): HTMLParagraphElement {
    const p = document.createElement("p")

    p.classList.add("tarefa")

    if (tarefa.concluida) {
        p.classList.add("tarefa_concluida")
    }

    p.textContent = tarefa.titulo
    return p;
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

