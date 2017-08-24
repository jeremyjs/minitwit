import React from 'react';
import Hello from '../../components/Hello'
import renderer from 'react-test-renderer';

test('Hello renders with default name', () => {
  const component = renderer.create(
    <Hello />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Hello renders with name', () => {
  const component = renderer.create(
    <Hello name="Bob"/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
