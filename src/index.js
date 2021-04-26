import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DataContextProvider from "./contexts/DataContext";
import ThemeContextProvider from "./contexts/ThemeContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <DataContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </DataContextProvider>
  </StrictMode>,
  rootElement
);
