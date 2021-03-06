import React from 'react';
import { css } from '@emotion/core';
import {observer} from 'mobx-react';
import useForm from 'react-hook-form';
import {useRouter} from 'next/router';

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

const showHideButton = css`
  padding: 2px;
  border: none;
  background: none;
  border-bottom: 2px solid #FF7BA3;
`;
const showHideButtonImg = css`
  hight: 30px;
  width: 30px;
`;

const errorDiv = css`
  color: red;
  font-size: 12px;
  font-family: 'Verdana';
`;

/* End of CSS rules */

function RegisterForm({ onRegister }) {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [passwordVisibility, setPasswordVisibility] = React.useState(false);

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  function showHide(e) {
    e.preventDefault();

    setPasswordVisibility(!passwordVisibility);
  }

  const { errors, register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    router.push('/login');
    onRegister(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} css={mainDiv}>
      <p>My email address is</p>
      <input
        type="email"
        name="email"
        css={inputUser}
        ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          },
        })}
        onChange={onEmailChange}
      />
      {errors.email && <div css={errorDiv}>Invalid email address</div>}
      <p>and my password will be</p>
      <input
        type={passwordVisibility ? 'text' : 'password'}
        name="password"
        ref={register({
          required: true,
          minLength: 5,
        })}
        onChange={onPasswordChange}
        css={inputPassword}
      />
      <button onClick={showHide} css={showHideButton}>
        <img src='ic-akcije-show-password-red@3x.png' alt='show/hide' css={showHideButtonImg} />
      </button>
      {errors.password && <div css={errorDiv}>Password should be longer than 5 characters.</div>}
      <div css={rememberMe}>
        <input type="checkbox" name="remember" />
        <label htmlFor="checkbox">Remember me</label>
      </div>
      <input
        type="submit"
        css={buttonRemake}
        value="REGISTER"
      />
    </form>
  );
}


export default observer(RegisterForm);
