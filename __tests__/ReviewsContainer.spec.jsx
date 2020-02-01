import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ReviewsContainer from '../client/src/Components/ReviewsContainer';

describe('ReviewsContainer Component', () => {
  const reviews = [{
    review_id: 14,
    date_created: 1521331200000,
    product_id: 1,
    customer: {
      customer_id: 'AEGP5NUG8YFS0',
      customer_name: {
        first_name: 'Frieda',
        last_name: 'Yundt',
      },
      top_reviewer: true,
      helpful_reviewer: false,
    },
    star_rating: 5,
    review_text: 'great',
    helpful_count: 2,
  }];

  const reviewsNoText = [{
    review_id: 15,
    date_created: 1521331200000,
    product_id: 1,
    customer: {
      customer_id: 'A3BNRL2SCE6CGU',
      customer_name: {
        first_name: 'Lamar',
        last_name: 'Rice',
      },
      top_reviewer: true,
      helpful_reviewer: false,
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

  test('Should render reviews that include review text', () => {
    const wrapper = shallow(<ReviewsContainer reviews={reviews} />);
    expect(wrapper.find('ReviewCard')).toHaveLength(1);
  });

  test('Should not render reviews that exclude review text', () => {
    const wrapper = shallow(<ReviewsContainer reviews={reviewsNoText} />);
    expect(wrapper.find('ReviewCard')).toHaveLength(0);
  });

  test('Should render no reviews if none are passed in', () => {
    const wrapper = shallow(<ReviewsContainer reviews={[]} />);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').text()).toContain('No reviews to display.');
  });
});
