// js/review.js

// Atualiza o contador de reviews usando localStorage
function updateReviewCounter() {
  const countKey = "reviewCounter";

  // Pega o valor atual, ou começa com 0
  let count = parseInt(localStorage.getItem(countKey)) || 0;

  // Incrementa e salva de volta
  count++;
  localStorage.setItem(countKey, count);

  // Atualiza a tela
  document.getElementById("reviewCount").textContent = count;
}

// Executa assim que a página carregar
window.addEventListener("DOMContentLoaded", updateReviewCounter);