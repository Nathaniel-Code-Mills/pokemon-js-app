//IIFE Repository
let pokemonRepository = (function () {
  let pokemonList = [ 
    {name: 'Charizard', height: 1.7, types: ["fire", "flying"]},  
    {name: 'Meowth', height: .4, types: ["normal","ghost"]},
    {name: 'Mewtwo', height: 2, types: ["flying", "psychic"]},
    ];
  return {
    add: function(pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function() {
      return pokemonList;
    }
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


  document.write('<br>' + pokemon.name + ' (height: '+ pokemon.height + ')' + ' - This Pokemon is massive!');

