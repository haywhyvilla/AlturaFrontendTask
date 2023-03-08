import React from "react";
import "./Home.css";
import logo from "../../logo-svg.svg";
import { FcSearch } from "react-icons/fc";

const Home = ({ inputText, setInputText, main }) => {
  return (
    <div className="app">
      <div className="altura">
        <img alt="logo" src={logo} />
        <h1>Altura</h1>
      </div>
      <div className="search">
        <input
          placeholder="Search for NFTS"
          value={inputText}
          onInput={(e) => setInputText(e.target.value)}
        />
        <FcSearch onClick={main} />
      </div>
    </div>
  );
};

export default Home;
