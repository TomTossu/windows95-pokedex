'use client'
import Image from 'next/image'
import { fetchSinglePokemon } from './api'

async function Pokemon({ selected, setSelected, pokemon }) {
    const pokemonData = await fetchSinglePokemon(pokemon)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', width: '12rem' }} onClick={() => setSelected(pokemonData.id)}>
                <Image src={pokemonData.sprites.front_default} height={150} width={150} alt={pokemonData.name} />
                <span style={{ color: 'white', textDecoration: 'underline', background: selected === pokemonData.id ? '#0000aa' : 'red' }}>{pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1)}</span>
            </div>
        </div>
    )
}

export default Pokemon