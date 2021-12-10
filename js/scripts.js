let pokemonList = [ 
    {name: 'Charizard', height: 1.7, types: ["fire", "flying"]},
    {name: 'Meowth', height: .4, types: ["normal","ghost"]},
    {name: 'Mewtwo', height: 2, types: ["flying", "psychic"]},
]
for (let i = 0; i < pokemonList.length; i++) {
    document.write('<br>' + pokemonList[i].name + (' , height: ') + pokemonList[i].height);
    if (pokemonList[i].height >= 2) {
      document.write(' - Wow, that\'s big!');
    }
  }




