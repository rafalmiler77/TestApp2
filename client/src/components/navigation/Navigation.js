import React from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

const Navigation = props => {

  return (
    <div>
      <div>
        <Paper style={style}>
          <Menu>
            <Link to="/"><MenuItem primaryText="Home" /></Link>
            <Link to="/draft-testing"><MenuItem primaryText="draft-testing" /></Link>
          </Menu>
        </Paper>
        <Paper style={style}>
          <Menu>
            <Link to="/wpdata"><MenuItem primaryText="wpdata" /></Link>
            <Link to="/auth"><MenuItem primaryText="0auth" /></Link>
            <Link to="/renderProp"><MenuItem primaryText="renderProp" /></Link>
          </Menu>
        </Paper>
      </div>
    </div>
  );
}

export default Navigation;