import React from "react";

function Jumbotron() {
  return (
      <div>
        <div className="container">
          <div className="jumbotron" style={{
            marginTop: 16,
            height: 260,
            backgroundColor: "rgba(234, 46, 73, 0.9)",
            textAlign: "center"
          }}>
            <p style={{
              fontSize: "50px",
              fontWeight: "bold",
              color: "#fff",
            }}>Covid-19 Tracking Website</p>
            <p style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "black",
            }}>NEU Align Student Group Project</p>
          </div>
        </div>
      </div>
  );
}

export default Jumbotron;