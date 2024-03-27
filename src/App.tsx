import React from "react";
import "./App.css";
import CountryList from "./Components/CountryList";
import CountryInfo from "./Components/CountryInfo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Country-info App</h1>
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/country-data/:id" element={<CountryInfo />} />
      </Routes>
    </div>
  );
}

export default App;
