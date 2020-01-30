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
      reviews: sampleData, // TODO: Replace with data from fetch call
    };
  }

  /* -------------------------  RENDER ------------------------- */

  // TODO: replace props with data retrieved from fetch call.

  render() {
    return (
      <ContainerDiv>
        <div>
          <Title>Customer Reviews</Title>
        </div>
        <AverageRating average={2.3} ratings={235} />
        <VerifiedReviewsHeader />
        <ReviewsContainer reviews={this.state.reviews} />
      </ContainerDiv>
    );
  }
}
