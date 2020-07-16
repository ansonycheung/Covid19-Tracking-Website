import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';





class App extends React.Component {
  constructor(props) {
    super(props);
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
    const { items } = this.state;
    if (!this.state.isLoaded) {
      return <div>Loading ... </div>;
    } else {
      return (
          <div className="container" id="posts">{
          items.map(item => (
                <div className="threads" id={item.id}>
                    <div className="col-sm-4">{item.id}</div>
                    <div className="col-sm-4">{item.userId}</div>
                    <div className="col-sm-4">{item.title}</div>
                </div>
            ))}
          </div>
      );
    }
  }
}

class BackGround extends React.Component {
  state = {
    date:[],
    title:[],

  }

  render() {
    const myRequest = new Request('./news.json');
    fetch(myRequest)
    .then(response => response.json())
    .then(response => {
      alert("!!!");
      console.log("!!!!!!!!!!!")
      console.log(response)

    })



    return (
      <div className="navbar">
        {/*<Nav />*/}
      </div>
    );
  }


}




ReactDOM.render(
    <App />,
    document.getElementById('root')
);