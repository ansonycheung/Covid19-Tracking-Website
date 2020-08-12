import React from "react";
import DataShow from "./DataShow";
import NewsShow from "./NewsShow";
import RankShow from "./RankShow";

function Contents() {
  return (
      <div>
        <div className="container">
          <div className="row" style={{color: "rgba(240, 248, 255, 0.8)"}}>
            <DataShow />
            <RankShow />
            <NewsShow />
          </div>
        </div>
      </div>
  );
}

export default Contents;