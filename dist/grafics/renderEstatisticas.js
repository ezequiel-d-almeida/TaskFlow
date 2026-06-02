export function renderEstatisticas(estatisticas) {
    const dashboardCards = document.querySelector("#dashboard__cards");
    dashboardCards.innerHTML = "";
    const cardTotal = document.createElement("div");
    const pTotal = document.createElement("p");
    pTotal.textContent = `Total: ${estatisticas.total}`;
    cardTotal.classList.add("card__total");
    cardTotal.appendChild(pTotal);
    const cardPendentes = document.createElement("div");
    const pPendentes = document.createElement("p");
    pPendentes.textContent = `Pendentes: ${estatisticas.pendentes}`;
    cardPendentes.classList.add("card__pendentes");
    cardPendentes.appendChild(pPendentes);
    const cardConcluidas = document.createElement("div");
    const pConcluidas = document.createElement("p");
    pConcluidas.textContent = `Concluidas: ${estatisticas.concluidas}`;
    cardConcluidas.classList.add("card__concluidas");
    cardConcluidas.appendChild(pConcluidas);
    dashboardCards.append(cardTotal, cardConcluidas, cardPendentes);
}
//# sourceMappingURL=renderEstatisticas.js.map