import { createContext, useEffect, useState } from "react";
import { fetchData } from "../utils/api";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  // const [districts, setDistricts] = useState(null);
  const [ambulance, setAmbulance] = useState({ data: [] });
  const [helpline, setHelpline] = useState({ data: [] });
  const [hospital, setHospitals] = useState({ data: [] });
  const [medicine, setMedicine] = useState({ data: [] });
  const [oxygen, setOxygen] = useState({ data: [] });
  const [plasma, setPlasma] = useState({ data: [] });

  const getInitialData = async () => {
    setAmbulance(await fetchData("AMBULANCE"));
    setHelpline(await fetchData("HELPLINE"));
    setHospitals(await fetchData("HOSPITALS"));
    setMedicine(await fetchData("MEDICINE"));
    setOxygen(await fetchData("OXYGEN"));
    setPlasma(await fetchData("PLASMA"));
  };

  useEffect(() => {
    getInitialData();
  }, []);
  return (
    <DataContext.Provider
      value={{
        ambulance,
        helpline,
        hospital,
        medicine,
        oxygen,
        plasma
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
