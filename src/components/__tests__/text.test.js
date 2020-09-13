'use strict';

import 'react-native';
import React from 'react';
import Text from '../Text';
  
import renderer from 'react-test-renderer';

jest.setTimeout(15000);

test('renders correctly', () => {
  const tree = renderer.create(<Text size="sm" weight="bold" color="primary">hello</Text>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('check size', () => {
  const tree = renderer.create(<Text size="xxlg">hello</Text>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('check weight', () => {
  const tree = renderer.create(<Text weight="bold">hello</Text>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('check color', () => {
  const tree = renderer.create(<Text color="primary">hello</Text>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('check style', () => {
  const tree = renderer.create(<Text style={{ textAlign: 'center' }}>hello</Text>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('check onpress', () => {
  const tree = renderer.create(<Text onPress={() => console.log(123)}>hello</Text>).toJSON();
  expect(tree).toMatchSnapshot();
});