import { createContext, useContext } from "react";



// first we declare a context
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
}); // in the above context we pass a default value in it
// like in above context






// then we export our context provider directly from here
export const ThemeContextProvider = ThemeContext.Provider;





// atlast we create a custom hook to directly access the context

export const useTheme = () => {
  return useContext(ThemeContext)
}