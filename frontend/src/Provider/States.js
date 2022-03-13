import { createContext, useContext, useState } from "react";

const StatesContext = createContext()

export const StatesProvider = ({children}) => {

    const [loginVisible, setLoginVisible] = useState(true)
    const [logged, setLogged] = useState(false)

    return(
        <StatesContext.Provider value={{loginVisible, setLoginVisible, logged, setLogged}}>
            {children}
        </StatesContext.Provider>
    )
}

export const useCustomStates = () => useContext(StatesContext);