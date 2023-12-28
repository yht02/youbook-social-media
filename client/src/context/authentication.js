import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const AuthenticationContext = createContext();


export const AuthenticationContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null);


    const login = async (inputs) => {
        const res = await axios.post("http://localhost:8800/api/auth/login", 
        inputs, {
            withCredentials: true,
        });

        setCurrentUser(res.data)

    };


    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser]);


    return (
        <AuthenticationContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthenticationContext.Provider>
    );
};