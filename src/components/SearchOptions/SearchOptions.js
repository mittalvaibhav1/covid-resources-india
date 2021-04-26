import "./SearchOptions.css";

const SearchOptions = ({ active, setActive }) => {
  const handleActive = (e) => {
    setActive(e.target.dataset.type);
  };
  return (
    <div className="searchoptions">
      <div
        className={`searchoptions__oxygen ${active === "oxygen" && "active"}`}
        data-type="oxygen"
        onClick={handleActive}
      >
        <img data-type="oxygen" src="/images/oxygen.svg" alt="oxygen" />
        <span data-type="oxygen">Oxygen</span>
      </div>
      <div
        className={`searchoptions__medicine ${
          active === "medicine" && "active"
        }`}
        data-type="medicine"
        onClick={handleActive}
      >
        <img data-type="medicine" src="/images/medicine.svg" alt="medicine" />
        <span data-type="medicine">Medicine</span>
      </div>
      <div
        data-type="hospital"
        className={`searchoptions__hospital ${
          active === "hospital" && "active"
        }`}
        onClick={handleActive}
      >
        <img data-type="hospital" src="/images/hospital.svg" alt="hosptial" />
        <span data-type="hospital">Hospital</span>
      </div>
      <div
        data-type="ambulance"
        className={`searchoptions__ambulance  ${
          active === "ambulance" && "active"
        }`}
        onClick={handleActive}
      >
        <img
          data-type="ambulance"
          src="/images/ambulance.svg"
          alt="ambulance"
        />
        <span data-type="ambulance">Ambulance</span>
      </div>
      <div
        data-type="plasma"
        className={`searchoptions__plasma  ${active === "plasma" && "active"}`}
        onClick={handleActive}
      >
        <img data-type="plasma" src="/images/plasma.svg" alt="plasma" />
        <span data-type="plasma">Plasma</span>
      </div>
      <div
        data-type="helpline"
        className={`searchoptions__helpline  ${
          active === "helpline" && "active"
        }`}
        onClick={handleActive}
      >
        <img data-type="helpline" src="/images/helpline.svg" alt="helpline" />
        <span data-type="helpline">Helpline</span>
      </div>
    </div>
  );
};

export default SearchOptions;
