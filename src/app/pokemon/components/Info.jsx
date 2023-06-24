import Image from 'next/image';
import React from 'react'
import { titleCase, roundOff } from '@/utils/utils';
import { typeColors } from '../constants/constants';

function Info({ pokemonData }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '15rem' }}>
            <Image src={pokemonData.sprites.front_default} height={200} width={200} alt={pokemonData.name} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h1 style={{ fontSize: '25px', fontWeight: 600 }}>{titleCase(pokemonData.name)} #{pokemonData.id}</h1>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {pokemonData.types.map((object) => (
                        <span key={object.slot} style={{ background: typeColors[object.type.name], padding: 6, color: 'white' }}>{object.type.name}</span>
                    ))}
                </div>
                <p>
                    <span style={{ fontWeight: 'bold' }}>Height:</span>{' '}
                    {roundOff(pokemonData.height * 0.1)}m{' '}
                    <span style={{ fontWeight: 'bold' }}>Weight:</span>{' '}
                    {roundOff(pokemonData.weight * 0.1)}kg
                </p>
                <p>{pokemonData.flavor_text}</p>
            </div>
        </div>
    )
}

export default Info