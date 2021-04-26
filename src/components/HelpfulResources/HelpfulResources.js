import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import ResourcesModal from "../ResourcesModal/ResourcesModal";
import "./HelpfulResources.css";

const HelpfulResources = () => {
  const [showModal, setShowModal] = useState(false);
  const { theme } = useContext(ThemeContext);
  const toggleModal = () => {
    setShowModal((old) => {
      return !old;
    });
  };
  return (
    <div
      title="Helpful Resources"
      style={{
        background: showModal && theme.background,
        zIndex: showModal && 100
      }}
      className="helpfulresources"
    >
      {!showModal && (
        <img
          src="/images/helpful.svg"
          onClick={toggleModal}
          alt="helpful resources"
        />
      )}
      {showModal && <ResourcesModal toggleModal={toggleModal} />}
    </div>
  );
};

export default HelpfulResources;
