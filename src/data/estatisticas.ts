import { gerarEstatisticas } from "../functions/limparDados.js";
import type { Estatisticas } from "../types/dados_limpos.js";
import { tarefas } from "./tarefas.js";

export let estatisticas: Estatisticas

estatisticas = gerarEstatisticas(tarefas)