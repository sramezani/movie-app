'use strict';

import 'react-native';
import React from 'react';
import Icon from '../Icon';
  
import renderer from 'react-test-renderer';

jest.setTimeout(15000);

test('renders correctly', () => {
  const tree = renderer.create(<Icon name="arrow-forward" size={30} color="#9a9" />).toJSON();
  expect(tree).toMatchSnapshot();
});
