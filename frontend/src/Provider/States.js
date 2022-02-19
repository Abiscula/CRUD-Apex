import { createContext, useContext, useState } from "react";

const StatesContext = createContext()

export const StatesProvider = ({children}) => {

    const [loginVisible, setLoginVisible] = useState(true)

    return(
        <StatesContext.Provider value={{loginVisible, setLoginVisible}}>
            {children}
        </StatesContext.Provider>
    )
}

export const useCustomStates = () => useContext(StatesContext);