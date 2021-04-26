import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { lightTheme } from "../../utils/themes";
import "./ToggleTheme.css";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="toggletheme" onClick={toggleTheme}>
      {theme === lightTheme && <img src="/images/moon.svg" alt="theme" />}
      {theme !== lightTheme && <img src="/images/sun.svg" alt="theme" />}
    </div>
  );
};

export default ToggleTheme;
