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

  test('Should include correct heading title text', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.find('Reviews__Title').text()).toContain('Customer Reviews');
  });

  test('Should contain a VerifiedReviewsHeader component', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.find('VerifiedReviewsHeader')).toHaveLength(1);
  });

  test('Should contain a ReviewsContainer component', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.find('ReviewsContainer')).toHaveLength(1);
  });

  test('Should notify the user if there are no reviews, and not render review components', () => {
    const wrapper = shallow(<Reviews />);
    wrapper.setState({
      reviews: null,
      average: null,
      ratings: null,
    });
    expect(wrapper.find('div').text()).toContain('No reviews for this product yet');
    expect(wrapper.find('ReviewsContainer')).toHaveLength(0);
    expect(wrapper.find('VerifiedReviewsHeader')).toHaveLength(0);
  });
});
