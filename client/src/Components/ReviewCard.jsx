import React from 'react';
import styled from 'styled-components';
import ReviewCardMiniProfile from './ReviewCardMiniProfile';

/* -------------------------  STYLES ------------------------- */

const DivReviewCardContainer = styled.div`
  font-size: 14px;
  margin: 12px 0 24px;
`;

const DivReviewCardRatingsDate = styled.div`
  margin: 8px 0;
  display: flex;
  align-items: center;
`;

const DivReviewCardText = styled.div`
  padding-right: 12px;
  width: 100%;
`;

const DivReviewCardHelpfulEndorsement = styled.div`
  margin: 17px 10px 8px 0;
`;

const AReviewCardHelpfulEndorsement = styled.a`
  color: #707174;
  fill: #a5a8ab;
  padding: 3px 5px;
  border: 1px solid #a5a8ab;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  text-decoration: none;
`;

const SvgReviewCardHelpfulEndorsementIcon = styled.svg`
  height: 12px;
  width: 12px;
  margin-right: 3px;
  overflow: hidden;
`;

const IStar = styled.i`
  font-size: 15px;
  font-style: normal;
  color: ${({ starColor }) => (starColor ? '#ffc120' : '#e6e7e8')};
  font-family: Material Icons;
`;


/* -------------------------  RENDER ------------------------- */

const ReviewCard = ({ review }) => {
  // Any processing of review data goes here
  const firstName = review.customer.customer_name.first_name;
  const reviewText = review.review_text;
  const reviewStarRating = review.star_rating;
  const reviewImages = review.picture; // TODO: [STRETCH] Render images in component
  const ratings = review.customer.num_ratings || undefined;
  const reviews = review.customer.num_reviews || undefined;
  const topReviewer = review.customer.top_reviewer;
  const helpfulReviewer = review.customer.helpful_reviewer;
  const helpfulCount = review.helpful_count; // TODO: [STRETCH] render helpful count on 'helpful' button

  // Generate readable string from javascript date object
  let dateCreated = new Date(review.date_created);
  dateCreated = `${dateCreated.toLocaleDateString('en-US', { month: 'long' })} ${dateCreated.toLocaleDateString('en-US', { day: 'numeric' })}, ${dateCreated.toLocaleDateString('en-US', { year: 'numeric' })}`;

  // Generate colored stars based on review star rating
  const stars = [];
  let starColor;

  // For each star generate a jsx element with a corresponding star color and shape
  for (let i = 0; i < 5; i += 1) {
    starColor = reviewStarRating - i > 0 ? true : null; // Determine color of the star (grey or gold)
    stars.push( // Push the generateted star to the stars array for rendering later
      <IStar className="material-icons" key={i} starColor={starColor}>star</IStar>,
    );
  }

  return (
    <DivReviewCardContainer>
      <ReviewCardMiniProfile
        firstName={firstName}
        ratings={ratings}
        reviews={reviews}
        topReviewer={topReviewer}
        helpfulReviewer={helpfulReviewer}
        reviewImages={reviewImages}
      />
      <DivReviewCardRatingsDate>
        <span>{stars}</span>
        <span>· {dateCreated}</span>
      </DivReviewCardRatingsDate>
      <DivReviewCardText>
        {reviewText}
      </DivReviewCardText>
      <DivReviewCardHelpfulEndorsement>
        <AReviewCardHelpfulEndorsement>
          <SvgReviewCardHelpfulEndorsementIcon viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 12H0V5h2v7zm10-4.8c0 .526-.455.96-1.029.96h-.089c.377.154.669.516.666.94-.004.407-.32.776-.577.942v.002c0 .006-.226.122-.826.127a.944.944 0 0 1 .583.869c0 .526-.47.96-1.042.96H3V5.28l1.8-2.64V.96C4.8.435 5.256 0 5.829 0c.928 0 1.216.793 1.216 2.117 0 1.062-.188 2.202-.188 2.203h4.114c.574 0 1.029.434 1.029.96s-.455.96-1.029.96c.574 0 1.029.434 1.029.96z" /></SvgReviewCardHelpfulEndorsementIcon>
          Helpful
        </AReviewCardHelpfulEndorsement>
      </DivReviewCardHelpfulEndorsement>
    </DivReviewCardContainer>
  );
};

export default ReviewCard;
