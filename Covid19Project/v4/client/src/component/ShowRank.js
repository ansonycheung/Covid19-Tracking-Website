import React, {Component}from "react";
import RankDex from "./RankDex";

class ShowRank extends Component{
  render() {
    return (
        <div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <h3>Rank</h3>
            {/*<img*/}
            {/*    src="https://images.unsplash.com/photo-1586449480537-3a22cf98b04c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"*/}
            {/*    alt="" style={{maxWidth: "100%", maxHeight: "100%"}}/>*/}
            <div className={ShowRank}>
              <RankDex />
            </div>
          </div>
        </div>
    );
  }
}

export default ShowRank;