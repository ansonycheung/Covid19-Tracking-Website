import React, {Component} from "react";

class RankDex extends Component{
  static defaultProps = {
    branchlists: [
      {
        id: 1,
        text: "Data",
        img: "https://images.unsplash.com/photo-1586449480537-3a22cf98b04c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      },
      {
        id: 2,
        text: "News",
        img: "https://images.unsplash.com/photo-1585282263861-f55e341878f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      },
      {
        id: 3,
        text: "Discussion",
        img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      },
      {
        id: 4,
        text: "Tips",
        img: "https://images.unsplash.com/photo-1586864387564-ea6bc7ceb97c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      }
    ]
  };

  render() {
    return (
        <div></div>
    );
  }
}

export default RankDex;