//IIFE Repository
let pokemonRepository = (function () {
  let pokemonList = [ 
    {name: 'Charizard', height: 1.7, types: ["fire", "flying"]},  
    {name: 'Meowth', height: .4, types: ["normal","ghost"]},
    {name: 'Mewtwo', height: 2, types: ["flying", "psychic"]},
    ];
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();

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

