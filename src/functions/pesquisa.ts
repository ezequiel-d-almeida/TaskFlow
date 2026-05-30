import { tarefas } from "../data/tarefas.js";
import { btnPesquisa, inputPesquisa } from "../dom/elementos.js";
import { renderizarLista } from "./renderizarTarefas.js";
import type { Tarefa } from "../types/tarefa.js";

export function pesquisarTarefas(
    valorPesquisa: string
): Tarefa[] {
    let resultadoPesquisa: Tarefa[] = []

    for (let tarefa of tarefas) {

        let tituloClean: string = tarefa.titulo.toLowerCase() 
        let categoriaClean: string = tarefa.categoria.toLowerCase() 
        let descricaoClean: string = tarefa.descricao.toLowerCase()
        let prioridadeClean: string = tarefa.prioridade.toLowerCase()

        if (tituloClean.includes(valorPesquisa) || categoriaClean.includes(valorPesquisa) || descricaoClean.includes(valorPesquisa) || prioridadeClean.includes(valorPesquisa)) {
           resultadoPesquisa.push(tarefa)
        }
    }

    return resultadoPesquisa;
}