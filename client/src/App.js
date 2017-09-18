import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Layout from './components/layout/Layout';
import Main from './components/main/Main';
import Draft from './components/draft/Draft';
import MyEditor from './components/draft/MyEditor';
import Entity from './components/draft/Entity';
import Link from './components/draft/Link';


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
              <Route exact path="/draft-testing" component={Draft} />
              <Route exact path="/draft-testing/editor" component={MyEditor} />
              <Route exact path="/draft-testing/entity" component={Entity} />
              <Route exact path="/draft-testing/link" component={Link} />
              {/* <Route component={NotFound} /> */}
            </ Switch>
          </Layout>

        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
