let pokemonList = [ 
    {name: 'Charizard', height: 1.7, types: ["fire", "flying"]},
    {name: 'Meowth', height: .4, types: ["normal","ghost"]},
    {name: 'Mewtwo', height: 2, types: ["flying", "psychic"]},
]

// Below we have the initialization of "let i = 0", the condition of "i < pokemonList.length;"
// and the action of "i++ which is equivalent ot i = i + 1"
for (let i = 0; i < pokemonList.length; i++) {
    document.write('<br>' + pokemonList[i].name + ('  (height: ') + pokemonList[i].height + ')');
    // This is the sliver of hieghts between .4 and 2
    if (pokemonList[i].height < 2 && pokemonList[i].height > .5) {
      document.write(' - This here Pokemon is a medium fellow!');
    }
    // This contains all heights less than or equal to .4
    else if (pokemonList[i].height <= .4) {
      document.write(' - This here Pokemon is a small fellow!');
    }
    // This contains all heights greater than 2
    else {
      document.write(' - This Pokemon is massive!');
    }
  }




