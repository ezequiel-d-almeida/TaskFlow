import type { Tarefa } from "../types/tarefa.js";

export function filtrarPendentes(
    tarefas: Tarefa[]
) {
    let pendentes: Tarefa[] = tarefas.filter(tarefa => !tarefa.concluida)
    return pendentes;
}

export function filtrarConcluidas(
    tarefas: Tarefa[]
) {
    let concluidas: Tarefa[] = tarefas.filter(tarefa => tarefa.concluida)
    return concluidas;
}

export function filtrarPrioridade(
    tarefas: Tarefa[]
) {
    let prioridadeAlta: Tarefa[] = tarefas.filter(tarefa => tarefa.prioridade === "Alta")
    return prioridadeAlta;
}
