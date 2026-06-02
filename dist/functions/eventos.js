import { enviar, selectCategoria, selectPrioridade, btnConcluidas, btnPendentes, btnPrioridades, btnTodas, descricao, btnPesquisa, inputPesquisa } from "../dom/elementos.js";
import { input } from "../dom/elementos.js";
import { criarTarefa } from "./criarTarefa.js";
import { tarefas } from "../data/tarefas.js";
import { renderizarLista, estado } from "./renderizarTarefas.js";
import { salvarLocalStorage } from "./storage.js";
import { filtrarConcluidas, filtrarPendentes, filtrarPrioridade } from "./filtros.js";
import { pesquisarTarefas } from "./pesquisa.js";
export function iniciarEventos() {
    enviar.addEventListener("click", function () {
        if (estado.tarefaEmEdicao) {
            estado.tarefaEmEdicao.titulo = input.value;
            estado.tarefaEmEdicao.descricao = descricao.value;
            estado.tarefaEmEdicao.categoria = selectCategoria.value;
            estado.tarefaEmEdicao.prioridade = selectPrioridade.value;
            salvarLocalStorage();
            renderizarLista(tarefas);
            estado.tarefaEmEdicao = null;
            enviar.textContent = "Enviar";
            input.value = "";
            descricao.value = "";
        }
        else {
            let titulo = input.value;
            let categoria = selectCategoria.value;
            let prioridade = selectPrioridade.value;
            let descricao_tarefa = descricao.value;
            let tarefa = criarTarefa(titulo, categoria, prioridade, descricao_tarefa);
            if (tarefa !== undefined) {
                tarefas.push(tarefa);
                salvarLocalStorage();
                renderizarLista(tarefas);
                input.value = "";
                descricao.value = "";
            }
        }
    });
    btnConcluidas.addEventListener("click", function () {
        let concluidas = filtrarConcluidas(tarefas);
        renderizarLista(concluidas);
    });
    btnPendentes.addEventListener("click", function () {
        let pendentes = filtrarPendentes(tarefas);
        renderizarLista(pendentes);
    });
    btnPrioridades.addEventListener("click", function () {
        let prioridadeAlta = filtrarPrioridade(tarefas);
        renderizarLista(prioridadeAlta);
    });
    btnTodas.addEventListener("click", function () {
        renderizarLista(tarefas);
    });
    btnPesquisa.addEventListener("click", function () {
        console.log("está rodando");
        let valorPesquisa = "";
        valorPesquisa = inputPesquisa.value.toLowerCase();
        if (valorPesquisa.trim() === "") {
            return;
        }
        else {
            let resultado = pesquisarTarefas(valorPesquisa);
            renderizarLista(resultado);
        }
    });
}
//# sourceMappingURL=eventos.js.map