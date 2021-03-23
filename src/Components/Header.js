import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import fetchUser from "../Context/context";
import { userContext } from "../Context/UserContext";
import modal from "../views/modal";
import Points from "./Points"

export default function Header() {
    const { userData, points, setUserData, setPoints } = useContext(userContext);
    const { clicka, opens } = modal();

  useEffect(() => {
    fetchUser().then(
      (data) => (setUserData(data.name), setPoints(data.points))
    );
  }, []);

  return(
      <>
      <div>
          <div>
              <div onClick={opens}>Add Points</div>
              <Points  clicka={clicka} hide={opens} />

          </div>
      </div>
      </>
  );
}