import Image from 'next/image'
import React from 'react'

const fetchPokemonData = async (pokemon) => {
    const url = pokemon.url
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error('Invalid Request')
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('API request failed', error);
        throw error
    }
}

async function Pokemon({ pokemon }) {
    const pokemonData = await fetchPokemonData(pokemon)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Image src={pokemonData.sprites.front_default} height={150} width={150} />
            <p>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</p>
        </div>
    )
}

export default Pokemon