import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Card.css";

const Card = ({ result, active }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="card" style={{ background: theme.secondary }}>
      <div className="card__details">
        <h3>{result.name || active}</h3>
        <h5>{result.phone1}</h5>
      </div>
      <div className="card__about">
        <p>{result?.address || result?.district}</p>
        <span>
          <img
            src={
              result.verificationStatus.toLowerCase() === "verified"
                ? "/images/check.svg"
                : "/images/caution.svg"
            }
            alt="status"
          />{" "}
          {result.verificationStatus}
        </span>
      </div>
      <div className="card__additionalInfo">
        <p>{result.description}</p>
        <span>
          {(result.lastVerifiedOn &&
            "Verified On: " +
              new Date(result.lastVerifiedOn).toLocaleString("en-IN", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
              })) ||
            "Source: " + result.source}
        </span>
      </div>
      <div className="card__comments">
        {result.comment && <p>Remarks: {result.comment}</p>}
      </div>
    </div>
  );
};

export default Card;
