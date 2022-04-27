import initAnimaNumeros from "./anima-numeros.js";

export default function initAnimalsFetch() {
  async function fetchAnimals(url) {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");
      animalsJSON.forEach((i) => {
        // when we active a function using some parameter we receive the
        // return of this function so we can use this to make some projects
        const divAnimal = crateAnimal(i);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  function crateAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`;
    return div;
  }

  fetchAnimals("./animalsapi.json");
}
