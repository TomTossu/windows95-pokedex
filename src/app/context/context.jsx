import React, { createContext, useState } from 'react'

const GenerationContext = createContext()

function GenerationProvider({ children }) {
    const [generation, setGeneration] = useState()

    const handleSelectGeneration = ((value) => {
        setGeneration(value)
    })

    const state = {
        generation,
    }
    const actions = {
        selectGeneration: handleSelectGeneration,
    }

    return (
        <GenerationContext.Provider value={{ state, actions }}>
            {children}
        </GenerationContext.Provider>
    )
}

export { GenerationContext, GenerationProvider as Provider }