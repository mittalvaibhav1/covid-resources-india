import "./SearchModal.css";

const SearchModal = ({ toggleModal }) => {
  return (
    <div className="searchmodal">
      <div className="searchmodal__header" onClick={toggleModal}>
        <h3> Twitter Search </h3>
        <h3> &times;</h3>
      </div>
      <div className="searchmodal__input">
        <input type="text" placeholder="Enter the name of the city" />
        <h4>Search for</h4>
        <div className="searchmodal__inputOptions">
          <div className="searchmodal_inputOptionGroup">
            <input type="checkbox" name="beds" id="beds" />
            <label htmlFor="beds"> Beds</label>
          </div>
          <div className="searchmodal_inputOptionGroup">
            <input type="checkbox" name="icu" id="icu" />
            <label htmlFor="icu"> ICU</label>
          </div>
          <div className="searchmodal_inputOptionGroup">
            <input type="checkbox" name="oxygen" id="oxygen" />
            <label htmlFor="oxygen"> Oxygen</label>
          </div>
          <div className="searchmodal_inputOptionGroup">
            <input type="checkbox" name="ventilator" id="ventilator" />
            <label htmlFor="ventilator"> Ventilator</label>
          </div>
          <div className="searchmodal_inputOptionGroup">
            <input type="checkbox" name="tests" id="tests" />
            <label htmlFor="tests"> Tests</label>
          </div>
          <div className="searchmodal_inputOptionGroup">
            <input type="checkbox" name="fabiflu" id="fabiflu" />
            <label htmlFor="fabiflu"> Fabiflu</label>
          </div>
          <div className="searchmodal_inputOptionGroup">
            <input type="checkbox" name="remdesivir" id="remdesivir" />
            <label htmlFor="remdesivir"> Remdesivir</label>
          </div>
          <div className="searchmodal_inputOptionGroup">
            <input type="checkbox" name="favipiravir" id="favipiravir" />
            <label htmlFor="favipiravir"> Favipiravir</label>
          </div>
          <div className="searchmodal_inputOptionGroup">
            <input type="checkbox" name="tocilizumab" id="tocilizumab" />
            <label htmlFor="tocilizumab"> Tocilizumab</label>
          </div>
          <div className="searchmodal_inputOptionGroup">
            <input type="checkbox" name="plasma" id="plasma" />
            <label htmlFor="plasma"> Plasma</label>
          </div>
          <div className="searchmodal_inputOptionGroup">
            <input type="checkbox" name="food" id="food" />
            <label htmlFor="food"> Food</label>
          </div>
        </div>
        <h4>Additional Filters</h4>
        <div className="searchmodal__inputOptions">
          <div className="searchmodal_inputOptionGroupAdditional">
            <input type="checkbox" name="verified" id="verified" />
            <label htmlFor="verified">
              Show verified tweets only Uncheck this for smaller cities (Tweet
              should contain "verified")
            </label>
          </div>
          <div className="searchmodal_inputOptionGroupAdditional">
            <input type="checkbox" name="unverified" id="unverified" />
            <label htmlFor="unverified">
              Exclude unverified tweets (Tweet should not contain "not verified"
              and "unverified")
            </label>
          </div>
          <button className="searchmodal_inputButton">Generate Link</button>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
