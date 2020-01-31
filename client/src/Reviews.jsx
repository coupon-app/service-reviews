import React from 'react';
import styled from 'styled-components';

import AverageRating from './Components/AverageRating';
import VerifiedReviewsHeader from './Components/VerifiedReviewsHeader';
import ReviewsContainer from './Components/ReviewsContainer';

/* ------------------------  TESTING ------------------------- */

// Sample data to use while React isn't hooked-up to API
import sampleData from '../../database/sampledata/sample_data.json';

/* -------------------------  STYLES ------------------------- */

const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  line-height: 28.8px;
  margin: 10px 0 5px;
`;

const ContainerDiv = styled.div`
  font-family: Open Sans,OpenSans,system,-apple-system,BlinkMacSystemFont,Roboto,Arial,FreeSans,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
`;

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: sampleData, // TODO: Replace with data from fetch call (reviews with text only!)
      average: 2.3, // TODO: Replace with data from fetch call (reviews both with & without review text)
      ratings: 399, // TODO: Replace with data from fetch call (or calculate in React function)
    };
  }

  // TODO: write function to extract average for all ratings retrieved from server
  // TODO: write function to count number of ratings (reviews both with & without review text)
  // QUESTION: Could these functions be incorporated into the database query on the server side?
  //           Or would it just be easier to do it on the client side?

  /*
  // Data shape from server could look something like:
    {
      data: [ // reviews with textual data ONLY
        {
          ... review ...
        },
        {
          ... review
        }
      ],
      ratings: 399, // ratings count retrieved from server
      averageRating: 3.4, // average rating for all reviews for productId = [##]
    }

   */

  // TODO: Write componentDidMount() function that fetches data from /api/reviews/:productId
  // and sets state with returned data

  /* -------------------------  RENDER ------------------------- */

  // TODO: replace props.reviews with data retrieved from fetch call.

  render() {
    const { reviews, average, ratings } = this.state;
    return (
      <ContainerDiv>
        <Title>Customer Reviews</Title>
        {(reviews && reviews.length > 0)
          ? (
            <>
              <AverageRating average={average} ratings={ratings} />
              <VerifiedReviewsHeader />
              <ReviewsContainer reviews={reviews} />
            </>
          )
          : (
            <>
              <div>No reviews for this product yet</div>
            </>
          )}
      </ContainerDiv>
    );
  }
}
