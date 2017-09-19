import React, { Component } from 'react';
import { connect } from 'react-redux';
import DraftNav from './DraftNav';
import { wpContentToStore } from '../../state/actionCreators';
import './Draft.css';

const mapStateToProps = state => ({
  currentRawContent: state.draftData.currentRawContent,
  wpContent: state.draftData.wpContent,
})

const mapDispatchToProps = dispatch => ({
  wpContentToStore: val => dispatch(wpContentToStore(val)),
})

class Draft extends Component {
  constructor() {
    super()
    this.state = {
      data: 'loading'
    }
  }

  componentDidMount() {
    if (this.props.wpContent === null) {
      fetch('/wpdata')
        .then(res => {
          console.log(res)
          return res.json();
        })
        .then(items => {
          this.setState({ data: items })
          this.props.wpContentToStore(items)
        }
        );
    }
  }
  render() {
    console.log('state', this.state.data)
    console.log('store', this.props.wpContent)
    return (
      <div className="draft-container">
        <DraftNav />
        <div>Titles of articles from wp-site:
          {
            this.props.wpContent !== null ?
              this.props.wpContent.map(
                (item, index) => <div key={index}>{item.title.rendered}</div>
              ) : ' loading...'
          }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Draft);
