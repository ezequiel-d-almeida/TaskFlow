import type { Prioridade } from "../types/prioridade.js";
import type { Tarefa } from "../types/tarefa.js";

export function criarTarefa(
    titulo: string,
    categoria: string,
    prioridade: Prioridade,
    descricao: string
) {
    let valida: boolean = validarTitulo(titulo)

    if (!valida) {return undefined;}
    
    let tarefa: Tarefa = MScriacao(titulo, categoria, prioridade, descricao)
    return tarefa;
}

function validarTitulo(
    titulo: string
) {
    if (titulo.trim() === "") {
        return false
    }

    return true
}

function MScriacao(
    titulo: string,
    categoria: string,
    prioridade: Prioridade,
    descricao: string
) {
    let tarefa: Tarefa = {
        id: Date.now(),
        titulo,
        concluida: false,
        categoria,
        prioridade,
        descricao,
    }

    return tarefa 
} 