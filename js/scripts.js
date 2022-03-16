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



  document.write('<br>' + pokemon.name + ' (height: '+ pokemon.height + ')' + ' - This Pokemon is massive!');

