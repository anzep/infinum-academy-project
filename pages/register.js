import React from 'react';
import { css } from '@emotion/core';
import fetch from 'isomorphic-fetch';

import Header from '../components/Header';
import RegisterForm from '../components/RegisterForm';

function registerUser(email, password) {
  fetch('https://api.infinum.academy/api/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      email, password,
    }),
  });
}

const container = css`
  height: 98vh; /* 100vh - body margin */
  display: flex;
  flex-direction: column;
`;

const form = css`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function Register() {
  function onRegister(email, password) {
    console.log(email, password);
  }
  return (

    <div css={container}>
      <div>
        <Header />
      </div>
      <div>
        <RegisterForm onRegister={registerUser} />
      </div>
    </div>
  );
}
export default Register;
