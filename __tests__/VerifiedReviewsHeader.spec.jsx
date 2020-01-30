import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';

import VerifiedReviewsHeader from '../client/src/Components/VerifiedReviewsHeader';

describe('VerifiedReviewsHeader Component', () => {
  test('Should render and match the snapshot', () => {
    const component = renderer.create(<VerifiedReviewsHeader />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
