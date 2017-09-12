import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import WPdata from './components/wpdata/WPdata';
import Main from './components/main/Main';
import './App.css';


class App extends Component {
  constructor(){
    super()
  }
  
  render() {
    const customHistory = createBrowserHistory()
    console.log('rendering App.js...')
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/draft-testing">draft-testing</Link></li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/draft-testing" component={WPdata} />
            {/* <Route component={NotFound} /> */}
          </ Switch>
          </div>

      </Router> 
      </MuiThemeProvider>

    );
  }
}

export default App;
