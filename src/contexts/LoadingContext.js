import { useContext, createContext, useState } from "react";

const LoandingContext = createContext();

export const useLoadingContext = () => useContext(LoandingContext);

export default function LoandingContextProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <LoandingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoandingContext.Provider>
    );
}