import React from 'react';
import Header from './Header';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div id="app">
        <Header>React Quiz Game</Header>
        { this.props.children }
      </div>
    );
  }
}

export default MainLayout;