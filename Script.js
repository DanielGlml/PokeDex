
const pokeContainer = document.querySelector('.pokeContainer');

function pokeFetch(id) {
    const randomID = Math.round(Math.random() * 149) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomID}/`)
    .then((res) => res.json())
    .then((data) => {
        createCard(data);
        console.log(data);
})};

function pokeFetchs(number) {
    for(let i = 1; i <= number; i++) {
        pokeFetch(i);
    };
};

function createCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('cardContainer');

    const pokeImgContainer = document.createElement('div');
    pokeImgContainer.classList.add('pokeImgContainer');
    
    const pokeImg = document.createElement('img');
    pokeImg.classList.add('pokeImg');
    pokeImg.src = pokemon.sprites.front_default

    pokeImgContainer.appendChild(pokeImg);

    const pokeNum = document.createElement('p');
    pokeNum.classList.add('pokeNum');
    pokeNum.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;
    
    const pokeName = document.createElement('p');
    pokeName.classList.add('pokeName');
    pokeName.textContent = pokemon.name

    card.appendChild(pokeNum);
    card.appendChild(pokeImgContainer);
    card.appendChild(pokeName);
    card.appendChild(pokeStats(pokemon.stats));

    pokeContainer.appendChild(card);
}

function pokeStats (stats) {
   const pokeStatsContainer = document.createElement('div');
   pokeStatsContainer.classList.add('pokeStatsContainer');

   for(let i = 0; i <= 5; i++) {
    const stat = stats[i];

    const pokeStatContainer = document.createElement('div');
    pokeStatContainer.classList.add('pokeStatContainer');

    const pokeStatName = document.createElement('div');
    pokeStatName.classList.add('pokeStatName');
    pokeStatName.textContent = stat.stat.name + ":\u00a0";

    const pokeStatNum = document.createElement('div');
    pokeStatNum.classList.add('pokeStatNum');
    pokeStatNum.textContent = stat.base_stat;

    pokeStatContainer.appendChild(pokeStatName);
    pokeStatContainer.appendChild(pokeStatNum);
    pokeStatsContainer.appendChild(pokeStatContainer);
   }

   return pokeStatsContainer;
};

pokeFetchs(6);
