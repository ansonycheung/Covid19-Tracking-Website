import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../components/navbar.component";
class Data extends React.Component{
  state = {
    data: {}
  };

  componentDidMount() {
    fetch("http://localhost:9000/data")
    .then(res => res.json())
    .then(
        (res) => {this.setState({data: res});},
        (error) => {this.setState({error})});
  }
  render() {
    let data = this.state.data;
    let obj = [];

    // for (let i = 0; i < data.length; i += 2) {
    //   if (i === data.length - 1) {
    //     imgs.push(<div className="d-flex justify-content-around">
    //       <div><img src={data[i].img} alt="loading..."/><p>{data[i].title}</p>
    //       </div>
    //     </div>);
    //   } else {
    //     imgs.push(<div className="d-flex justify-content-around">
    //       <div><img src={data[i].img} alt="loading..."/><p>{data[i].title}</p>
    //       </div>
    //       <div><img src={data[i + 1].img} alt="loading..."/><p>{data[i
    //       + 1].title}</p></div>
    //     </div>);
    //   }
    // }
    return (
        <div className="App">
          <Navbar/>
          <div className="container mt-5">
            {/*{imgs}*/}
          </div>
        </div>
    );
  }
}
export default Data;