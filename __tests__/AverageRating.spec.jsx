import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import AverageRating from '../client/src/Components/AverageRating';

describe('AverageRating Component', () => {
  test('Should render and match the snapshot', () => {
    const component = renderer.create(<AverageRating />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Shoud render a correct average rating number', () => {
    const wrapper = shallow(<AverageRating average={2.3} />);
    expect(wrapper.find('AverageRating__SpanNumericalRating').text()).toEqual('2.3');
  });

  test('Should render a correct total rating number', () => {
    const wrapper = shallow(<AverageRating ratings={399} />);
    expect(wrapper.find('AverageRating__SpanStarText').text()).toContain(399);
  });

  test('Should render 5 stars', () => {
    const wrapper = shallow(<AverageRating />);
    expect(wrapper.find('AverageRating__IStar')).toHaveLength(5);
  });

  test('Should render the correct number of gold stars given an average rating number', () => {
    const wrapper = shallow(<AverageRating average={3.2} />);
    let count = 0;
    wrapper.find('AverageRating__IStar').forEach((node) => {
      if (node.prop('starColor') === true) count += 1;
    });
    expect(count).toBe(3);
  });
});
