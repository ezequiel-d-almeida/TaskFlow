import { renderizarLista } from "./renderizarTarefas.js"
import { tarefas } from "../data/tarefas.js"
import type { Tarefa } from "../types/tarefa.js"

export function salvarLocalStorage(): void {
    localStorage.setItem(
        "tarefas",
        JSON.stringify(tarefas)
    )
}

export function carregarLocalStorage(): void {
    const dadosSalvos = localStorage.getItem("tarefas")

    if (dadosSalvos) {
        const dadosConvertidos: Tarefa[] = JSON.parse(dadosSalvos)

        tarefas.push(...dadosConvertidos)
        renderizarLista(tarefas)
        salvarLocalStorage()
    }
}