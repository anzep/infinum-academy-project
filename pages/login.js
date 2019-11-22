import { css } from '@emotion/core';
import {observer} from 'mobx-react';

import LoginForm from '../components/LoginForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
`;

const footer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* End of CSS rules */

function onLogin(data) {
  ApiService.post('users/sessions', data)
    .then((response) => {
      if (response.data) {
        document.cookie = response.data.token;
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function Login() {

  return (
    <div css={container}>
      <div css={header}>
        <Header />
      </div>
      <div css={form}>
        <LoginForm onLogin={onLogin} />
      </div>
      <div css={footer}>
        <Footer />
      </div>
    </div>
  );
}
export default observer(Login);
