"use client"
import React, { createContext, useState,ReactNode, useContext } from "react"

interface ThemeContextType{
    isDarkMode:boolean;
    toggleTheme:()=>void;
}
export const ThemeContext=createContext<ThemeContextType|undefined>(undefined) 

interface ThemeProviderProps{
    children:ReactNode
}
export const ThemeProvider:React.FC<ThemeProviderProps>=({children})=>{
    const [isDarkMode,setDarkMode]=useState(false);
    const toggleTheme=()=>{
        setDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark')
    };
const contextValue:ThemeContextType={
    isDarkMode,
    toggleTheme
}

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
            </ThemeContext.Provider>
    )
}

export const useTheme=()=>useContext(ThemeContext)