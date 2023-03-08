import React from "react";
import "./Popup.css";

const Popup = ({ nftDetails, active, setActive }) => {
  return (
    <div
      className={active ? "section-popup" : "nftPop"}
      onClick={() => setActive(false)}
    >
      <div className="center">
        <img src={nftDetails.image} alt={nftDetails.title} />
        <h1 className="secondary-heading">{nftDetails.ContractName} </h1>
        <p className="description">{nftDetails.description}</p>
      </div>
    </div>
  );
};

export default Popup;
