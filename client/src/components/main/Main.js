import React from 'react';
import Navigation from '../navigation/Navigation'
import './Main.css';

const Main = props => {

  return (
    <div>
      <header>
      </header>
      <Navigation />
      {props.children}
    </div>
  );
}

export default Main;