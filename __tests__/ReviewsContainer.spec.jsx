import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ReviewsContainer from '../client/src/Components/ReviewsContainer';

describe('ReviewsContainer Component', () => {
  const reviews = [{
    review_id: 409,
    date_created: 1486339200000,
    product_id: 78,
    customer: {
      customer_id: 'A1U3DENVSYZ5BQ',
      customer_name: {
        first_name: 'Myrtis',
        last_name: 'Jacobson',
      },
      top_reviewer: true,
      helpful_reviewer: true,
    },
    star_rating: 5,
  }];

  test('Should render and match the snapshot', () => {
    const component = renderer.create(<ReviewsContainer reviews={reviews} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should render a correct title', () => {
    const wrapper = shallow(<ReviewsContainer />);
    expect(wrapper.find('ReviewsContainer__DivReviewsContainerTitle').text()).toContain('Relevant Reviews');
  });

  test('Should render the correct number of reviews', () => {
    const wrapper = shallow(<ReviewsContainer reviews={reviews} />);
    expect(wrapper.find('ReviewCard')).toHaveLength(1);
  });

  test('Should render no reviews if none are passed in', () => {
    const wrapper = shallow(<ReviewsContainer reviews={[]} />);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').text()).toContain('No reviews to display.');
  });
});
