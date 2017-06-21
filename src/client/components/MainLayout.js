import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { className } = this.props;

    return(
      <div className={className} id="app">
        <Header>React Quiz Game Test</Header>
        <div id="content">
          { this.props.children }
        </div>
        <Footer>Made with ♥ by @sacha_dusan</Footer>
      </div>
    );
  }
}

export default styled(MainLayout)`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;