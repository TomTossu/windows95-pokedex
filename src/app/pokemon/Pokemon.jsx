'use client'
import Image from 'next/image'
import { useState } from 'react'
import PokemonModal from './PokemonModal'
import { titleCase } from '@/utils/utils'

function Pokemon({ pokemonData }) {
    const [selected, setSelected] = useState(0)
    const [showPokemon, setShowPokemon] = useState(false)

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                onMouseOver={() => setSelected(pokemonData.id)}
                onMouseOut={() => setSelected(0)}
                onClick={() => setShowPokemon(pokemonData.id)}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', width: '12rem' }}>
                    <Image src={pokemonData.sprites.front_default} height={150} width={150} alt={pokemonData.name} />
                    <span style={{ color: 'white', textDecoration: 'underline', background: selected === pokemonData.id ? '#0000aa' : 'transparent' }}>
                        {titleCase(pokemonData.name)}
                    </span>
                </div>
            </div>

            {showPokemon &&
                <PokemonModal pokemon={pokemonData} showPokemon={showPokemon} setShowPokemon={setShowPokemon} pokemonData={pokemonData} />
            }
        </>
    )
}

export default Pokemon