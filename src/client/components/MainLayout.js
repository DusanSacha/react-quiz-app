import React from 'react';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div id="app">
        <header><h1>React Quiz Game</h1></header>
        { this.props.children }
      </div>
    );
  }
}

export default MainLayout;