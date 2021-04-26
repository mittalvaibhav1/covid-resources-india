import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import "./SearchDropdown.css";

const SearchDropdown = ({ search, active }) => {
  const [dropdownList, setDropdownList] = useState([]);
  const [filteredList, setFilteredList] = useState(dropdownList);
  const {
    ambulance,
    helpline,
    hospital,
    medicine,
    oxygen,
    plasma
  } = useContext(DataContext);

  useEffect(() => {
    switch (active) {
      case "oxygen":
        setDropdownList([
          ...new Set(
            oxygen &&
              oxygen.data.map((data) => {
                return data.state;
              })
          )
        ]);
        break;
      case "medicine":
        setDropdownList([
          ...new Set(
            medicine &&
              medicine.data.map((data) => {
                return data.state;
              })
          )
        ]);
        break;
      case "hospital":
        setDropdownList([
          ...new Set(
            hospital &&
              hospital.data.map((data) => {
                return data.state;
              })
          )
        ]);
        break;
      case "ambulance":
        setDropdownList([
          ...new Set(
            ambulance &&
              ambulance.data.map((data) => {
                return data.state;
              })
          )
        ]);
        break;
      case "plasma":
        setDropdownList([
          ...new Set(
            plasma &&
              plasma.data.map((data) => {
                return data.state;
              })
          )
        ]);
        break;
      case "helpline":
        setDropdownList([
          ...new Set(
            helpline &&
              helpline.data.map((data) => {
                return data.state;
              })
          )
        ]);
        break;
      default:
        break;
    }
  }, [active, oxygen, medicine, ambulance, hospital, plasma, helpline]);

  useEffect(() => {
    setFilteredList(
      dropdownList.filter((item) =>
        item.toLowerCase().startsWith(search.toLowerCase())
      )
    );
  }, [search, dropdownList]);
  return (
    <div
      style={{ height: search.length === 0 && 0 }}
      className="searchdropdown"
    >
      {search.length !== 0 &&
        filteredList.map((item, idx) => {
          return (
            <div key={idx} className="searchdropdown__item">
              <Link to={`/${active}/${item}`}>{item}</Link>
            </div>
          );
        })}
      {search.length !== 0 && filteredList.length === 0 && (
        <div className="searchdropdown__item">No results found!</div>
      )}
    </div>
  );
};

export default SearchDropdown;
