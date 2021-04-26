import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { resources } from "../../utils/resources";
import "./ResourcesModal.css";

const ResourcesModal = ({ toggleModal }) => {
  const { theme } = useContext(ThemeContext);
  const [resourceList, setResourceList] = useState(resources);
  return (
    <div className="resourcesmodal">
      <div className="resourcesmodal__header" onClick={toggleModal}>
        <h3> Helpful Resources </h3>
        <h3> &times;</h3>
      </div>
      <h4> List of helpful resources: </h4>
      <div className="resourcesmodal__list">
        <ul>
          {resourceList.map((resource, idx) => {
            return (
              <li key={idx}>
                <a
                  style={{ color: theme.color }}
                  href={resource.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {resource.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ResourcesModal;
