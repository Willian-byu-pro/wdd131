
// metodo array faz gerar linhas e dados atravez do js direto no html

const financialTips = [
  { label: "Highest Dividend Yield", value: "8.5% - Petrobras" },
  { label: "Selic Rate", value: "10.50%" },
  { label: "Highest ROE (Return on Equity)", value: "38.2% - Itaú Unibanco" },
];

const listContainer = document.getElementById('financialTipsList');
listContainer.innerHTML = financialTips
  .map(item => `<li><strong>${item.label}:</strong> ${item.value}</li>`)
  .join('');




//grafico

document.addEventListener("DOMContentLoaded", () => {
  // Gráfico de ações brasileiras (exemplo com dados fictícios)
  const ctx = document.getElementById('stockChart').getContext('2d');

  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
      datasets: [{
        label: 'Ibovespa (em mil pontos)',
        data: [126, 127.5, 125.2, 128, 129.3],
        backgroundColor: 'rgba(255, 255, 255, 0.37)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: false,
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });
});


//dolar cotação

// Simulação do valor do dólar no header
const usdRateHeaderSpan = document.getElementById('usdRateHeader');
const usdValue = "R$ 5.25";
usdRateHeaderSpan.textContent = `USD Quote: ${usdValue}`;  // já une texto + variável num template literal





//ultima modificação

//Aqui ele está pegando o elemento da página HTML com o id especificado.//
const LastModified = document.querySelector("#LastModified");

//Isso cria um objeto de data atual, ou seja, o dia e a hora exatos de agora.//
const today = new Date();


LastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat("en-US",
{
    dateStyle:"full"

}
).format(today)}</span>`;



const btn = document.getElementById('toggleInfoBtn');
const summary = document.getElementById('summary');

// Ao carregar a página, verifica o estado salvo e aplica:
const savedState = localStorage.getItem('summaryVisible');
if (savedState === 'true') {
  summary.style.display = 'block';
  btn.textContent = 'Hide Summary';
} else {
  summary.style.display = 'none';
  btn.textContent = 'Show Summary';
}

// Quando o botão for clicado:
btn.addEventListener('click', () => {
  const isVisible = summary.style.display === 'block';
  
  if (isVisible) {
    summary.style.display = 'none';
    btn.textContent = 'Show Summary';
    localStorage.setItem('summaryVisible', 'false');
  } else {
    summary.style.display = 'block';
    btn.textContent = 'Hide Summary';
    localStorage.setItem('summaryVisible', 'true');
  }
});