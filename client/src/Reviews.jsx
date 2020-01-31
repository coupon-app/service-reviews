import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
  max-width: 687px;
`;

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [], // TODO: Replace with data from fetch call (reviews with text only!)
      average: 0, // TODO: Replace with data from fetch call (reviews both with & without review text)
      ratings: 0, // TODO: Replace with data from fetch call (or calculate in React function)
    };
  }

  componentDidMount() {
    this.updateReviewsForProductId();
  }

  // Function that fetches data from /api/reviews/:productId
  // and sets state with returned data
  updateReviewsForProductId() {
    const { productId } = this.props;

    axios.get(`/api/reviews/${productId}`)
      .then((response) => response.data)
      .then((reviews) => {
        this.setState({
          reviews,
          ratings: reviews.length,
          average: (reviews.map((review) => review.star_rating).reduce((a, b) => a + b) / reviews.length),
        });
      });
  }

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
