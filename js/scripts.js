//IIFE Repository
let pokemonRepository = (function () {
  let pokemonList = [ 
    {name: 'Charizard', height: 1.7, types: ["fire", "flying"]},  
    {name: 'Meowth', height: .4, types: ["normal","ghost"]},
    {name: 'Mewtwo', height: 2, types: ["flying", "psychic"]},
    ];
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  
  function getAll() {
    return pokemonList;
  }  
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class"); 
    button.addEventListener('click', function() {
      showDetails(pokemon);
    })
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
  }

  function showDetails(pokemon){
    console.log(pokemon);
  }

  return {
<<<<<<< HEAD
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
=======
    add: function(pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function() {
      return pokemonList;
    }
>>>>>>> parent of ef4d019 (Removed add and getAll using this form)
  };
})();
//End of IIFE

//forEach function looping through the repository
pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemon.height < 2 && pokemon.height > .5) 
  document.write('<br>' + pokemon.name + ' (height: '+ pokemon.height + ')' + ' - This here Pokemon is a medium fellow!');
  if (pokemon.height <= .4) 
  document.write('<br>' + pokemon.name + ' (height: '+ pokemon.height + ')' + ' - This here Pokemon is a small fellow!');
  if (pokemon.height >= 2) 
  document.write('<br>' + pokemon.name + ' (height: '+ pokemon.height + ')' + ' - This Pokemon is massive!');
});

//Adding a new pokemone with differenet keys and properties
console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Snorlax', height: .4, types: ["weird","tunneling"]  });
console.log(pokemonRepository.getAll());


//forEach function looping through the repository again now with a new pokemon added
pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemon.height < 2 && pokemon.height > .5) 
  document.write('<br>' + pokemon.name + ' (height: '+ pokemon.height + ')' + ' - This here Pokemon is a medium fellow!');
  if (pokemon.height <= .4) 
  document.write('<br>' + pokemon.name + ' (height: '+ pokemon.height + ')' + ' - This here Pokemon is a small fellow!');
  if (pokemon.height >= 2) 
  document.write('<br>' + pokemon.name + ' (height: '+ pokemon.height + ')' + ' - This Pokemon is massive!');
});


// Calling the function which creates the buttons for the pokemons
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});

