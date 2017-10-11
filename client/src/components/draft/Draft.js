import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
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
      data: 'loading',
      chosenArticleId: null
    }
  }

// You can use Node environment variables to inject values into your code at built- time.React - scripts will automatically look for any environment variables starting with REACT_APP_ and make them available under the global process.env.These variables can be in a.env file for convenience:
// REACT_APP_BACKEND = http://my-api.com
// REACT_APP_BACKEND_USER = root
// You can then reference them in your code:
// fetch({ process.env.REACT_APP_SECRET_CODE } / endpoint)

  // async componentDidMount() {
  //   const response = await fetch('/wpdata')
  //   if (response.status !== 200) {
  //     const msg = 'Problems with fetching resources'
  //     this.setState({ data: msg })
  //     this.props.wpContentToStore([msg])
  //     return;
  //   }
  //   const wpdata = response.json();
  //   this.setState({ data: wpdata })
  //   this.props.wpContentToStore(wpdata)
  // }

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
handleClick = id => {
  console.log('id', id)
  this.setState({ chosenArticleId: id })
}

  render() {
    console.log('this.state.data', this.state.data)
    console.log('this.props.wpContent', this.props.wpContent)
    console.log('this.props.currentRawContent', this.props.currentRawContent)
    return (
      <div className="draft-container">
        <DraftNav />
        <Row>
          <Col xs={2}>
            <h3>Titles of articles from wp-site:</h3>
            {
              this.props.wpContent !== null ?
                this.props.wpContent.map(
                  (item, index) => <div key={index} onClick={()=>this.handleClick(item.id)}>{item.title.rendered}</div>
                ) : ' loading...'
            }
          </Col>
          <Col xs={5}>
            <h3>Article string</h3>
            {
              (this.state.wpContent !== null && this.state.chosenArticleId !== null) ?
                this.props.wpContent.filter(
                  item => item.id === this.state.chosenArticleId
                ).map(
                  (item, index) => <div key={index}>{item.content.rendered}</div>
                )
                : <div>nothing chosen</div>
            }
          </Col>
          <Col xs={5}>
            <h3>Displayed article</h3>
            {
              (this.state.wpContent !== null && this.state.chosenArticleId !== null) ?
                this.props.wpContent.filter(
                  item => item.id === this.state.chosenArticleId
                ).map(
                  (item, index) => <div key={index} dangerouslySetInnerHTML={{__html: item.content.rendered}} />
                )
                : <div>nothing chosen</div>
            }
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <h3>Current raw content</h3>
            {
              JSON.stringify(this.props.currentRawContent)
            }
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Draft);
