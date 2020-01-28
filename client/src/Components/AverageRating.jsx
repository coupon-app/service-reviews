import React from 'react';
import styled from 'styled-components';

/* -------------------------  STYLES ------------------------- */

const DivStarRatingsContainer = styled.div`
  margin: 5px 0 19px;
  box-sizing: border-box;
  inline-size: 128.583px;
`;

const DivStarRatingsSubContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

const SpanNumericalRating = styled.span`
  font-size: 2.2rem;
  font-weight: 600;
  line-height: 1;
`;

const SpanStarRatingsWrapper = styled.span`
  flex-direction: column;
  margin: 2px 0 0 5px;
  width: 75px;
`;

const UlStarRating = styled.ul`
  margin: 0 0 2px;
  list-style: none;
  padding: 0;
  font-size: 12px;
  float: left;
  height: 13.4px;
  width: 75px;
`;

const SpanStarText = styled.span`
  font-weight: 400;
  line-height: 18.2px;
  font-size: 14px;
`;

const LiStar = styled.li`
  padding: 0;
  position: relative;
  line-height: 1;
  margin: 0 2px 0 0;
  float: left;
`;

const SpanStar = styled.span`
  font-family: Groupon;
  content: '\E011';
  color: #ffc120;
  position: absolute;
  left: 0;
  width: 12px;
  height: 12px;
`;

const IStar = styled.i`
  font-size: 15px;
  color: #ffc120;
`;

/*

Need to dynamically handle generation of stars based on given average

material-icons icon references:

star: filled star
star_border: outlined star
star_half: outlined half-filled star

*/

/* -------------------------  RENDER ------------------------- */

const AverageRating = ({ average, ratings }) => (
  <DivStarRatingsContainer>
    <DivStarRatingsSubContainer>
      <SpanNumericalRating>
        {average}
      </SpanNumericalRating>
      <SpanStarRatingsWrapper>
        <UlStarRating>
          <IStar className="material-icons">star</IStar>
          <IStar className="material-icons">star</IStar>
          <IStar className="material-icons">star</IStar>
          <IStar className="material-icons">star</IStar>
          <IStar className="material-icons">star</IStar>
        </UlStarRating>
        <SpanStarText>
          {ratings} ratings
        </SpanStarText>
      </SpanStarRatingsWrapper>
    </DivStarRatingsSubContainer>
  </DivStarRatingsContainer>
);

export default AverageRating;
