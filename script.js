const pokName = document.getElementById("pokemon-name");
const pokId = document.getElementById("pokemon-id");
const pokWeight = document.getElementById("weight");
const pokHeight = document.getElementById("height");
const pokTypes = document.getElementById("types");
const pokHp = document.getElementById("hp");
const pokAttack = document.getElementById("attack");
const pokDefense = document.getElementById("defense");
const pokSpecAttack = document.getElementById("special-attack");
const pokSpecDefense = document.getElementById("special-defense");
const pokSpeed = document.getElementById("speed");
const userInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const picture = document.getElementById("pokemon-img")
const pokeData = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/"


const fetchData = async () => {
  try {
    const input = userInput.value.toLowerCase();
    const res = await fetch(`${pokeData}${input}`)
    const data = await res.json();
    getData(data);
  } catch (err) {
      alert("Pokémon not found");
      console.log(err);
  }
}

const getData = (data) => {
  const { height, id, name, sprites, stats, types, weight } = data;

  pokHeight.textContent = `${height}`;
  pokId.textContent = `${id}`;
  pokName.textContent = `${name}`;
  pokWeight.textContent = `${weight}`;

  picture.innerHTML = `<img id="sprite" src="${sprites.front_default}" >`

  pokTypes.innerHTML = types.map(arrObj => 
      `<span>${arrObj.type.name.toUpperCase()}</span>`).join(" ");

  pokHp.textContent = `${stats[0].base_stat}`
  pokAttack.textContent = `${stats[1].base_stat}`
  pokDefense.textContent = `${stats[2].base_stat}`
  pokSpecAttack.textContent = `${stats[3].base_stat}`
  pokSpecDefense.textContent = `${stats[4].base_stat}`
  pokSpeed.textContent = `${stats[5].base_stat}`
}

searchBtn.addEventListener("click", () =>{
  fetchData();
})  
