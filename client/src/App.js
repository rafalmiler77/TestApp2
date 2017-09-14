import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Layout from './components/layout/Layout';
import Main from './components/main/Main';
import Draft from './components/draft/Draft';

class App extends Component {
  render() {
    const customHistory = createBrowserHistory()
    console.log('rendering App.js...')
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Router>

          <Layout>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/draft-testing" component={Draft} />
              {/* <Route component={NotFound} /> */}
            </ Switch>
          </Layout>

        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
