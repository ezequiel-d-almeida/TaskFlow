import type { Tarefa } from "../types/tarefa.js";
import { ul, input, descricao, selectCategoria, selectPrioridade, enviar } from "../dom/elementos.js";
import { criarP, criarPcategoria, criarPrioridade, criarBotaoDeletar, criarCard, criarBotaoConcluir, criarBotaoEditar, criarPdescricao } from "../dom/criarElementos.js";
import { salvarLocalStorage } from "./storage.js";
import type { Prioridade } from "../types/prioridade.js";

export function renderizarLista(
    tarefas: Tarefa[]
): void {
    ul.innerHTML = ""
    criarItemLista(ul, tarefas)
}

export const estado = {
    tarefaEmEdicao: null as Tarefa | null
}

function criarItemLista(
    ul: HTMLUListElement,
    tarefas: Tarefa[]
) :void {
    for (const tarefa of tarefas) {
        const li = criarCard()
        const p = criarP(tarefa)
        const pCategory = criarPcategoria(tarefa)
        const pPriority = criarPrioridade(tarefa)
        const pDescrition = criarPdescricao(tarefa)
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

        const editar = criarBotaoEditar()

        editar.addEventListener("click", function() {
            
            estado.tarefaEmEdicao = tarefa

            input.value = tarefa.titulo
            descricao.value = tarefa.descricao
            selectCategoria.value = tarefa.categoria
            selectPrioridade.value = tarefa.prioridade

            enviar.textContent = "Salvar Alterações"
        })

        li.append(concluse, p, pDescrition, pCategory, pPriority, editar, deletar)
        ul.appendChild(li)
    }
}