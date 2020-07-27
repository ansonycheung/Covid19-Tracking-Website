import React, {Component}from "react";
import RankDex from "./RankDex";

class ShowRank extends Component{
  render() {
    return (
        <div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <h3 style={{color: "rgba(234,46,73,0.9)"}}>Rank</h3>
            <div className="ShowRank">
              <RankDex />
            </div>
          </div>
        </div>
    );
  }
}

export default ShowRank;