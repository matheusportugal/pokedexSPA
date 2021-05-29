
let base_url_poke = "https://pokeapi.co/api/v2/";
let pokemons = [];

const pokemonsList = async () => {
  const response = await fetch(`${base_url_poke}pokemon`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
  pokemons = myJson.results;
  console.log(pokemons);

  var text = "";
  var i;
  for (i = 0; i < pokemons.length; i++) {
        text += pokemons[i].name + "<br>";
      }
  
      document.getElementById("demo").innerHTML = text;
}

window.onload = function() {
  pokemonsList();
};

