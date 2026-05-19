import type { Tarefa } from "../types/tarefa.js";
import { ul } from "../dom/elementos.js";
import { criarBotaoConcluir } from "../dom/criarElementos.js";
import { criarBotaoDeletar } from "../dom/criarElementos.js";
import { criarCard } from "../dom/criarElementos.js";
import { criarP } from "../dom/criarElementos.js";
import { salvarLocalStorage } from "./storage.js";

export function renderizarLista(
    tarefas: Tarefa[]
): void {
    ul.innerHTML = ""
    criarItemLista(ul, tarefas)
}
  
function criarItemLista(
    ul: HTMLUListElement,
    tarefas: Tarefa[]
) :void {
    for (const tarefa of tarefas) {
        const li = criarCard()
        const p = criarP(tarefa)
        const deletar = criarBotaoDeletar()

        deletar.addEventListener("click", function() {
            const index = tarefas.findIndex( item => item.id === tarefa.id )
            tarefas.splice(index, 1)

            salvarLocalStorage()
            renderizarLista(tarefas)
        })

        const concluse = criarBotaoConcluir()

        concluse.addEventListener("click", function() {
            tarefa.concluida = !tarefa.concluida

            salvarLocalStorage()
            renderizarLista(tarefas)
        })

        li.append(concluse, p, deletar)
        ul.appendChild(li)
    }
}