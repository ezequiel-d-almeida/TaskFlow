export function gerarEstatisticas(tarefas) {
    let dados = {
        total: tarefas.length,
        concluidas: 0,
        pendentes: 0
    };
    let concluidas = tarefas.filter(tarefa => tarefa.concluida);
    let pendentes = tarefas.filter(tarefa => !tarefa.concluida);
    dados.concluidas = concluidas.length;
    dados.pendentes = pendentes.length;
    return dados;
}
//# sourceMappingURL=limparDados.js.map