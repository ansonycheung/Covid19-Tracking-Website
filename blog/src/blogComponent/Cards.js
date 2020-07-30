import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"


import "bootstrap/dist/css/bootstrap.min.css"

import Card from "./Card"


class Cards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(result => {
      this.setState({
        isLoaded: true,
        items: result
      });
    });
  }


  render() {
    // return (<Menu />);
    // const { items } = this.state;
    if (!this.state.isLoaded) {
      return <div className="text-white">Loading ... </div>;
    } else {
      return (

            <div className="row row-cols-1 row-cols-md-2">{
              this.state.items.map(item => (
                  <Card
                      title = {item.title}
                      author= {item.userId}
                      time = {item.id}
                      content = {item.body}
                  />

              ))}

            </div>

      );
    }
  }
}

export default Cards;