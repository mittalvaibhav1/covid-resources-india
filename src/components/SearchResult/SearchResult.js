import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import Card from "../Card/Card";
import "./SearchResult.css";

const SearchResult = () => {
  const { state, active } = useParams();
  const [resultList, setResultList] = useState([]);
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
        setResultList(
          oxygen.data.filter((res) => {
            return res.state === state;
          })
        );
        break;
      case "medicine":
        setResultList(
          medicine.data.filter((res) => {
            return res.state === state;
          })
        );
        break;
      case "hospital":
        setResultList(
          hospital.data.filter((res) => {
            return res.state === state;
          })
        );
        break;
      case "ambulance":
        setResultList(
          ambulance.data.filter((res) => {
            return res.state === state;
          })
        );
        break;
      case "plasma":
        setResultList(
          plasma.data.filter((res) => {
            return res.state === state;
          })
        );
        break;
      case "helpline":
        setResultList(
          helpline.data.filter((res) => {
            return res.state === state;
          })
        );
        break;
      default:
        break;
    }
  }, [state, active, oxygen, medicine, ambulance, hospital, plasma, helpline]);

  return (
    <div className="searchresult">
      <div className="searchresult__route">
        <Link to="/">
          <img src="/images/home.svg" alt="Home" />
        </Link>
        <img src="/images/next.svg" alt="" />
        <span> {active} </span>
        <img src="/images/next.svg" alt="" />
        <span> {state} </span>
      </div>
      <div className="searchresult__list">
        {resultList.map((result) => {
          return <Card key={result.id} result={result} active={active} />;
        })}
      </div>
    </div>
  );
};

export default SearchResult;
