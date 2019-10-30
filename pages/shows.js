import React from 'react';
import { css } from '@emotion/core';
import HeaderMain from '../components/HeaderMain';
import FooterMain from '../components/FooterMain';

const container = css`
  height: 98vh; /* 100vh - body margin */
  display: flex;
  flex-direction: column;
  padding-left: 2em;
  padding-right: 2em;
`;

const form = css`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-color: #F9F7F9;

`;

const footer = css`
  margin-top: 20px;

`;

/* END OF CSS RULES */

function Shows() {

  return (
    <div css={container}>
      <div>
        <HeaderMain />
      </div>
      <div css={form}>
        form
      </div>
      <div css={footer}>
        <FooterMain />
      </div>
    </div>
  );
}

export default Shows;
