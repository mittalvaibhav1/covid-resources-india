import { useContext } from "react";
import { BrowserRouter, MemoryRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HelpfulResources from "./components/HelpfulResources/HelpfulResources";
import Home from "./components/Home/Home";
import SearchResult from "./components/SearchResult/SearchResult";
import ToggleTheme from "./components/ToggleTheme/ToggleTheme";
import TwitterSearch from "./components/TwitterSearch/TwitterSearch";
import { ThemeContext } from "./contexts/ThemeContext";
import "./styles.css";

export default function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <div
        className="App"
        style={{ background: theme.background, color: theme.color }}
      >
        <HelpfulResources />
        <TwitterSearch />
        <ToggleTheme />
        <Switch>
          <Route exact path="/:active/:state">
            <SearchResult />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
