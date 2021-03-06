import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
// import queryString from 'query-string';

import AverageRating from './Components/AverageRating';
import VerifiedReviewsHeader from './Components/VerifiedReviewsHeader';
import ReviewsContainer from './Components/ReviewsContainer';

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
      reviews: [],
      average: 0,
      ratings: 0,
      // page: queryString.parse(this.props.location.search).page || 0, // TODO: Implement pagination in ReviewsContainer
      // limit: queryString.parse(this.props.location.search).limit || 15, // TODO: Implement limit selector in ReviewsContainer
    };
  }

  componentDidMount() {
    this.updateReviewsForProductId();
  }

  // Function that fetches data from /api/reviews/:productId
  // and sets state with returned data

  updateReviewsForProductId() {
    console.log(this.props);
    const productId = this.props.match.params.productId || Math.ceil(Math.random() * 100); // Default productId (if none found in the route params)
    const { limit, page } = this.state; // get current page number and page limit from props

    axios.get(`/api/reviews/${productId}?page=${page}&limit=${limit}`)
      .then((response) => response.data)
      .then((queryResults) => {
        this.setState({
          reviews: queryResults.resultsSubset,
          ratings: queryResults.count,
          average: queryResults.average, // (queryResults.resultsSubset.map((review) => review.star_rating).reduce((a, b) => a + b) / queryResults.resultsSubset.length),
        });
      })
      .catch((err) => console.log(err));
  }

  /* -------------------------  RENDER ------------------------- */

  render() {
    const {
      reviews, average, ratings, page, limit,
    } = this.state;

    return (
      <ContainerDiv>
        <Title>Customer Reviews</Title>
        {(reviews && reviews.length > 0)
          ? (
            <>
              <AverageRating average={average} ratings={ratings} />
              <VerifiedReviewsHeader />
              <ReviewsContainer reviews={reviews} page={page} limit={limit} />
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
