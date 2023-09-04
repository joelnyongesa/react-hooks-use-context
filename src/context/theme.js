import { createContext, useState } from "react";

// Create the context
const ThemeContext = createContext()

// Create a provider component that will give access to context data to its child components.
function ThemeProvider({ children }){
    const [theme, setTheme] = useState("darl")
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}


export {ThemeContext, ThemeProvider}