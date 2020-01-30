import React from 'react';
import styled from 'styled-components';
import ReviewerBadge from './ReviewerBadge';

/* -------------------------  STYLES ------------------------- */

const DivReviewCardMiniProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DivUserIconContainer = styled.div`
  margin-right: 12px;
  padding: 0;
`;

const DivUserIconCircle = styled.div`
  background-color: #e6e7e8;
  border-radius: 50%;
  color: #333;
  display: block;
  font-weight: 700;
  font-size: 14px;
  height: 42px;
  line-height: 42px;
  text-align: center;
  width: 42px;
`;

const DivUserTextContainer = styled.div`
  margin: 3px 0 4px;
  font-size: 14px;
`;

const SpanUserName = styled.span`
  cursor: pointer;
  font-weight: 700;
`;

const DivUserStats = styled.div`
  color: #707174;
`;

const SpanUserReviewCount = styled.span`
  margin-right: 7px;
`;

const SvgIcon = styled.svg`
  height: 12px;
  width: 12px;
  margin-right: 4px;
`;

/* -------------------------  RENDER ------------------------- */

const ReviewCardMiniProfile = ({ firstName, ratings, reviews, topReviewer, helpfulReviewer, reviewImages }) => {
  // Any processing of review data goes here
  const userFirstNameInitial = firstName.charAt(0);

  // generate user stats if props for ratings and reviews are 'truthy' (i.e. greater than 0)
  const userReviewsRatings = [];

  if (ratings) {
    userReviewsRatings.push(
      <SpanUserReviewCount key="ratings">
        <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path fill="#A5A8AB" fillRule="nonzero" d="M3.076 11.774c-.692.465-1.09.19-.886-.618l.895-3.562-2.7-2.31c-.631-.54-.47-1.017.364-1.067L4.2 4.01 5.473.585c.29-.78.761-.78 1.052 0L7.802 4.01l3.449.207c.832.05.997.527.364 1.068l-2.7 2.31.895 3.561c.202.806-.192 1.084-.887.618L6 9.809l-2.924 1.965z" /></SvgIcon>
        {ratings} rating{ratings > 1 ? 's' : null}
      </SpanUserReviewCount>,
    );
  }

  if (reviews) {
    userReviewsRatings.push(
      <SpanUserReviewCount key="reviews">
        <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 10"><path fill="#A5A8AB" fillRule="evenodd" d="M5 8l-2 2V7.874A4.002 4.002 0 0 1 4 0h4a4 4 0 1 1 0 8H5z" /></SvgIcon>
        {reviews} review{reviews > 1 ? 's' : null}
      </SpanUserReviewCount>,
    );
  }

  if (reviewImages) {
    userReviewsRatings.push(
      <SpanUserReviewCount key="reviewImages">
        <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 10"><path fill="#A5A8AB" fillRule="evenodd" d="M11.344 1.6c.414 0 .656.258.656.7v6.8c0 .442-.242.9-.656.9H.844C.43 10 0 9.542 0 9.1V2.3c0-.442.43-.7.844-.7h1.94L4.063.234A.727.727 0 0 1 4.594 0h3c.199 0 .39.084.53.234L9.404 1.6h1.94zM6 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" /></SvgIcon>
        1 photo
      </SpanUserReviewCount>,
    );
  }

  // Generate badges for user (if any)
  const reviewerBadges = [];
  Object.entries({ topReviewer, helpfulReviewer }).forEach(([key, value]) => {
    if (value) reviewerBadges.push(<ReviewerBadge key={key} badge={key} />);
  });

  return (
    <DivReviewCardMiniProfileContainer>
      <DivUserIconContainer>
        <DivUserIconCircle>
          {userFirstNameInitial}
        </DivUserIconCircle>
      </DivUserIconContainer>
      <DivUserTextContainer>
        <SpanUserName>
          {firstName}
        </SpanUserName>
        <span> · {reviewerBadges}</span>
        <DivUserStats>
          {userReviewsRatings}
        </DivUserStats>
      </DivUserTextContainer>
    </DivReviewCardMiniProfileContainer>
  );
};

export default ReviewCardMiniProfile;