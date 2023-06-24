export const GENERATION_LIMITS = {
  first_gen: { limit: 151, offset: 0 },
  second_gen: { limit: 100, offset: 151 },
  third_gen: { limit: 135, offset: 251 },
  fourth_gen: { limit: 107, offset: 386 },
};

export const getAllPokemons = async (generation = "fourth_gen") => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${GENERATION_LIMITS[generation].limit}&offset=${GENERATION_LIMITS[generation].offset}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Invalid Request");
    }

    const json = await response.json();

    const data = json.results.map((pokemon, index) => {
      return {
        id: GENERATION_LIMITS[generation].offset + index + 1,
        name: pokemon.name,
        selected: false,
      };
    });

    return data;
  } catch (error) {
    console.error("API request failed", error);
    throw error;
  }
};

export const getSinglePokemon = async (pokemon) => {
  try {
    const [responseData, responseSpecies] = await Promise.all([
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`),
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`),
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

export const getMovesData = async (url) => {
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
