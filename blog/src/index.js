import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css"
import ReactCardFlip from 'react-card-flip';


function Head(props) {
  return (

          <div className="jumbotron">
            <h1 ><i className="fab fa-wpforms"></i> Discussion Board</h1>
            <p>Let the world hear your voice! Feel free to upload a new post.</p>
            {/*<hr className="my-4" />*/}

            <a className="btn btn-secondary btn-md" href="#" role="button">New Post</a>
          </div>


  )
}

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <div className="col h-100 pb-4">
          <div className="card h-100">
            <img src="https://images.unsplash.com/photo-1583946099379-f9c9cb8bc030?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title"><strong>Title: </strong>{this.props.title}</h5>
                <p className="card-text"><strong>Author: </strong>{this.props.author}</p>
                <p className="card-text">
                  <small className="text-muted"><strong>Posted </strong>{this.props.time}</small>
                </p>
                <a href="#" className="btn btn-danger" onClick={this.handleClick}>Click to flip</a>

              </div>
          </div>
          </div>


          <div className="col h-100 pb-4">
          <div className="card h-100">
            <div className="card-header">
              <strong>Author: </strong>{this.props.author}
            </div>
            <div className="card-body">
              <h5 className="card-title"><strong>Title: </strong>{this.props.title}</h5>
              <p className="card-text">{this.props.content}</p>
              <a href="#" className="card-link">Reply</a>
              <a href="#" className="card-link text-red" onClick={this.handleClick}>Click to flip</a>
              <div className="card-footer text-muted mt-5">
                list all comments
              </div>
            </div>
          </div>
          </div>

        </ReactCardFlip>
    )
  }
}


class App extends React.Component {
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

  renderhead() {
    return (<Head />);
  }

  render() {

    const { items } = this.state;
    if (!this.state.isLoaded) {
      return <div>Loading ... </div>;
    } else {
      return (

          <div className="container" id="posts">
            {this.renderhead()}
            <div className="row row-cols-1 row-cols-md-2">{
          items.map(item => (
              <Card
                title = {item.title}
                author= {item.userId}
                time = {item.id}
                content = {item.body}
              />

            ))}

            </div>
          </div>
      );
    }
  }
}









ReactDOM.render(

    <App />,
    document.getElementById('root')
);