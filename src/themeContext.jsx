import { createContext, useState } from "react";



const ThemeContext = createContext("light");



function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    const contextValue = {
        theme,
        toggleTheme
    }
    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}


export {
    ThemeContext,
    ThemeProvider
}