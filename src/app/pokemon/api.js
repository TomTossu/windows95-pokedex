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
    const [responseData, responseSpecies] = await Promise.all([
      fetch(url),
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`),
    ]);

    if (!responseData.ok || !responseSpecies.ok) {
      throw new Error("Invalid Request");
    }

    const data = await responseData.json();
    const species = await responseSpecies.json();

    const flavorTextEntry = species.flavor_text_entries.findIndex((i) => {
      return i.language.name === "en" && i.version.name === "y";
    });

    data.flavor_text = species.flavor_text_entries[flavorTextEntry].flavor_text;

    return data;
  } catch (error) {
    console.error("API request failed", error);
    throw error;
  }
};
