import PokemonContainer from "./pokemon/PokemonContainer";
import { fetchAllPokemons } from "./pokemon/api";

export default async function Home() {
  const pokemonList = await fetchAllPokemons();
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 100px)",
        gap: "3rem 8rem",
      }}>
      {pokemonList.results.map((pokemon, index) => (
        <PokemonContainer key={pokemon.name + index} pokemon={pokemon} />
      ))}
    </div>
  );
}
