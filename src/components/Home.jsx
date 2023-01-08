import React, { Fragment } from "react";
import Coins from "./Coins";
import GlobalData from "./GlobalData";

function Home() {
  return (
    <Fragment>
      <GlobalData />
      <Coins />
    </Fragment>
  );
}

export default Home;
