import React from 'react';
import { css } from '@emotion/core';
import {observer} from 'mobx-react';

import Header from '../components/Header';
import RegisterForm from '../components/RegisterForm';
import ApiService from '../services/apiService';

/* CSS rules */


const container = css`
  height: 98vh; /* 100vh - body margin */
  display: flex;
  flex-direction: column;
`;

const header = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const form = css`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 44px; // to preserve the same space on the page, as on the login
`;

/* End of CSS rules */

function onRegister(data) {
  ApiService.post('users', data);
}

function Register() {
  return (
    <div css={container}>
      <div css={header}>
        <Header />
      </div>
      <div css={form}>
        <RegisterForm onRegister={onRegister} css={form} />
      </div>
    </div>
  );
}
export default observer(Register);
