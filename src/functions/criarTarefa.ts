import type { Tarefa } from "../types/tarefa.js";

export function criarTarefa(
    titulo: string,
    categoria: string,
    prioridade: string,
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
    prioridade: string,
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