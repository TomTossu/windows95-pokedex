'use client'
import Image from 'next/image'
import { useState } from 'react'
import PokemonModal from './PokemonModal'
import { titleCase } from '@/utils/utils'
import { getSinglePokemon } from './api'

function Pokemon({ pokemon, handleSelect }) {
    const { id, name, selected } = pokemon
    const [showPokemon, setShowPokemon] = useState(false)
    const [pokemonData, setPokemonData] = useState()

    const openPokemonModal = (async () => {
        setShowPokemon(true)
        const data = await getSinglePokemon(pokemon)
        setPokemonData(data)
    })

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                onClick={() => handleSelect(id)}
                onDoubleClick={() => {
                    openPokemonModal()
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', width: '12rem' }}>
                    <Image src={`/${id}.png`} height={150} width={150} alt={name} />
                    <span style={{ color: 'white', textDecoration: 'underline', background: selected ? '#0000aa' : 'transparent' }}>
                        {titleCase(name)}
                    </span>
                </div>
            </div>

            {showPokemon &&
                <PokemonModal showPokemon={showPokemon} setShowPokemon={setShowPokemon} pokemonData={pokemonData} />
            }
        </>
    )
}

export default Pokemon