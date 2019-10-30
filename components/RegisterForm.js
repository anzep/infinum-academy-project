import React from 'react';
import { css } from '@emotion/core';
import ButtonShowHide from './ButtonShowHide';

/* CSS RULES */

/* inputUser is for input elements, only bottom border, correct color, use it for everything*/
const mainDiv = css`
  font-family: 'Verdana';
  font-size: 25px;
`;

const inputUser = css`
  border: 0;
  outline: 0;
  border-bottom: 2px solid #FF7BA3;
  font-family: 'Verdana';
  color: #FF7BA3;
  font-size: 20px;
`;

const inputPassword = css`
  border: 0;
  outline: 0;
  border-bottom: 2px solid #FF7BA3;
  font-family: 'Verdana';
  margin-bottom: 25px;
  color: #FF7BA3;
  font-size: 20px;
  width: 234px;
`;

const buttonRemake = css`
  margin-top: 30px;
  background-color: #FF7BA3;
  width: 150px;
  height: 50px;
  border: 0;
  outline: 0;
  color: white;
  border-radius: 30px;
  font-family: 'Verdana';
  font-size: 14px;
  letter-spacing: 3px;
`;

const rememberMe = css`
  font-family: 'Verdana';
  font-size: 15px;
`;

/* END OF CSS RULES */

function RegisterForm({ onRegister }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  function onRegisterClick() {
    onRegister(email, password);
  }

  return (
    <div css={mainDiv}>
      <p>My email address is</p>
      <input
        type="email"
        name="email"
        value={email}
        onChange={onEmailChange}
        css={inputUser}
      />
      <p>and my password will be</p>
      <form>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onPasswordChange}
          css={inputPassword}
          id='pwd'
        />
        <ButtonShowHide />
      </form>
      <div css={rememberMe}>
        <input type="checkbox" name="remember" />
        <label htmlFor="checkbox">Remember me</label>
      </div>
      <button onClick={onRegisterClick} css={buttonRemake}>REGISTER</button>
    </div>
  );
}

export default RegisterForm;
