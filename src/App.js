import Home from "./Components/Home/Home";
import Nfts from "./Components/nfts/Nfts";
import "./index.css";
import { Alchemy, Network } from "alchemy-sdk";
import { useState } from "react";
import Popup from "./Popup/Popup";

function App() {
  const [inputText, setInputText] = useState("");
  const [searchedNfts, setSearchedNfts] = useState([]);
  const [selectedNft, setSelectedNft] = useState({
    name: "",
    description: "",
    contractName: "",
    image: "",
    price: "",
    lastUpdate: "",
  });
  const [popActive, setPopActive] = useState(false);

  const config = {
    apiKey: "xtA4bSM0e8IWwpkt1mciPpPs9xhJFQAw",
    network: Network.ETH_MAINNET,
  };
  const alchemy = new Alchemy(config);

  const main = async () => {
    // Get all NFTs
    const tempNftStore = [];

    try {
      const nfts = await alchemy.nft.getNftsForOwner(inputText);

      const allNfts = nfts.ownedNfts;

      allNfts.forEach((Nft) => {
        tempNftStore.push({
          title: Nft.rawMetadata.name,
          description: Nft.rawMetadata.description,
          image: Nft.media[0]?.thumbnail,
          contractName: Nft.contract.name,
          lastUpdate: Nft.timeLastUpdated,
          price: Nft.contract.openSea?.floorPrice,
        });
      });
    } catch (err) {
      console.log(err);
    }
    setSearchedNfts(tempNftStore);
  };

  const switchSelected = (id) => {
    setSelectedNft(searchedNfts[id]);
    setPopActive(true);
  };
  return (
    <div className="App" onClick={switchSelected}>
      <Home inputText={inputText} setInputText={setInputText} main={main} />
      <div className="container">
        {searchedNfts.map((nft, key) => (
          <Nfts nft={nft} />
        ))}
      </div>
      <div>
        {searchedNfts.map((nft, key) => (
          <Popup
            nftDetails={selectedNft}
            active={popActive}
            setActive={setPopActive}
            nft={nft}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
