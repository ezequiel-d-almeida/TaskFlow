import { ul, input, descricao, selectCategoria, selectPrioridade, enviar } from "../dom/elementos.js";
import { criarP, criarPcategoria, criarPrioridade, criarBotaoDeletar, criarCard, criarBotaoConcluir, criarBotaoEditar, criarPdescricao, criarHeader, criarInfo, criarBody, criarActions } from "../dom/criarElementos.js";
import { salvarLocalStorage } from "./storage.js";
import { renderEstatisticas } from "../grafics/renderEstatisticas.js";
import { estatisticas } from "../data/estatisticas.js";
import { gerarEstatisticas } from "./limparDados.js";
import { renderDash } from "../grafics/dashboards.js";
export function renderizarLista(tarefas) {
    ul.innerHTML = "";
    criarItemLista(ul, tarefas);
    const estatisticas = gerarEstatisticas(tarefas);
    renderEstatisticas(estatisticas);
    renderDash(tarefas);
}
export const estado = {
    tarefaEmEdicao: null
};
function criarItemLista(ul, tarefas) {
    for (const tarefa of tarefas) {
        const li = criarCard();
        const header = criarHeader();
        const info = criarInfo();
        const body = criarBody();
        const actions = criarActions();
        const p = criarP(tarefa);
        const pCategory = criarPcategoria(tarefa);
        const pPriority = criarPrioridade(tarefa);
        const pDescrition = criarPdescricao(tarefa);
        const deletar = criarBotaoDeletar();
        deletar.addEventListener("click", function () {
            const index = tarefas.findIndex(item => item.id === tarefa.id);
            tarefas.splice(index, 1);
            salvarLocalStorage();
            renderizarLista(tarefas);
        });
        const concluse = criarBotaoConcluir();
        concluse.addEventListener("click", function () {
            tarefa.concluida = !tarefa.concluida;
            salvarLocalStorage();
            renderizarLista(tarefas);
        });
        if (tarefa.concluida) {
            concluse.textContent = "Ativar Novamente";
        }
        const editar = criarBotaoEditar();
        editar.addEventListener("click", function () {
            estado.tarefaEmEdicao = tarefa;
            input.value = tarefa.titulo;
            descricao.value = tarefa.descricao;
            selectCategoria.value = tarefa.categoria;
            selectPrioridade.value = tarefa.prioridade;
            enviar.textContent = "Salvar Alterações";
        });
        header.append(p);
        body.append(pDescrition);
        info.append(pCategory, pPriority);
        actions.append(concluse, editar, deletar);
        li.append(header, body, info, actions);
        ul.appendChild(li);
    }
}
//# sourceMappingURL=renderizarTarefas.js.map