import axios from "axios";

const base_url = "https://covid19.mathdro.id/api";

export const fetch_Data = (country) => {
  let url;
  url = `${base_url}/countries/${country}`;
  return new Promise((resolve, reject) => {
    if (country && country !== "global") {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    } else {
      fetch(base_url)
        .then((res) => res.json())
        .then((data) => resolve(data));
    }
  });
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${base_url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${base_url}/countries`);
    return countries?.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
