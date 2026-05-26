import { enviar, selectCategoria, selectPrioridade, btnConcluidas, btnPendentes, btnPrioridades, btnTodas, descricao } from "../dom/elementos.js";
import { input } from "../dom/elementos.js";
import { criarTarefa } from "./criarTarefa.js";
import { tarefas } from "../data/tarefas.js";
import type { Tarefa } from "../types/tarefa.js";
import { renderizarLista } from "./renderizarTarefas.js";
import { salvarLocalStorage } from "./storage.js";
import { filtrarConcluidas, filtrarPendentes, filtrarPrioridade } from "./filtros.js";

export function iniciarEventos() {
    enviar.addEventListener("click", function() {
        let titulo: string = input.value
        let categoria: string = selectCategoria.value
        let prioridade: string = selectPrioridade.value
        let descricao_tarefa: string = descricao.value

        let tarefa: Tarefa | undefined = criarTarefa(titulo, categoria, prioridade, descricao_tarefa)

        if (tarefa !== undefined) {
            tarefas.push(tarefa)
            salvarLocalStorage()
            renderizarLista(tarefas)
            input.value = ""
            descricao.value = ""
        }

        console.log(tarefas)
    })

    btnConcluidas.addEventListener("click", function() {
        let concluidas: Tarefa[] = filtrarConcluidas(tarefas)
        renderizarLista(concluidas)
    })

    btnPendentes.addEventListener("click", function() {
        let pendentes: Tarefa[] = filtrarPendentes(tarefas)
        renderizarLista(pendentes)
    })

    btnPrioridades.addEventListener("click", function() {
        let prioridadeAlta: Tarefa[] = filtrarPrioridade(tarefas)
        renderizarLista(prioridadeAlta)
    })

    btnTodas.addEventListener("click", function() {
        renderizarLista(tarefas)
    })
}