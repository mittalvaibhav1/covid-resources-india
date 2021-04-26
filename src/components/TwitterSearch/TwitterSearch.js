import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import SearchModal from "../SearchModal/SearchModal";
import "./TwitterSearch.css";

const TwitterSearch = () => {
  const [showModal, setShowModal] = useState(false);
  const { theme } = useContext(ThemeContext);
  const toggleModal = () => {
    setShowModal((old) => {
      return !old;
    });
  };
  return (
    <div
      title="Search Twitter"
      style={{ background: showModal && theme.background }}
      className="twittersearch"
    >
      {!showModal && (
        <img
          src="/images/twitter.svg"
          onClick={toggleModal}
          alt="helpful resources"
        />
      )}
      {showModal && <SearchModal toggleModal={toggleModal} />}
    </div>
  );
};

export default TwitterSearch;
