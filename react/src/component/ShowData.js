import React from "react";

function ShowData() {
  return (
      <div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h3 style={{color: "#e21a2d"}}>Data Analysis</h3>
          <img
              src={require(
                  '../data_resource/fatality_ratio_across_the_states.png')}
              alt="fatality ratio in U.S" style={{width: "100%"}}/>
        </div>
      </div>
  );
}

export default ShowData;