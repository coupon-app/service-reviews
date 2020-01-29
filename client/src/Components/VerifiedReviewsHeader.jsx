/* eslint-disable max-len */

import React from 'react';
import styled from 'styled-components';

/* -------------------------  STYLES ------------------------- */

const DivVerifiedContainer = styled.div`
  border-radius: 8px;
  padding: 15px 16px;
  align-items: center;
  background-color: #f6f7f8;
  display: flex;
`;

const SvgGreenCheck = styled.svg`
  height: 43px;
  margin-right: 16px;
  width: 45px;
  overflow: hidden;
`;

const DivVerifiedBold = styled.div`
  font-weight: 700;
  font-size: 14px;
`;

const SpanVerifiedGrey = styled.span`
  color: #707174;
  font-size: 14px;
  font-weight: 400;
`;

/* -------------------------  RENDER ------------------------- */

const VerifiedReviewsHeader = () => (
  <DivVerifiedContainer>
    <SvgGreenCheck>
      <svg viewBox="0 0 45 43" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path d="M45 21.25c0 2.257-2.895 4.035-3.565 6.072-.694 2.11.564 5.224-.731 6.98-1.31 1.776-4.707 1.55-6.505 2.841-1.78 1.279-2.606 4.545-4.744 5.23-2.064.661-4.668-1.48-6.955-1.48s-4.89 2.141-6.955 1.48c-2.138-.685-2.964-3.951-4.744-5.23-1.798-1.291-5.196-1.065-6.505-2.84-1.295-1.757-.037-4.87-.731-6.98C2.895 25.284 0 23.506 0 21.25c0-2.257 2.895-4.035 3.565-6.072.694-2.11-.564-5.224.731-6.98 1.31-1.776 4.707-1.55 6.505-2.841 1.78-1.279 2.606-4.545 4.744-5.23 2.064-.661 4.668 1.48 6.955 1.48s4.89-2.141 6.955-1.48c2.138.685 2.964 3.951 4.744 5.23 1.798 1.291 5.196 1.065 6.505 2.84 1.295 1.757.037 4.87.731 6.98.67 2.038 3.565 3.816 3.565 6.073" fill="#a9d18c" />
          <path d="M18.346 30.29a1.417 1.417 0 0 1-1.08-.412l-4.848-5.575a1.432 1.432 0 0 1 0-2.022 1.424 1.424 0 0 1 2.017 0l3.976 4.571L30.816 14.42a1.424 1.424 0 0 1 2.016 0 1.433 1.433 0 0 1 0 2.022L19.426 29.878a1.413 1.413 0 0 1-1.08.412z" fill="#348700" />
        </g>
      </svg>
    </SvgGreenCheck>
    <div>
      <DivVerifiedBold>100% Verified Reviews</DivVerifiedBold>
      <SpanVerifiedGrey>All reviews are from people who have redeemed deals with this merchant.</SpanVerifiedGrey>
    </div>
  </DivVerifiedContainer>
);

export default VerifiedReviewsHeader;
