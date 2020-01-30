import React from 'react';
import styled from 'styled-components';


/* -------------------------  STYLES ------------------------- */

const SpanReviewerBadge = styled.span`
    border-radius: 4px;
    display: inline;
    font-size: 10px;
    font-weight: 700;
    line-height: 2;
    margin-right: 4px;
    padding: 3px 4px;
    cursor: pointer;
    color: #fff;
    background: rgba(102,80,215,.9);
`;

/* -------------------------  RENDER ------------------------- */

// Create object to map booleans to string values
const badgeStrings = {
  helpfulReviewer: 'MOST HELPFUL',
  topReviewer: 'TOP REVIEWER',
};

const ReviewerBadge = ({ badge }) => (
  <SpanReviewerBadge>{badgeStrings[badge]}</SpanReviewerBadge>
);

export default ReviewerBadge;
