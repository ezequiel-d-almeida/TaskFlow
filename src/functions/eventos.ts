import { enviar } from "../dom/elementos.js";
import { input } from "../dom/elementos.js";
import { criarTarefa } from "./criarTarefa.js";
import { tarefas } from "../data/tarefas.js";
import type { Tarefa } from "../types/tarefa.js";
import { renderizarLista } from "./renderizarTarefas.js";
import { salvarLocalStorage } from "./storage.js";

export function iniciarEventos() {
    enviar.addEventListener("click", function() {
        let titulo: string = input.value

        let tarefa: Tarefa | undefined = criarTarefa(titulo)

        if (tarefa !== undefined) {
            tarefas.push(tarefa)
            salvarLocalStorage()
            renderizarLista(tarefas)
            input.value = ""
        }
    })
}