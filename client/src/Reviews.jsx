import React from 'react';

import AverageRating from './Components/AverageRating';
import VerifiedReviewsHeader from './Components/VerifiedReviewsHeader';
import ReviewCard from './Components/ReviewCard';

class Reviews extends React.Component {
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
        <div>
          <AverageRating average={'/* TODO */'} ratings={'/* TODO */'} />
        </div>
        <div>
          <VerifiedReviewsHeader />
        </div>
        <div>
          <ReviewCard reviews={this.state.reviews} />
        </div>
      </div>
    );
  }
}

export default Reviews;
