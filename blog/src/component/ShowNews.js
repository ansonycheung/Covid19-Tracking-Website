import React from "react";
import "./ShowNews.css"

function ShowNews() {
  return (
      <div>
        <div className="col-sm-6 col-md-3">
          <h3 id="breakingNews">Breaking News</h3>
          <ul className="list-group">
            <ul className="list-group">
              <li id="news" className="list-group-item">
                <strong id="title">USA's Coronavirus Version Could be 10x More
                  Contagious</strong>
                <p style={{textAlign: "right"}}><small className="text-right">Jun
                  30, 2020 • 5:44 pm
                  CDT</small></p>
              </li>
              <li id="news" className="list-group-item">
                <strong id="title">Coronavirus Vaccines Must Be More Effective
                  Than Flu
                  Shots</strong>
                <p style={{textAlign: "right"}}><small className="text-right">Jun
                  30, 2020 • 2:05 pm
                  CDT</small></p>
              </li>
              <li id="news" className="list-group-item">
                <strong id="title">Scotland On-Track to Eliminate
                  Coronavirus</strong>
                <p style={{textAlign: "right"}}><small className="text-right">Jun
                  30, 2020 • 1:41 pm
                  CDT</small></p>
              </li>
              <li id="news" className="list-group-item">
                <strong id="title">Americans Barred From Entering the EU for
                  Nonessential
                  Travel</strong>
                <p style={{textAlign: "right"}}><small className="text-right">Jun
                  30, 2020 • 9:03 am
                  CDT</small></p>
              </li>
            </ul>
          </ul>
        </div>
      </div>
  );
}

export default ShowNews;