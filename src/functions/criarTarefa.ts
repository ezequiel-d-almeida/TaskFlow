import type { Tarefa } from "../types/tarefa.js";

export function criarTarefa(
    titulo: string
) {
    let valida: boolean = validarTitulo(titulo)

    if (!valida) {return undefined;}
    
    let tarefa: Tarefa = MScriacao(titulo)
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
    titulo: string
) {
    let tarefa: Tarefa = {
        id: Date.now(),
        titulo,
        concluida: false
    }

    return tarefa 
} 