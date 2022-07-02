import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export default function UserContextProvider({ children }) {

    const localUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(localUser);
    

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}