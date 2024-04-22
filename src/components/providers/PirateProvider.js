import { createContext, useState } from "react";


export const PirateContext = createContext()

export const PirateProvider = (props) => {
    const [currentPirate, setCurrentPirate] = useState()

    return (
        <PirateContext.Provider value={{
            currentPirate, setCurrentPirate
        }}>
            {props.children}
        </PirateContext.Provider>
    )
}
