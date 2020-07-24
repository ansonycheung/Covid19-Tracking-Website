import React from "react";
import ShowData from "./ShowData";
import ShowNews from "./ShowNews";
import ShowRank from "./ShowRank";

function Contents() {
  return (
      <div>
        <div className="container">
          <div className="row" style={{color: "rgba(240, 248, 255, 0.8)"}}>
            <ShowRank />
            <ShowData />
            <ShowNews />
          </div>
        </div>
      </div>
  );
}

export default Contents;