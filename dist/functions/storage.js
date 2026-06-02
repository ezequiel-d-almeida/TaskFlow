import { renderizarLista } from "./renderizarTarefas.js";
import { tarefas } from "../data/tarefas.js";
export function salvarLocalStorage() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}
export function carregarLocalStorage() {
    const dadosSalvos = localStorage.getItem("tarefas");
    if (dadosSalvos) {
        const dadosConvertidos = JSON.parse(dadosSalvos);
        tarefas.push(...dadosConvertidos);
        renderizarLista(tarefas);
        salvarLocalStorage();
    }
}
//# sourceMappingURL=storage.js.map