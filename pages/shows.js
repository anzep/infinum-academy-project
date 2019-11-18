import React from 'react';
import {observer} from 'mobx-react';
import { css } from '@emotion/core';
import fetch from 'isomorphic-fetch';
import {useAsync} from 'react-use';

import HeaderMain from '../components/HeaderMain';
import FooterMain from '../components/FooterMain';
import AppStore from '../store/AppStore';

/* CSS rules */

const container = css`
  height: 98vh; /* 100vh - body margin */
  display: flex;
  flex-direction: column;
  padding-left: 2em;
  padding-right: 2em;
`;

const form = css`
  flex: 1;

  display: column;
  padding: 5em;
  justify-content: center;
  align-items: center;

  background-color: #F9F7F9;
`;

const footer = css`
  margin-top: 10px;

`;

/* form with shows - flex/grid */

const formContainer = css`
  display: grid;
  grid-template-columns: repeat(5, 10fr);
  grid-gap: 15px;
  justify-content: center;
  align-items: center;
`;

const formImg = css`
  height: 200px;
  width: 140px;
`;

const formP = css`
  font-family: 'Verdana';
  font-size: 13px;
  color: #595959;
`;

const formH3 = css`
  font-family: 'Verdana';
`;

const loadingP = css`
  font-family: 'Verdana';
  font-size: 30px;
`;

/* End of CSS rules */

async function getShows() {
  const shows = await fetch('https://api.infinum.academy/api/shows')
    .then((response) => response.json())
    .then(({ data = [] }) => data);

  AppStore.shows.replace(shows);
}

function Shows() {
  const {loading} = useAsync(getShows);

  return (
    <div css={container}>
      <div>
        <HeaderMain />
      </div>
      <div css={form}>
        <h3 css={formH3}>All shows</h3>
        <div css={formContainer}>
          {loading && <p css={loadingP}>Shows are loading...</p>}
          {
            AppStore.shows.map(({ _id, title, imageUrl }) => (
              <div key={_id}>
                <img src={`https://api.infinum.academy/${imageUrl}`} alt='show covers' css={formImg} />
                <p css={formP}>{title}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div css={footer}>
        <FooterMain />
      </div>
    </div>
  );
}

export default observer(Shows);
