import React from "react";
import {Link} from "react-router-dom";

function NewsInfo({date_time, title}) {
  return (
      <div className="News">
        <ul className="list-group" style={{
          margin: "2px"
        }}>
          <li className="list-group-item" style={{
            backgroundColor: "black",
            color: "white",
            border: "1px solid white",
            lineHeight: "1.1",
            margin: "0",
            padding: "20px 5",
          }}>
            <Link to="/news">
              <p style={{
                color: "white",
                textAlign: "left",
                fontWeight: "700",
                margin: "2px",
              }}>
                {title}
              </p></Link>
            <p style={{
              textAlign: "right",
              margin: "0"
            }}>{date_time}</p>
          </li>
        </ul>
      </div>
  );
}

export default NewsInfo;
