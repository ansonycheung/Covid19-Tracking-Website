import React from 'react';
import Demo from './Chart';
import Demo2 from './Chart2';
import Demo3 from './Chart3';

class Drop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: 'Select a region',
      factor: 'Select a factor'
    };
  }

  render() {
    return (
        <div className="drop">
          <div
              className="drop-button1"
              style={{
                float: 'left',
                paddingLeft: '30%',
                paddingRight: '25%',
                paddingBottom: '3%'
              }}
          >
            <div className="buttons">
              <div style={{color: 'white', paddingBottom: '5%'}}>Region :</div>
              <div className="btn-group">
                <button type="button" className="btn btn-danger">
                  {this.state.region}
                </button>
                <button
                    type="button"
                    className="btn btn-danger dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{minWidth: '18%'}}
                >
                  <span className="caret"/>
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/#"
                       onClick={() => this.setState({region: 'US'})}>US</a>
                    <a href="/#"
                       onClick={() => this.setState({region: 'AK'})}>AK</a>
                    <a href="/#"
                       onClick={() => this.setState({region: 'AL'})}>AL</a>
                    <a href="/#"
                       onClick={() => this.setState({region: 'AR'})}>AR</a>
                    <a href="/#"
                       onClick={() => this.setState({region: 'AS'})}>AS</a>
                    <a href="/#"
                       onClick={() => this.setState({region: 'AZ'})}>AZ</a>
                    <a href="/#"
                       onClick={() => this.setState({region: 'CA'})}>CA</a>
                    <a href="/#"
                       onClick={() => this.setState({region: 'CO'})}>CO</a>
                    <a href="/#"
                       onClick={() => this.setState({region: 'CT'})}>CT</a>
                    <a href="/#"
                       onClick={() => this.setState({region: 'DC'})}>DC</a>
                    <a href="/#"
                       onClick={() => this.setState({region: 'DE'})}>DE</a>
                    <a href="/#"
                       onClick={() => this.setState({region: 'FL'})}>FL</a>
                    <a href="/#"
                       onClick={() => this.setState({region: 'GA'})}>GA</a>
                    <a href="/#"
                       onClick={() => this.setState({region: 'WA'})}>WA</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
              className="drop-button2"
              style={{
                paddingBottom: '3%'
              }}
          >
            <div className="buttons">
              <div style={{color: 'white', paddingBottom: '0.3%'}}>Factor :
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-danger">
                  {this.state.factor}
                </button>
                <button
                    type="button"
                    className="btn btn-danger dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                  <span className="caret"/>
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu"
                    style={{paddingLeft: '25%', paddingRight: '25%'}}>
                  <li>
                    <a href="/#"
                       onClick={() => this.setState({factor: 'death'})}>Factor:
                      Death</a>
                    <a href="/#"
                       onClick={() => this.setState({factor: 'positive'})}>Factor:
                      Positive cases</a>
                    <a href="/#"
                       onClick={() => this.setState({factor: 'negative'})}>Factor:
                      Negative cases</a>
                    <a href="/#"
                       onClick={() => this.setState({factor: 'hospitalized'})}>
                      Factor: Hospitalized cases
                    </a>
                    <a href="/#"
                       onClick={() => this.setState({factor: 'deathIncrease'})}>
                      Factor: Death Increase
                    </a>
                    <a href="/#" onClick={() => this.setState(
                        {factor: 'positiveIncrease'})}>
                      Factor: Positive Increase
                    </a>
                    <a href="/#" onClick={() => this.setState(
                        {factor: 'negativeIncrease'})}>
                      Factor: Negative Increase
                    </a>
                    <a href="/#" onClick={() => this.setState(
                        {factor: 'hospitalizedIncrease'})}>
                      Factor: hospitalized Increase
                    </a>
                    <a href="/#"
                       onClick={() => this.setState({factor: 'recovered'})}>
                      Factor: Recovered cases
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            {this.state.region === 'Select a region' || this.state.factor
            === 'Select a factor' ? (
                <Demo3/>
            ) : (
                <div>
                  {this.state.region !== 'Select a region' &&
                  this.state.factor === 'death' && <Demo2
                      region={this.state.region} title="death"/>}
                  {this.state.factor === 'positive' && <Demo2
                      region={this.state.region} title="positive"/>}
                  {this.state.factor === 'negative' && <Demo2
                      region={this.state.region} title="negative"/>}
                  {this.state.factor === 'recovered' && (
                      <Demo2 region={this.state.region} title="recovered"/>
                  )}
                  {this.state.factor === 'hospitalized' && (
                      <Demo2 region={this.state.region} title="hospitalized"/>
                  )}
                  {this.state.factor === 'deathIncrease' && (
                      <Demo region={this.state.region} title="deathIncrease"/>
                  )}
                  {this.state.factor === 'positiveIncrease' && (
                      <Demo region={this.state.region}
                            title="positiveIncrease"/>
                  )}
                  {this.state.factor === 'negativeIncrease' && (
                      <Demo region={this.state.region}
                            title="negativeIncrease"/>
                  )}
                  {this.state.factor === 'hospitalizedIncrease' && (
                      <Demo region={this.state.region}
                            title="hospitalizedIncrease"/>
                  )}
                </div>
            )}
          </div>
        </div>
    );
  }
}

export default Drop;