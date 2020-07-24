import React from "react";

function Jumbotron() {
  return (
      <div>
        <div className="container">
          <div className="jumbotron" style={{
            marginTop: 16,
            height: 260,
            backgroundColor: "#e21a2d",
          }}>
            <p style={{
              fontSize: "50px",
              fontWeight: "bold",
              color: "rgba(240, 248, 255, 0.8)",
            }}>Covid-19 Tracking Website</p>
            <p style={{
              fontSize: "20px",
              fontWeight: "bold",
            }}>NEU Align Student Group Project</p>
          </div>
        </div>
      </div>
  );
}

export default Jumbotron;