import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('renders without crashing', () => {
    it('renders correctly', () => {
      expect(shallow(<App />)).toMatchSnapshot();
    });
  });




