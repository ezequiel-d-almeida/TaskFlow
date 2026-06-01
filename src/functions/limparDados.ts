import type { Estatisticas } from "../types/dados_limpos.js";
import type { Tarefa } from "../types/tarefa.js";

export function gerarEstatisticas(
    tarefas: Tarefa[]
) {
    let dados: Estatisticas = {
        total: tarefas.length,
        concluidas: 0,
        pendentes: 0
    }

    let concluidas = tarefas.filter(tarefa => tarefa.concluida)
    let pendentes = tarefas.filter(tarefa => !tarefa.concluida)

    dados.concluidas = concluidas.length
    dados.pendentes = pendentes.length

    return dados;
}