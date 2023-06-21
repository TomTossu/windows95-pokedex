export const fetchAllPokemons = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Invalid Request");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("API request failed", error);
    throw error;
  }
};

export const fetchSinglePokemon = async (pokemon) => {
  const url = pokemon.url;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Invalid Request");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("API request failed", error);
    throw error;
  }
};
