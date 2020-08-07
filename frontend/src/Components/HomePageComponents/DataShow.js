import React from "react";
import Map from "../DataPageComponents/Map";

function DataShow() {
  return (
      <div>
        <div className="col-sm-12 col-md-6 col-lg-6"
             style={{ height: '500px'}}>
          <h3 style={{color: "#e21a2d"}}>Data Analysis</h3>
          <Map/>
        </div>
      </div>
  );
}

export default DataShow;