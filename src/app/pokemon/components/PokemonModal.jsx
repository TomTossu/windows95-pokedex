'use client'
import React, { useEffect, useState } from 'react'
import { Button, Hourglass, Tab, TabBody, Tabs, Window, WindowContent, WindowHeader } from 'react95';
import Abilities from './Abilities';
import Stats from './Stats';
import Info from './Info';
import Moves from './Moves';

function PokemonModal({ showPokemon, setShowPokemon, pokemonData }) {
    const [activeTab, setActiveTab] = useState(0);
    const [pokemonMoves, setPokemonMoves] = useState()

    const handleClose = (() => {
        setShowPokemon(false)
    })

    const handlePokemonMoves = (() => {
        if (!pokemonData) {
            return
        }
        const shuffled = pokemonData.moves.sort(() => 0.5 - Math.random());
        const moves = shuffled.slice(0, 4);
        setPokemonMoves(moves)
    })

    useEffect(() => {
        handlePokemonMoves()
    }, [pokemonData])

    return (
        <Window className='window' style={{
            width: '36rem',
            height: '26rem',
            position: 'fixed',
            top: '50%',
            left: '50%',
            display: showPokemon ? 'block' : 'none',
            zIndex: showPokemon ? 2 : 1,
            transform: 'translate(-50%, -50%)',
        }}>
            <WindowHeader className='window-title' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Pokemon.exe</span>
                <Button onClick={() => handleClose()}>
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
                            <Tab value={2}>Moves</Tab>
                            <Tab value={3}>Abilities</Tab>
                        </Tabs>
                        <TabBody>
                            {activeTab === 0 && (
                                <Info pokemonData={pokemonData} />
                            )}
                            {activeTab === 1 && (
                                <Stats pokemonData={pokemonData} />
                            )}
                            {activeTab === 2 && pokemonMoves && (
                                <Moves pokemonMoves={pokemonMoves} />
                            )}
                            {activeTab === 3 && (
                                <Abilities pokemonData={pokemonData} />
                            )}
                        </TabBody>
                    </>
                )}


            </WindowContent>
        </Window >
    )
}

export default PokemonModal