import React from 'react';

import AverageRating from './Components/AverageRating';
import VerifiedReviewsHeader from './Components/VerifiedReviewsHeader';
import ReviewCard from './Components/ReviewCard';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  render() {
    return (
      <div>
        <div>
          <h2>Customer Reviews</h2>
        </div>
        <AverageRating average={'/* TODO */'} ratings={'/* TODO */'} />
        <VerifiedReviewsHeader />
        <ReviewCard reviews={this.state.reviews} />
      </div>
    );
  }
}
