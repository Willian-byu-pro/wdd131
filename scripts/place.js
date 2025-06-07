function calculateWindChill(temp, windSpeed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temp * Math.pow(windSpeed, 0.16)
  ).toFixed(1);
}

document.addEventListener("DOMContentLoaded", () => {
  const temp = parseFloat(document.getElementById("temp").textContent);
  const wind = parseFloat(document.getElementById("wind").textContent);
  const windChillElement = document.getElementById("windChill");

  if (temp <= 10 && wind > 4.8) {
    const chill = calculateWindChill(temp, wind);
    windChillElement.textContent = `${chill} °C`;
  } else {
    windChillElement.textContent = "N/A";
  }

  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});




//Aqui ele está pegando o elemento da página HTML com o id especificado.//
const LastModified = document.querySelector("#LastModified");

//Isso cria um objeto de data atual, ou seja, o dia e a hora exatos de agora.//
const today = new Date();


LastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat("en-US",
{
    dateStyle:"full"

}
).format(today)}</span>`;
