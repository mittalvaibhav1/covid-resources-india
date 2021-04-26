import { useState } from "react";
import SearchDropdown from "../SearchDropdown/SearchDropdown";
import SearchOptions from "../SearchOptions/SearchOptions";
import "./SearchResources.css";

const SearchResources = () => {
  const [active, setActive] = useState("oxygen");
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="searchresources">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={`Search for ${active} in your area...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <SearchDropdown search={search} active={active} />
      <SearchOptions active={active} setActive={setActive} />
    </div>
  );
};

export default SearchResources;
