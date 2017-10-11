import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Layout from './components/layout/Layout';
import Main from './components/main/Main';
import Draft from './components/draft/Draft';
import MyEditor from './components/draft/MyEditor';
import Entity from './components/draft/Entity';
import Link from './components/draft/Link';
import RenderProp from './components/renderProp/RenderProp';

import Auth from './components/auth/Auth';
import history from './history';
import AuthApp from './components/auth/AuthApp'; // The /auth route
import Home from './components/auth/Home'; // The /home route
import Profile from './components/auth/Profile'; // The /profile route
import Chat from './components/auth/Chat'; // The /chat route
import Callback from './components/auth/Callback'; // The /callback route

//Instantiate the Auth0 service
const auth = new Auth();

// This function utilizes the handleAuthentication() method in Auth/Auth.js
const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {
  render() {
    const customHistory = createBrowserHistory()
    console.log('rendering App.js...')
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Router history={customHistory}>

          <Layout>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/draft-testing" component={Draft} />
              <Route exact path="/draft-testing/editor" component={MyEditor} />
              <Route exact path="/draft-testing/entity" component={Entity} />
              <Route exact path="/draft-testing/link" component={Link} />

              <Route path="/renderProp" component={RenderProp} />

              <Route path="/auth" render={(props) => <AuthApp auth={auth} {...props} />} />
              <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
              <Route path="/chat" render={(props) => (
                !auth.isAuthenticated() ? (
                  <Redirect to="/home" />
                ) : (
                    <Chat auth={auth} {...props} />
                  )
              )} />
              <Route path="/profile" render={(props) => (
                !auth.isAuthenticated() ? (
                  <Redirect to="/home" />
                ) : (
                    <Profile auth={auth} {...props} />
                  )
              )} />
              <Route path="/callback" render={(props) => {
                handleAuthentication(props);
                return <Callback {...props} />
              }} />
              {/* <Route component={NotFound} /> */}
            </ Switch>
          </Layout>

        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
