const baseURL = "https://life-api.coronasafe.network/data/";

const apiCodes = {
  DISTRICTS: "active_district_data.json",
  AMBULANCE: "ambulance.json",
  HELPLINE: "helpline.json",
  HOSPITALS: "hospital_clinic_centre.json",
  MEDICINE: "medicine.json",
  OXYGEN: "oxygen.json",
  PLASMA: "plasma.json"
};

export const fetchData = async (code) => {
  let data = await fetch(`${baseURL}${apiCodes[code]}`);
  data = await data.json();
  return data;
};