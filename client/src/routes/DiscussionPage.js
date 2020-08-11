import React from "react";

import NavBar from "../Components/NavBar";
import Jumbotron from "../Components/Jumbotron";

function DiscussionPage() {
  return (
      <div>
        <NavBar/>
        <Jumbotron/>
        <h2 style={{color: "white", textAlign: "center"}}>Discussion page</h2>
      </div>
  );
}

export default DiscussionPage;