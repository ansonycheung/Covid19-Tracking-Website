import React from "react";

function RankItem({country, confirmedCases}) {
  return (
      <div className="RankItem">
        <ul className="list-group" style={{
          margin: "2px",
        }}>
          <li className="list-group-item" style={{
            backgroundColor: "rgba(234,46,73,0.9)",
            color: "white",
            border: "0px",
            textAlign: "left",
            lineHeight: "1.1",
            fontWeight: "500",
            // color: rgba(234,46,73,0.9);
            margin: "0",
            textTransform: "uppercase",
            padding: "20px 5",
            letterSpacing: "1px"
          }}>
            <span className="badge"
                  style={{backgroundColor: "black"}}>{confirmedCases}</span>
            <span style={{textAlign: "left"}}>{country}</span>
          </li>
        </ul>
      </div>
  );
}

export default RankItem;