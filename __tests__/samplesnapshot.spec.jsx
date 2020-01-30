/* SAMPLE TEST FOR JEST CONFIG */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Reviews from '../client/src/Reviews';

describe('Reviews Component', () => {
  test('[Sample] snapshot renders', () => {
    const component = renderer.create(<Reviews />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('[Sample] state should include correct heading 2 text', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.find('h2').text()).toEqual('Customer Reviews');
  });
});
