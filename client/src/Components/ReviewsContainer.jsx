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

// This component may be able to be changed to a stateless component
// if it doesn't require it's own state in the future.

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
    const { reviews } = this.props;
    return (
      <DivReviewsContainer>
        <DivReviewsContainerTitle>Relevant Reviews</DivReviewsContainerTitle>
        {(reviews && reviews.length > 0) ? <ReviewCard review={reviews[0]} /> : <div>No reviews to display.</div>}
      </DivReviewsContainer>
    );
  }
}
