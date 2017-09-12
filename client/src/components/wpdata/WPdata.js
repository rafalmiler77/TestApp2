import React, { Component } from 'react';
import './WPdata.css';

class WPdata extends Component {
  constructor() {
    super()
    this.state = {
      data: 'loading'
    }
  }

  componentDidMount() {
    fetch('/wpdata')
      .then(res => {
        console.log(res)
        // console.log(res.json())
        return res.json();
      })
      .then(items => this.setState({ data: items }));
  }
  render() {
    console.log('state', this.state.data)
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>data
          {
            this.state.data !== 'loading' ?
              this.state.data.map(
                (item, index) => <div key={index}>{item.title.rendered}</div>
              ) : ' loading...'
          }
        </div>
      </div>
    );
  }
}

export default WPdata;