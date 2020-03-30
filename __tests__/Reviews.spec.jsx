import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Reviews from '../client/src/Reviews';

describe('Reviews Component', () => {
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

  // React Router passes a 'match' object to props, and is required for Reviews to render correctly
  const match = {
    params: {
      productId: 99,
    },
  };

  test('Should render and match the snapshot', () => {
    const component = renderer.create(<Reviews match={match} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should include correct heading title text', () => {
    const wrapper = shallow(<Reviews match={match} />);
    expect(wrapper.find('Reviews__Title').text()).toContain('Customer Reviews');
  });

  // test('Should fetch reviews', () => {
  //   const res = { data: reviews };
  //   axios.get.mockImplementation(() => Promise.resolve(res));
  //   return Reviews.updateReviewsForProductId().then((data) => expect(data).toEqual(reviews));
  // });

  test('Should contain a VerifiedReviewsHeader component', () => {
    const wrapper = shallow(<Reviews match={match} />);
    wrapper.setState({
      reviews,
    });
    expect(wrapper.find('VerifiedReviewsHeader')).toHaveLength(1);
  });

  test('Should contain a ReviewsContainer component', () => {
    const wrapper = shallow(<Reviews match={match} />);
    wrapper.setState({
      reviews,
    });
    expect(wrapper.find('ReviewsContainer')).toHaveLength(1);
  });

  test('Should display a message if there are no reviews, and not render review components', () => {
    const wrapper = shallow(<Reviews match={match} />);
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
