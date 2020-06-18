import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../components/navbar.component";
class Search extends React.Component{
  state = {
    keyword: ""
  };
  handleChange(event) {
    this.setState({title: event.target.value})
  }
  render() {

    return (
        <div>
          <Navbar/>
          <div className="container d-flex mt-5 justify-content-center">
            <form className="form-inline my-2 my-lg-0">
              <input type="text" name="keyword" value={this.state.keyword}
                     onChange={this.handleChange.bind(this)}/>
              <button className="btn btn-outline-success m-2 my-sm-0"
                      type="submit">Search
              </button>
            </form>
          </div>
        </div>
    )
  }
}

export default Search;