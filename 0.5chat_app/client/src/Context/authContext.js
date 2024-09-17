import { createContext, useEffect, useState } from "react";
import assets from "../assets/assets";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async(inputs) => {
        const res = await axios.post("http://localhost:3200/api/auth/register", inputs, {
            withCredentials: true // This is important, because you are working with cookies else there'll be errors
        });

        setCurrentUser(res.data)
    };
    
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser])
    
    
    return(
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    )
};

