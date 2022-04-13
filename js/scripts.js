//IIFE Repository





//   // Fetch IIFE Repository
// let pokemonRepository = (function () {
//   let pokemonList = [];
//   let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

//   function add(pokemon) {
//     if (
//       typeof pokemon === "object" &&
//       "name" in pokemon  
//     ) {
//       pokemonList.push(pokemon);
//     } else {
//       console.log("pokemon is not correct");
//     }
//   } 

//   function add(pokemon) {
//     if (
//       typeof pokemon === "object" &&
//       "name" in pokemon
//     ) {
//       pokemonList.push(pokemon);
//     } else {
//       console.log("pokemon is not correct");
//     }
//   }
//   function getAll() {
//     return pokemonList;
//   }

//   function addListItem(pokemon) {
//     let pokemonList = document.querySelector(".pokemon-list");
//     let listPokemon = document.createElement("li");
//     let button = document.createElement("button");
//     button.innerText = pokemon.name;
//     button.classList.add("button-class"); 
//     listPokemon.appendChild(button);
//     pokemonList.appendChild(listPokemon);
//     button.addEventListener("click", function(event) {
//       showDetails(pokemon);
//     });
//   }
//   function loadList() {
//     return fetch(apiUrl).then(function (response) {
//       return response.json();
//     }).then(function (json) {
//       json.results.forEach(function (item) {
//         let pokemon = {
//           name: item.name,
//           detailsUrl: item.url
//         };
//         add(pokemon);
//         console.log(pokemon);
//       });
//     }).catch(function (e) {
//       console.error(e);
//     }) 
//   }

//   function loadDetails(item) {
//     let url = item.detailsUrl;
//     return fetch(url).then(function (response) {
//       return response.json();
//     }).then(function (details) {
//       // Now we add the details to the item
//       item.imageUrl = details.sprites.front_default;
//       item.height = details.height;
//       item.types = details.types;
//     }).catch(function (e) {
//       console.error(e);
//     });
//   }


//   function showDetails(item) {
//     pokemonRepository.loadDetails(item).then(function () {
//       console.log(item);
//     });
//   }
  
//   return {
//     add: add,
//     getALl: getAll,
//     addListItem: addListItem,
//     loadList: loadList,
//     loadDetails: loadDetails,
//     showDetails: showDetails
//   };
// })();


// pokemonRepository.loadList().then(function () {
//   pokemonRepository.getAll().forEach(function (pokemon) {
//     pokemonRepository.addListItem(pokemon);
//   });
// });
























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
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();
//End of IIFE


// Calling the function which creates the buttons for the pokemon and logs if they have been clicked on
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
