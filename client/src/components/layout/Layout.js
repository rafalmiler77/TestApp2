import React from 'react';
import Navigation from '../navigation/Navigation'
import './Layout.css';

const Layout = props => {

  return (
    <div>
      <header>
        <h3>My Testing Of Everything</h3>
      </header>
      <Navigation />
      {props.children}
    </div>
  );
}

export default Layout;