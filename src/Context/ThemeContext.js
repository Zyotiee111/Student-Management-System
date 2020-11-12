import React, { createContext, useReducer } from 'react'

// constants
const dark = {
    name: "dark",
    background: "#2d3436",
    color: "#fff",
    primary: "#6c5ce7"
}
const light = {
    name: "light",
    background: "#fff",
    color: "#3a3a3a",
    primary: "#6c5ce7"
}

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'DARK':
            return dark;
        case 'LIGHT':
            return light;
        default:
            return state;
    }
}

export const themeContext = createContext();

export default function ThemeContext(props) {
    const [theme, dispatchTheme] = useReducer(themeReducer, dark);
    return (
        <themeContext.Provider value={[theme, dispatchTheme]}>
            {props.children}
        </themeContext.Provider>
    )
}
