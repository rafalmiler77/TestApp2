// https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce
import React from 'react';
import PropTypes from 'prop-types';

// 1. HOC technique

const withMouse = (Component) => {
  return class extends React.Component {
    state = { x: 0, y: 0 }
    
    handleMouseMove = (event) => {
      this.setState({
        x: event.clientX,
        y: event.clientY
      })
    }
    
    render() {
      return (
        <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
          <Component {...this.props} mouse={this.state} />
        </div>
      )
    }
  }
}

class ShowOne extends React.Component{
  render() {
    console.log('this.props', this.props)
    const { x, y } = this.props.mouse
    return (
      <div style={{ height: '100%' }}>
        <h1>The mouse position is ({x}, {y})</h1>
      </div>
    )
  }
}

// 2. Render Props technique

class Mouse extends React.Component {
  static propTypes = {
    showPosition: PropTypes.func.isRequired
  }
  
  state = { x: 0, y: 0 }
  
  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }
  
  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        {this.props.showPosition(this.state)}
      </div>
    )
  }
}
class ShowTwo extends React.Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Mouse showPosition={({ x, y }) => (
          // The showPosition prop gives us the state we need
          // to render whatever we want here.
          <h1>The mouse position is ({x}, {y})</h1>
        )} />
      </div>
    )
  }
}
const withMouse2 = (Component) => {
  return class extends React.Component {
    render() {
      return <Mouse showPosition={mouse => (
        <Component {...this.props} mouse={mouse} />
      )} />
    }
  }
}

// const RenderProp = withMouse(ShowOne)
const RenderProp = withMouse2(ShowOne)
// const RenderProp = ShowTwo
export default RenderProp;


