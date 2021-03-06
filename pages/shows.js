import React from 'react';
import {observer} from 'mobx-react';
import { css } from '@emotion/core';
import {useAsync} from 'react-use';
import Link from 'next/link';

import HeaderMain from '../components/HeaderMain';
import FooterMain from '../components/FooterMain';
import AppStore from '../store/AppStore';
import apiService from '../services/apiService';

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
  filter: grayscale(100%);
  :hover {
    filter: grayscale(0%);
  }
`;

const formP = css`
  font-family: 'Verdana';
  font-size: 13px;
  color: #595959;
  cursor: pointer;
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
  const shows = await apiService.get('shows')
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
                <div>
                  <Link href={`/episodes?id=${_id}`}>
                    <a css={formP}>{title}</a>
                  </Link>
                </div>
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
