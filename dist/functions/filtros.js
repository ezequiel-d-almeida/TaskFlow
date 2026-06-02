export function filtrarPendentes(tarefas) {
    let pendentes = tarefas.filter(tarefa => !tarefa.concluida);
    return pendentes;
}
export function filtrarConcluidas(tarefas) {
    let concluidas = tarefas.filter(tarefa => tarefa.concluida);
    return concluidas;
}
export function filtrarPrioridade(tarefas) {
    let prioridadeAlta = tarefas.filter(tarefa => tarefa.prioridade === "Alta");
    return prioridadeAlta;
}
//# sourceMappingURL=filtros.js.map