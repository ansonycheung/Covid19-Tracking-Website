import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from "react-router-dom";
import Navbar from "../components/navbar.component";
class Data extends React.Component{
  state = {
    data: [],
    date: ""
  };

  componentDidMount() {
    fetch("http://localhost:9000/data")
    .then(res => res.json())
    .then(
        (res) => {
          this.setState({
            data: res.imgs,
            date: res.date
          });
        },
        (error) => {
          this.setState({error})
        });
  }
  render() {
    const data = this.state.data;
    const navbar = [];
    const imgs = [];

    for (let i = 0; i < data.length; i += 2) {
      if (i === data.length - 1) {
        imgs.push(<div className="d-flex justify-content-around">
          <div><img src={data[i].img} alt="loading..."/><p>{data[i].title}</p>
          </div>
        </div>);
      } else {
        imgs.push(<div className="d-flex justify-content-around">
          <div><img src={data[i].img} alt="loading..."/><p>{data[i].title}</p>
          </div>
          <div><img src={data[i + 1].img} alt="loading..."/><p>{data[i
          + 1].title}</p></div>
        </div>);
      }
    }
    return (
        <div className="App">
          <Navbar/>
          <div className="container mt-5">
            {imgs}
          </div>
        </div>

    );
  }
}
export default Data;