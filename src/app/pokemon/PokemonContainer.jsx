'use client'
import { useState } from 'react'
import Pokemon from './Pokemon'

async function PokemonContainer({ pokemonList }) {
    const [selected, setSelected] = useState(null)

    console.log(pokemonList)
    return (
        pokemonList.results.map((pokemon) => (
            <Pokemon selected={selected} setSelected={setSelected} pokemon={pokemon} />
        ))
    )
}

export default PokemonContainer

