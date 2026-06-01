declare const Chart: any

import { gerarEstatisticas } from "../functions/limparDados.js"
import type { Tarefa } from "../types/tarefa.js"

let grafico: any = null

export function renderDash(
    tarefas: Tarefa[]
) {

    const dados = gerarEstatisticas(tarefas)

    const concluidas = dados.concluidas
    const pendentes = dados.pendentes

    if (grafico) {
        grafico.destroy()
    }

    const canvas = document.querySelector("#grafico") as HTMLCanvasElement

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

    const gradientConcluidas = ctx.createLinearGradient(0, 0, 0, 400)

    gradientConcluidas.addColorStop(0, "rgb(13, 95, 0)")
    gradientConcluidas.addColorStop(1, "rgb(10, 64, 2)")

    const gradientPendentes = ctx.createLinearGradient(0, 0, 0, 400)

    gradientPendentes.addColorStop(0, "rgb(255, 234, 0)")
    gradientPendentes.addColorStop(1, "rgb(255, 128, 0)")

    grafico = new Chart(ctx, {

        type: "doughnut",

        data: {

            labels: [
                "Concluídas",
                "Pendentes"
            ],

            datasets: [
                {

                    data: [
                        concluidas,
                        pendentes
                    ],

                    backgroundColor: [
                        gradientConcluidas,
                        gradientPendentes
                    ],

                    borderWidth: 0,

                    hoverOffset: 12,

                    cutout: "72%"
                }
            ]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    position: "bottom",

                    labels: {

                        color: "#ffffff",

                        font: {
                            size: 14
                        },

                        padding: 20
                    }
                }
            }
        }
    })
}