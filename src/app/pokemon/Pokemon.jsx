'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import PokemonModal from './components/PokemonModal'
import { titleCase } from '@/utils/utils'
import { getSinglePokemon } from './api'
import styled from 'styled-components'

const PokemonDiv = styled.div`
display: flex;
flex-direction: column; 
align-items: center;
cursor: pointer;
width: 12rem;
pointer-events: ${props => props.disableCursor ? 'none' : 'auto'};
`;

function Pokemon({ pokemon, handleSelect, disableCursor, setDisableCursor }) {
    const { id, name, selected } = pokemon
    const [showPokemon, setShowPokemon] = useState(false)
    const [pokemonData, setPokemonData] = useState()

    const openPokemonModal = (async () => {
        setShowPokemon(true)
        setDisableCursor(true)
        const data = await getSinglePokemon(pokemon)
        setPokemonData(data)
    })

    useEffect(() => {
        document.body.style.overflow = showPokemon ? 'hidden' : 'auto';
        setDisableCursor(showPokemon)
    }, [showPokemon])

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}

            >
                <PokemonDiv
                    disableCursor={disableCursor}
                    onClick={() => handleSelect(id)}
                    onDoubleClick={() => {
                        openPokemonModal()
                    }}>
                    <Image src={`/${id}.png`} height={125} width={125} alt={name} />
                    <span style={{ color: 'white', textDecoration: 'underline', background: selected ? '#0000aa' : 'transparent', marginTop: '20px' }}>
                        {titleCase(name)}
                    </span>
                </PokemonDiv>
            </div>

            {showPokemon &&
                <PokemonModal showPokemon={showPokemon} setShowPokemon={setShowPokemon} pokemonData={pokemonData} />
            }
        </>
    )
}

export default Pokemon