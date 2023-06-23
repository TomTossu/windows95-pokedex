'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { Button, Hourglass, Tab, TabBody, Tabs, Window, WindowContent, WindowHeader } from 'react95';
import { titleCase, roundOff } from '@/utils/utils';

const typeColors = {
    normal: '#8A8A80',
    fire: '#FE6148',
    water: '#4B90D6',
    electric: '#FFCC32',
    grass: '#77CC55',
    ice: '#7ED4FF',
    fighting: '#BA5544',
    poison: '#AA5599',
    ground: '#D8BD6C',
    flying: '#9AA9FE',
    psychic: '#FF6FA9',
    bug: '#AABB22',
    rock: '#C5B67E',
    ghost: '#7D7EC6',
    dragon: '#7766ED',
    dark: '#795848',
    steel: '#B7B7C5',
    fairy: '#F1A9F0',
};

function PokemonModal({ showPokemon, setShowPokemon, pokemonData }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <Window className='window' style={{
            width: '36rem',
            height: '23rem',
            position: 'fixed',
            top: '50%',
            left: '50%',
            display: showPokemon ? 'block' : 'none',
            zIndex: showPokemon ? 2 : 1,
            transform: 'translate(-50%, -50%)',
        }}>
            <WindowHeader className='window-title' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Pokemon.exe</span>
                <Button onClick={() => setShowPokemon(false)}>
                    <span className='close-icon' style={{ fontSize: '25px', fontWeight: 'bold', transform: 'translateY(-1px)' }}>
                        x
                    </span>
                </Button>
            </WindowHeader>
            <WindowContent>
                {!pokemonData && (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: 250,
                        }}>
                        <Hourglass size={40} />
                    </div>
                )}
                {pokemonData && (
                    <>
                        <Tabs value={activeTab} onChange={setActiveTab}>
                            <Tab value={0}>Info</Tab>
                            <Tab value={1}>Stats</Tab>
                            <Tab value={2}>Abilities</Tab>
                        </Tabs>
                        <TabBody>
                            {activeTab === 0 && (
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image src={pokemonData.sprites.front_default} height={150} width={150} alt={pokemonData.name} />
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
                            )}
                        </TabBody>
                    </>
                )}


            </WindowContent>
        </Window >
    )
}

export default PokemonModal