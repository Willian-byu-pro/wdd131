//Aqui ele está pegando o elemento da página HTML com o id especificado.//
const LastModified = document.querySelector("#LastModified");

//Isso cria um objeto de data atual, ou seja, o dia e a hora exatos de agora.//
const today = new Date();


LastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat("en-US",
{
    dateStyle:"full"

}
).format(today)}</span>`;






















// Array fornecido com os produtos
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Função que popula o select com os produtos
function populateProductSelect() {
  const selectElement = document.getElementById("productName");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id; // valor usado na submissão
    option.textContent = product.name; // texto visível ao usuário
    selectElement.appendChild(option);
  });
}

// Quando a página carregar, executar a função
window.addEventListener("DOMContentLoaded", populateProductSelect);