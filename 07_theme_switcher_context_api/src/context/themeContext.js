import { useContext, createContext } from "react";

export const themeContext = createContext({
    themeMode: "light" ,
    darkTheme : () => {},
    lightTheme : () =>{}
});

export const ThemeContextProvider = themeContext.Provider;

export default function useTheme(){
    return useContext(themeContext);
}
