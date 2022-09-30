export async function fetchPokemon() {
  // const params = new URLSearchParams();

  

  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex`);
  const data = await resp.json();
  return data.results;
}