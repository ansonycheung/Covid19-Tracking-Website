import React from "react";
import Map from "../DataPageComponents/Map";

function DataShow() {
  return (
      <div>
        <div className="col-sm-12 col-md-12 col-lg-9"
             style={{
               marginTop: 50,
               marginBottom: 16,
               backgroundColor: "black",
               color: "white",
               border: "5px solid white",
               lineHeight: "1.1",
               boxShadow: "7px 10px 12px -5px rgba(255, 255, 255, 0.56)",
               borderRadius: "5px"
             }}>
          <h3 style={{color: "#e21a2d"}}>Data Analysis</h3>
          <Map/>
        </div>
      </div>
  );
}

export default DataShow;