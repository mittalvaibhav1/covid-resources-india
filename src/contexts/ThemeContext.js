import { createContext, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../utils/themes";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(() => {
        localStorage.setItem("theme", JSON.stringify(darkTheme));
        return darkTheme;
      });
    } else {
      setTheme(() => {
        localStorage.setItem("theme", JSON.stringify(lightTheme));
        return lightTheme;
      });
    }
  };
  useEffect(() => {
    let localTheme = localStorage.getItem("theme");
    if (localTheme) {
      localTheme = JSON.parse(localTheme);
      setTheme(localTheme.type === "light" ? lightTheme : darkTheme);
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
