import React from 'react';
import ReactCardFlip from 'react-card-flip';
import "bootstrap/dist/css/bootstrap.min.css"

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
          {this.showCardA()}
          {this.showCardB()}


          {/*<div className="col h-100 pb-4">*/}
          {/*  <div className="card h-100">*/}
          {/*    <div className="card-header">*/}
          {/*      <strong>Author: </strong>{this.props.author}*/}
          {/*    </div>*/}
          {/*    <div className="card-body">*/}
          {/*      <h5 className="card-title"><strong>Title: </strong>{this.props.title}</h5>*/}
          {/*      <p className="card-text">{this.props.content}</p>*/}
          {/*      <a href="#" className="card-link">Reply</a>*/}
          {/*      <a href="#" className="card-link text-red" onClick={this.handleClick}>Click to flip</a>*/}
          {/*      <div className="card-footer text-muted mt-5">*/}
          {/*        list all comments*/}
          {/*        Bacon ipsum dolor amet spare ribs kielbasa fatback, picanha drumstick andouille strip steak jerky chuck shoulder ground round. Spare ribs buffalo biltong, picanha doner bresaola pork chop pork chuck. Drumstick burgdoggen cow kielbasa, tri-tip tail pig venison pork chop ball tip andouille shoulder bresaola pork belly. Chislic turducken pancetta tail t-bone, biltong swine ribeye meatloaf venison pork belly. Beef flank corned beef bacon picanha venison, tenderloin capicola biltong ball tip short ribs pork belly leberkas. Shank venison boudin turkey chuck porchetta pork belly. Shankle meatloaf frankfurter swine, picanha doner prosciutto andouille shank ham kevin buffalo pastrami:*/}
          {/*        Bacon ipsum dolor amet spare ribs kielbasa fatback, picanha drumstick andouille strip steak jerky chuck shoulder ground round. Spare ribs buffalo biltong, picanha doner bresaola pork chop pork chuck. Drumstick burgdoggen cow kielbasa, tri-tip tail pig venison pork chop ball tip andouille shoulder bresaola pork belly. Chislic turducken pancetta tail t-bone, biltong swine ribeye meatloaf venison pork belly. Beef flank corned beef bacon picanha venison, tenderloin capicola biltong ball tip short ribs pork belly leberkas. Shank venison boudin turkey chuck porchetta pork belly. Shankle meatloaf frankfurter swine, picanha doner prosciutto andouille shank ham kevin buffalo pastrami:*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

        </ReactCardFlip>
    )
  }

  showCardA() {
    return (
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
    );
  }

  showCardB() {
    return (
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
                Bacon ipsum dolor amet spare ribs kielbasa fatback, picanha drumstick andouille strip steak jerky chuck shoulder ground round. Spare ribs buffalo biltong, picanha doner bresaola pork chop pork chuck. Drumstick burgdoggen cow kielbasa, tri-tip tail pig venison pork chop ball tip andouille shoulder bresaola pork belly. Chislic turducken pancetta tail t-bone, biltong swine ribeye meatloaf venison pork belly. Beef flank corned beef bacon picanha venison, tenderloin capicola biltong ball tip short ribs pork belly leberkas. Shank venison boudin turkey chuck porchetta pork belly. Shankle meatloaf frankfurter swine, picanha doner prosciutto andouille shank ham kevin buffalo pastrami:
                Bacon ipsum dolor amet spare ribs kielbasa fatback, picanha drumstick andouille strip steak jerky chuck shoulder ground round. Spare ribs buffalo biltong, picanha doner bresaola pork chop pork chuck. Drumstick burgdoggen cow kielbasa, tri-tip tail pig venison pork chop ball tip andouille shoulder bresaola pork belly. Chislic turducken pancetta tail t-bone, biltong swine ribeye meatloaf venison pork belly. Beef flank corned beef bacon picanha venison, tenderloin capicola biltong ball tip short ribs pork belly leberkas. Shank venison boudin turkey chuck porchetta pork belly. Shankle meatloaf frankfurter swine, picanha doner prosciutto andouille shank ham kevin buffalo pastrami:
              </div>
            </div>
          </div>
        </div>
    );
  }
}


export default Card;