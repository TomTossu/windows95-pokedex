import Pokemon from './Pokemon'
import { fetchSinglePokemon } from './api'

async function PokemonContainer({ pokemon }) {
    const pokemonData = await fetchSinglePokemon(pokemon)

    return (
        <Pokemon pokemonData={pokemonData} />
    )
}

export default PokemonContainer