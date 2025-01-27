"use client"

import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [mode, setMode] = useState("dark")
    const toggleMode =()=> setMode((prev) => prev === "dark" ? "light" : "dark");
    
    return <ThemeContext.Provider value={{mode, toggleMode}}>
       <div className={`theme ${mode}`}> {children}</div>
    </ThemeContext.Provider>
}

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  };

export {ThemeProvider, useTheme}