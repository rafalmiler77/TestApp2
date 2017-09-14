import React, { Component } from 'react';
import './Draft.css';

class Draft extends Component {
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
      <div className="draft-container">

        <div>Articles from wp-site:
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

export default Draft;