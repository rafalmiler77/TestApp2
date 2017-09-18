import React from 'react';
import Navigation from '../navigation/Navigation'
import './Layout.css';

const Layout = props => {

  return (
    <div id="main-container">
      <header>
        <h3>My Testing Of Everything</h3>
      </header>
      <Navigation />
      <div id="children-container">
        {props.children}
      </div>
    </div>
  );
}

export default Layout;