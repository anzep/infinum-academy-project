import React from 'react';
import {observer} from 'mobx-react';
import { css } from '@emotion/core';
import fetch from 'isomorphic-fetch';
import {useAsync} from 'react-use';

import HeaderMain from '../components/HeaderMain';
import FooterMain from '../components/FooterMain';
import appStore from '../store/AppStore';

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
  margin-top: 10px;

`;

/* END OF CSS RULES */

async function getShows() {
  const shows = await fetch('https://api.infinum.academy/api/shows')
    .then((response) => response.json())
    .then(({ data = [] }) => data);

  appStore.shows.replace(shows);
}


function Shows() {
  const {loading} = useAsync(getShows);

  return (
    <div css={container}>
      <div>
        <HeaderMain />
      </div>
      <div css={form}>
        <div>
          {loading && <h1>Shows are loading...</h1>}
          {
            appStore.shows.map(({ _id, title, imageUrl }) => (
              <div key={_id}>
                <img src={`https://api.infinum.academy/${imageUrl}`} alt='show covers' />
                <h1>{title}</h1>
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
