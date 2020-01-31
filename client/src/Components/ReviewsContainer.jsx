import React from 'react';
import styled from 'styled-components';
import ReviewCard from './ReviewCard';

/* -------------------------  STYLES ------------------------- */

const DivReviewsContainer = styled.div`
  padding-top: 16px;
`;

const DivReviewsContainerTitle = styled.div`
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
`;

/* -------------------------  RENDER ------------------------- */

// This component may be able to be changed to a stateless component
// if it doesn't require it's own state in the future.

const ReviewsContainer = ({ reviews, page, limit }) => (
  <DivReviewsContainer>
    <DivReviewsContainerTitle>Relevant Reviews</DivReviewsContainerTitle>
    {
      (reviews && reviews.length > 0)
        ? reviews
          .filter((review) => review.review_text)
          .map((review) => <ReviewCard key={review.review_id} review={review} />)
        : <div>No reviews to display.</div>
    }
  </DivReviewsContainer>
);

export default ReviewsContainer;
