//TODO: add all gens types into the filter and in the HTML

const pokemons = document.getElementById("pokemons");
const pokeBtnPrev = document.getElementById("btn-prev");
const pokeBtnNext = document.getElementById("btn-next");
const menuIcon = document.getElementById("menuIcon");
const modalContainer = document.getElementById("modalContainer");
const containerTypes = document.getElementById("containerTypes");
const containerPokeTypes = document.getElementById("containerPokeTypes");
const pokeTypesName = document.getElementsByName("type");
let page = 1;
let pokeTypeDefault = "fire";

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${page}`);
    const data = await res.json();
    pintarPokemon(data);
  } catch (error) {
    console.log(error);
  }
};

const fetchDataTypes = async () => {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/type/${pokeTypeDefault}`
    );
    const data = await res.json();
    pintarTypes(data);
  } catch (error) {
    console.log(error);
  }
};

const pintarPokemon = (pokemon) => {
  const pokeImgContainer = document.createElement("div");
  pokeImgContainer.className = "main__article__container__pokeImage";
  pokemons.append(pokeImgContainer);

  const pokeImage = document.createElement("img");
  pokeImage.className = "main__article__container__pokeImage__img";
  pokeImage.setAttribute(
    "src",
    pokemon.sprites.other.dream_world.front_default
  );

  pokeImgContainer.append(pokeImage);

  const pokeName = document.createElement("div");
  pokeName.className = "main__article__container__poke-description";
  pokeName.innerHTML = `
  <h3 class= "poke-description__name">${pokemon.name}</h3>
  <p class= "poke-description__type">Type: ${pokemon.types[0].type.name}</p>
  `;

  pokemons.append(pokeName);

  const btnContainer = document.createElement("div");
  btnContainer.className = "main__article__container__btns";

  pokemons.append(btnContainer);

  const btnPrev = document.createElement("button");
  btnPrev.className = "btn__prev";
  btnPrev.innerText = "P";

  btnContainer.append(btnPrev);

  const pokeBtnPrev = document.querySelector(".btn__prev");
  pokeBtnPrev.addEventListener("click", () => {
    if (page > 1) {
      pokemons.innerHTML = "";
      page--;
      fetchData();
    }
  });

  const btnNext = document.createElement("button");
  btnNext.className = "btn__next";
  btnNext.innerText = "N";

  btnContainer.append(btnNext);

  const pokeBtnNext = document.querySelector(".btn__next");

  pokeBtnNext.addEventListener("click", () => {
    if (page < 248) {
      pokemons.innerHTML = "";
      page++;
      fetchData();
    }
  });

  const pokeDescriptionContainer = document.createElement("div");
  pokeDescriptionContainer.className = "container__poke-description";

  pokemons.append(pokeDescriptionContainer);

  const pokeDescription = document.createElement("div");
  pokeDescription.className = "poke__description";
  pokeDescription.innerHTML = `
  <h4 class="abilities">Ability: ${pokemon.abilities[0].ability.name}</h4>
  <h4 class= "moves">Moves: ${pokemon.moves[0].move.name}, ${pokemon.moves[1].move.name}, ${pokemon.moves[2].move.name}, ${pokemon.moves[3].move.name} </h4>
  <h4 class="stats">Base Stat: ${pokemon.stats[0].base_stat}, Attack: ${pokemon.stats[1].base_stat}
  <br> Defense: ${pokemon.stats[2].base_stat} </h4>
  `;
  pokeDescriptionContainer.append(pokeDescription);
};

const pintarModal = () => {
  modalContainer.innerHTML = "";
  modalContainer.classList.add("enable");
  modalContainer.classList.remove("disable");
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal__header";
  modalHeader.innerHTML = `
  <span class= "modal__close">❌</span>
  `;
  modalContainer.append(modalHeader);

  const btnCerrar = document.querySelector(".modal__close");

  btnCerrar.addEventListener("click", () => {
    modalContainer.classList.add("disable");
    modalContainer.classList.remove("enable");
  });

  const modalContent = document.createElement("div");
  modalContent.className = "modal__content";
  modalContent.innerHTML = `
  <a class= "modal__link">How to Use</a>
  <a class= "modal__link">Contact Us</a>`;

  modalContainer.append(modalContent);
};

menuIcon.addEventListener("click", () => {
  pintarModal();
});

containerTypes.addEventListener("click", (e) => {
  if (e.target.matches("img")) {
    switch (e.target) {
      case typeFire:
        pokeTypeDefault = "fire";
        fetchDataTypes();
        break;
      case typeElectric:
        pokeTypeDefault = "electric";
        fetchDataTypes();
        break;
      case typeGrass:
        pokeTypeDefault = "grass";
        fetchDataTypes();
        break;
      case typeWater:
        pokeTypeDefault = "water";
        fetchDataTypes();
        break;
      case typePsiquic:
        pokeTypeDefault = "psychic";
        fetchDataTypes();
        break;
      case typeFight:
        pokeTypeDefault = "fighting";
        fetchDataTypes();
        break;
      case typeRock:
        pokeTypeDefault = "rock";
        fetchDataTypes();
        break;
      case typeNormal:
        pokeTypeDefault = "normal";
        fetchDataTypes();
        break;
      case typeFlying:
        pokeTypeDefault = "flying";
        fetchDataTypes();
        break;
      case typePoison:
        pokeTypeDefault = "poison";
        fetchDataTypes();
        break;
      case typeGround:
        pokeTypeDefault = "ground";
        fetchDataTypes();
        break;
      case typeBug:
        pokeTypeDefault = "bug";
        fetchDataTypes();
        break;
      case typeGhost:
        pokeTypeDefault = "ghost";
        fetchDataTypes();
        break;
      case typeSteel:
        pokeTypeDefault = "steel";
        fetchDataTypes();
        break;
      case typeIce:
        pokeTypeDefault = "ice";
        fetchDataTypes();
        break;
      case typeDragon:
        pokeTypeDefault = "dragon";
        fetchDataTypes();
        break;
      case typeDark:
        pokeTypeDefault = "dark";
        fetchDataTypes();
        break;
      case typeFairy:
        pokeTypeDefault = "fairy";
        fetchDataTypes();
        break;
    }
  }
});

//*function to show pokemons by type
const pintarTypes = (type) => {
  containerPokeTypes.style.display = "block";
  const typeContainer = document.createDocumentFragment("div");
  typeContainer.className = "type__container";

  const typeDescription = document.createElement("div");
  typeDescription.className = "type__container__description";
  typeDescription.innerHTML = `
  <h3 class="type__pokemon__name">Type: ${type.name}</h3>
  <span class="type__pokemon__close">❌</span>
  `;
  typeContainer.append(typeDescription);

  const typePokeName = type.pokemon;

  typePokeName.forEach((name) => {
    const listNames = document.createElement("li");
    listNames.className = "poke_list";
    listNames.innerText = name.pokemon.name;
    typeDescription.append(listNames);
  });

  containerPokeTypes.innerHTML = "";
  containerPokeTypes.append(typeContainer);

  const btnCloseDescription = document.querySelector(".type__pokemon__close");

  btnCloseDescription.addEventListener("click", () => {
    containerPokeTypes.style.display = "none";
  });
};
