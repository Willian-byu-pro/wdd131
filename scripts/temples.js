
//Aqui ele está pegando o elemento da página HTML com o id especificado.//
const LastModified = document.querySelector("#LastModified");

//Isso cria um objeto de data atual, ou seja, o dia e a hora exatos de agora.//
const today = new Date();


LastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat("en-US",
{
    dateStyle:"full"

}
).format(today)}</span>`;


  document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu");
    const navMenu = document.querySelector(".navigation");

    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");  // para mostrar/esconder o menu
      menuBtn.classList.toggle("open");  // para mudar o ícone (☰ / ❌)
    });
  });