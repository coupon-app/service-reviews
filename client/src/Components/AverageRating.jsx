import React from 'react';
import styled from 'styled-components';

/* -------------------------  STYLES ------------------------- */

const DivStarRatingsContainer = styled.div`
  margin: 5px 0 19px;
  box-sizing: border-box;
  inline-size: 150px;
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
  width: 80px;
`;

const UlStarRating = styled.ul`
  margin: 0 0 2px;
  list-style: none;
  padding: 0;
  font-size: 12px;
  float: left;
  height: 13.4px;
`;

const SpanStarText = styled.span`
  font-weight: 400;
  line-height: 18.2px;
  font-size: 14px;
  line-height: normal;
`;

const IStar = styled.i`
  font-size: 15px;
  font-style: normal;
  color: ${({ starColor }) => starColor ? "#ffc120" : "#e6e7e8;"};
  font-family: Material Icons;
`;

/* -------------------------  RENDER ------------------------- */

const AverageRating = ({ average, ratings }) => {

  // Generate colored stars based on passed in average
  const stars = [];
  let iconString = '';
  let starColor;
  let remaining = average;

  // For each star, loop through and generate a jsx element with a corresponding star color and shape
  for (let i = 0; i < 5; i += 1) {

    // Determine star shape (filled or filled half)
    iconString = (remaining >= 1 || (remaining > 0 && remaining.toFixed(1) % 1 >= 0.8))
      ? "star"
      : (remaining > 0 && remaining.toFixed(1) % 1 >= 0.3)
        ? "star_half"
        : "star";

    /*
    material-icons string references for stars:
      star: filled star
      star_border: outlined star (not used)
      star_half: outlined half-filled star
    */

    // Determine color of the star (grey or gold)
    starColor = remaining.toFixed(1) >= 0.3 ? true : null;

    // Push the generateted star to the stars array for rendering later
    stars.push(
      <IStar className="material-icons" key={i} starColor={starColor}>{iconString}</IStar>
    );

    // Reduce remaining variable before moving onto next star loop
    remaining = remaining - 1;
  }

  return (
    <DivStarRatingsContainer>
      <DivStarRatingsSubContainer>
        <SpanNumericalRating>
          {average.toFixed(1)}
        </SpanNumericalRating>
        <SpanStarRatingsWrapper>
          <UlStarRating>
            {stars}
          </UlStarRating>
          <SpanStarText>
            {Math.floor(ratings).toFixed(0)} rating{ratings > 1 ? "s" : null}
          </SpanStarText>
        </SpanStarRatingsWrapper>
      </DivStarRatingsSubContainer>
    </DivStarRatingsContainer>
  );
};

export default AverageRating;
