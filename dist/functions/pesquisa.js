import { tarefas } from "../data/tarefas.js";
import { btnPesquisa, inputPesquisa } from "../dom/elementos.js";
import { renderizarLista } from "./renderizarTarefas.js";
export function pesquisarTarefas(valorPesquisa) {
    let resultadoPesquisa = [];
    for (let tarefa of tarefas) {
        let tituloClean = tarefa.titulo.toLowerCase();
        let categoriaClean = tarefa.categoria.toLowerCase();
        let descricaoClean = tarefa.descricao.toLowerCase();
        let prioridadeClean = tarefa.prioridade.toLowerCase();
        if (tituloClean.includes(valorPesquisa) || categoriaClean.includes(valorPesquisa) || descricaoClean.includes(valorPesquisa) || prioridadeClean.includes(valorPesquisa)) {
            resultadoPesquisa.push(tarefa);
        }
    }
    return resultadoPesquisa;
}
//# sourceMappingURL=pesquisa.js.map