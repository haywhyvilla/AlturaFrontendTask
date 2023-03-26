import React from "react";
import "./Nfts.css";

const nfts = ({ nft }) => {
  return (
    <div className="nfts">
      <div>
        <p>{nft.name}</p>
      </div>
      <div>
        <img src={nft.image} alt="img-nft" />
      </div>

      <div>
        <span>{nft.price}ETH</span>
        <h5>{nft.contractName}</h5>
      </div>
    </div>
  );
};

export default nfts;
