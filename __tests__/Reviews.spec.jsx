import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Reviews from '../client/src/Reviews';

describe('Reviews Component', () => {
  test('Should render and match the snapshot', () => {
    const component = renderer.create(<Reviews />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Reviews Component shoud include correct heading 3 title text', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.find('Reviews__Title').text()).toEqual('Customer Reviews');
  });

  test('Should contain a VerifiedReviewsHeader component', () => {
    const wrapper = shallow(<Reviews />);
  });
});
