import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Footer.css";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="footer" style={{ background: theme.secondary }}>
      <span>
        Database:{" "}
        <a
          style={{ color: theme.color }}
          href="https://github.com/coronasafe/life"
          rel="noreferrer"
          target="_blank"
        >
          CoronaSafe
        </a>
      </span>
      <span>
        Icon courtesy:{" "}
        <a
          style={{ color: theme.color }}
          href="https://flaticon.com"
          rel="noreferrer"
          target="_blank"
        >
          Flaticon
        </a>
      </span>
    </div>
  );
};

export default Footer;
