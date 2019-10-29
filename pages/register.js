import React from 'react';
import { css } from '@emotion/core';
import fetch from 'isomorphic-fetch';

import Header from '../components/header-logo';

// import registerNewUser from '../components/registerNewUser';
/*
function registerNewUser(email.value) {
  document.cookie = ""
}*/

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
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }
  
  function registerNewUser() {
    registerUser(email, password);
  }

  return (
    <div css={container}>
      <div>
        <Header />
      </div>
      <div css={form}>
        <div>
          <h1>My email addres is</h1>
          <input
            type="text"
            name="email"
            value={email}
            onChange={onEmailChange}
          />
          <h1>and my password will be</h1>
          <input
            type="text"
            name="password"
            value={password}
            onChange={onPasswordChange}
          />
          <div>
            <input type="checkbox" name="remember" />
            <label htmlFor="checkbox">Remember me</label>
          </div>
          <button onClick={registerNewUser}>Register</button>
        </div>
      </div>
    </div>
  );
}
export default Register;
