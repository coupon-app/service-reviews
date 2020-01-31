import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ReviewCardMiniProfile from '../client/src/Components/ReviewCardMiniProfile';

describe('ReviewCardMiniProfile Component', () => {
  const testProps = {
    firstName: 'Cade',
    ratings: 18,
    reviews: 4,
    topReviewer: true,
    helpfulReviewer: true,
    reviewImages: {
      picture_url: 'https://images-na.ssl-images-amazon.com/images/I/71WmNNc3NvL._SY88.jpg',
      picture_upload_date: 1523664000,
    },
  };
  test('Should render and match the snapshot', () => {
    const component = renderer.create(<ReviewCardMiniProfile />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should render all components if props are passed in', () => {
    const wrapper = shallow(<ReviewCardMiniProfile />);
    wrapper.setProps(testProps);
    expect(wrapper.find('ReviewCardMiniProfile__SpanUserReviewCount')).toHaveLength(3);
    expect(wrapper.find('ReviewerBadge')).toHaveLength(2);
    expect(wrapper.find('ReviewCardMiniProfile__DivUserIconCircle')).toHaveLength(1);
  });
});
