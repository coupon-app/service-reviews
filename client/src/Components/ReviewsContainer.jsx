import React from 'react';
import styled from 'styled-components';
import ReviewCard from './ReviewCard';

/* -------------------------  STYLES ------------------------- */

const DivReviewsContainer = styled.div`
  padding-top: 16px;
  width: 687px;
`;

const DivReviewsContainerTitle = styled.div`
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
`;

/* -------------------------  RENDER ------------------------- */

export default class ReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: '', // Replace this test state with any other required data the container has to store
    };
  }

  // TODO: Map each relevant review from props to an individual ReviewCard component
  // ONLY map reviews that include review text!! All others are just counted in the total ratings number.

  render() {
    return (
      <DivReviewsContainer>
        <DivReviewsContainerTitle>Relevant Reviews</DivReviewsContainerTitle>
        <ReviewCard review={this.props.reviews[409]} />
      </DivReviewsContainer>
    );
  }
}
