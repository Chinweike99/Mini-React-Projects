import { createContext, useEffect, useState } from "react";
import assets from "../assets/assets";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = () => {
        const userData = { id: 1, name: "Christabel Abel", profilePic: `${assets.image6}` };
        setCurrentUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };
    
    useEffect(() => {
        login();
    }, [])
    
    
    return(
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    )
};

