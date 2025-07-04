
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


const temples = [
   {
     templeName: "Aba Nigeria",
     location: "Aba, Nigeria",
     dedicated: "2005, August, 7",
     area: 11500,
     imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
   {
     templeName: "Manti Utah",
     location: "Manti, Utah, United States",
     dedicated: "1888, May, 21",
     area: 74792,
     imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
   {
     templeName: "Payson Utah",
     location: "Payson, Utah, United States",
     dedicated: "2015, June, 7",
     area: 96630,
     imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
   {
     templeName: "Yigo Guam",
     location: "Yigo, Guam",
     dedicated: "2020, May, 2",
     area: 6861,
     imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
   {
     templeName: "Washington D.C.",
     location: "Kensington, Maryland, United States",
     dedicated: "1974, November, 19",
     area: 156558,
     imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
   {
     templeName: "Lima Perú",
     location: "Lima, Perú",
     dedicated: "1986, January, 10",
     area: 9600,
     imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
   },
   {
     templeName: "Mexico City Mexico",
     location: "Mexico City, Mexico",
     dedicated: "1983, December, 2",
     area: 116642,
     imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
     


    {
      templeName: "Okinawa",
      location: "Okinawa, Japan",
      dedicated: "2019, April, 7",
      area: 12437,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/okinawa-japan-temple/okinawa-japan-temple-40845-main.jpg"
    },
    {
     templeName: "Belo Horizonte",
     location: "Belo Horizonte, Brazil",
     dedicated: "2021, April, 4",
     area: 27000,
     imageUrl:
     "https://churchofjesuschristtemples.org/assets/img/temples/belo-horizonte-brazil-temple/belo-horizonte-brazil-temple-22100-main.jpg"
    },

  

];


createTempleCard();

function createTempleCard() {
  temples.forEach(temple => {
    let card = document.createElement("section");
    card.classList.add("temple"); // Classe base

    // Filtro por ano
    const year = parseInt(temple.dedicated.split(",")[0]);
    if (year < 1900) {
      card.classList.add("old");
    }
    if (year > 2000) {
      card.classList.add("new");
    }

    // Filtro por área
    if (temple.area > 90000) {
      card.classList.add("large");
    }
    if (temple.area < 10000) {
      card.classList.add("small");
    }

    // Conteúdo do cartão
    let name = document.createElement("h2");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".grid").appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navigation a");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const filter = e.target.dataset.filter;
      const cards = document.querySelectorAll(".temple");

      cards.forEach(card => {
        if (filter === "all") {
          card.style.display = "block";
        } else if (card.classList.contains(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});