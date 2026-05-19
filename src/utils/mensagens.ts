import { mensagem } from "../dom/elementos.js";

export function campoVazio():void {
    mensagem.textContent = "Dê um título à sua tarefa."
}

export function limparMensagem():void {
    mensagem.textContent = ""
} 