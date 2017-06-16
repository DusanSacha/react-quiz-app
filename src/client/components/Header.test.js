import React from 'react';
import Header from './Header';
import renderer from 'react-test-renderer';

describe('Header renders correctly', () => {

  test('without content', () => {
    const tree = renderer.create(
        <Header />
    );
    expect(tree).toMatchSnapshot();
  });

  test('with header content', () => {
    const tree = renderer.create(
        <Header>React Quiz App</Header>
    );
    expect(tree).toMatchSnapshot();
  });

});