import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { postCoins } from "../Context/contextAPI";

export default function Points() {
  const [userData, setUserData] = useContext(UserContext);

  function forCoins(amount) {
    postCoins(amount, userData, setUserData);
  }
  

  return (
    <>
      <div id="coins">ADD MORE COINS</div>
      <div id="getcoins">
        <button className="button" 
          onClick={() => {
            forCoins(1000);
          }}
        >
          1000
        </button>

        <button className="button"
          onClick={() => {
            forCoins(5000);
          }}
        >
          5000
        </button>

        <button className="button" onClick={() => {
          forCoins(7000);
        }}>
          7500</button>
      </div>

      
    </>
  );
}
