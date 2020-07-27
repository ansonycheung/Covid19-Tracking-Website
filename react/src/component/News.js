import React from "react";

function News({date_time, title}) {
  return (
      <div className="News">
        <ul className="list-group" style={{
          margin: "2px"
        }}>
          <li className="list-group-item" style={{
            backgroundColor: "#e21a2d",
            color: "black",
            border: "0px",
            lineHeight: "1.1",
            margin: "0",
            padding: "20px 5",
          }}>
            <p style={{
              textAlign: "left",
              fontWeight: "700",
              margin: "2px",
            }}>
              {title}
            </p>
            <p style={{
              textAlign: "right",
              margin: "0"
            }}>{date_time}</p>
          </li>

        </ul>

      </div>
  );
}

export default News;
