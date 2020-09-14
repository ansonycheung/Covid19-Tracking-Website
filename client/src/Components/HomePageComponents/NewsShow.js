import React from "react";
import NewsDex from "./NewsDex";

function NewsShow() {
  return (
      <div>
        <div className="col-sm-12 col-md-6 col-lg-12">
          <h3 style={{color: "#e21a2d"}}>Breaking News</h3>
          <NewsDex />
        </div>
      </div>
  );
}

export default NewsShow;