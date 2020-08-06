import React from "react";

import NavBar from "../Components/NavBar";
import Jumbotron from "../Components/Jumbotron";

function DataPage() {
  return (
      <div>
        <NavBar/>
        <Jumbotron/>
        <h2 style={{color: "white", textAlign: "center"}}>Data page</h2>
      </div>
  );
}

export default DataPage;