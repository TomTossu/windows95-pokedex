import Pokemon from "./components/Pokemon";

const fetchAllPokemons = async () => {
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

export default async function Home() {
  const pokemonList = await fetchAllPokemons();
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 100px)",
        gap: "3rem 8rem",
      }}>
      {pokemonList.results.map((pokemon) => (
        <Pokemon pokemon={pokemon} />
      ))}
    </div>
  );
}
