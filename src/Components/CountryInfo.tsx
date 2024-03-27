import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import LineChart from "./LineChart";

interface CountryData {
  id: number;
  name: string;
  status: string;
  timeseries: number[];
  highest: number;
  lowest: number;
}

const CountryInfo = () => {
  const { id } = useParams();
  const [countryinfo, setCountryInfo] = useState<CountryData | null>(null);
  const [error, setError] = useState(" ");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:8000/country-data/${id}`
        );
        setCountryInfo(response.data);
        setError("");
      } catch (error) {
        setError(error as string);
      }
    }

    fetchData();
  }, [id]);

  if (error) {
    return <p>Error in the page.. Please reload</p>;
  }

  console.log(countryinfo);

  return (
    <div>
      {countryinfo ? <LineChart countryinfo={countryinfo} /> : <p>Loading</p>}
    </div>
  );
};

export default CountryInfo;
