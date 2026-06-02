export function criarTarefa(titulo, categoria, prioridade, descricao) {
    let valida = validarTitulo(titulo);
    if (!valida) {
        return undefined;
    }
    let tarefa = MScriacao(titulo, categoria, prioridade, descricao);
    return tarefa;
}
function validarTitulo(titulo) {
    if (titulo.trim() === "") {
        return false;
    }
    return true;
}
function MScriacao(titulo, categoria, prioridade, descricao) {
    let tarefa = {
        id: Date.now(),
        titulo,
        concluida: false,
        categoria,
        prioridade,
        descricao,
    };
    return tarefa;
}
//# sourceMappingURL=criarTarefa.js.map