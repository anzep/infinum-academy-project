import { css } from '@emotion/core';
// import Link from 'next/link';
import { observer } from 'mobx-react';
import React from 'react';
import useForm from 'react-hook-form';

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

/* End of CSS rules */

function LoginForm({ onLogin }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [passwordVisibility, setPasswordVisibility] = React.useState(false);

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }
  
  function onLoginClick() {
    onLogin(email, password);
  }

  function showHide(e) {
    e.preventDefault();

    setPasswordVisibility(!passwordVisibility);
  }

  const { errors, register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log('logging you in...', data);
  }

  //   return (
  //     <div css={mainDiv}>
  //       <p>My email address is</p>
  //       <input
  //         type="email"
  //         name="email"
  //         value={email}
  //         onChange={onEmailChange}
  //         css={inputUser}
  //       />
  //       <p>and my password is</p>
  //       <form>
  //         <input
  //           type={passwordVisibility ? 'text' : 'password'}
  //           name="password"
  //           value={password}
  //           onChange={onPasswordChange}
  //           css={inputPassword}
  //         />
  //         <button onClick={showHide} css={showHideButton}>
  //           <img src='ic-akcije-show-password-red@3x.png' alt='show/hide' css={showHideButtonImg} />
  //         </button>
  //       </form>
  //       <div css={rememberMe}>
  //         <input type="checkbox" name="remember" />
  //         <label htmlFor="checkbox">Remember me</label>
  //       </div>
  //       <Link href='/shows'>
  //         <button onClick={onLoginClick} css={buttonRemake}>LOGIN</button>
  //       </Link>
  //     </div>
  //   );
  // }

  // export default observer(LoginForm);



  return (
    <form onSubmit={handleSubmit(onSubmit)} css={mainDiv}>
      {/* <input
        type="text"
        name="name"
        ref={register({
          required: 'Name is required.',
        })}
      />
      {errors.name && <span>{errors.name.message}</span>} */}
      <p>My email address is</p>
      <input
        type="email"
        name="email"
        css={inputUser}
        ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'invalid email address',
          },
        })}
        onChange={onEmailChange}
      />
      {errors.email && <span>{errors.email.message}</span>}
      <p>and my password is</p>
      <input
        type={passwordVisibility ? 'text' : 'password'}
        name="password"
        ref={register({})}
        onChange={onPasswordChange}
        css={inputPassword}
      />
      <button onClick={showHide} css={showHideButton}>
        <img src='ic-akcije-show-password-red@3x.png' alt='show/hide' css={showHideButtonImg} />
      </button>
      <div css={rememberMe}>
        <input type="checkbox" name="remember" />
        <label htmlFor="checkbox">Remember me</label>
      </div>
      <input
        type="submit"
        onClick={onLoginClick}
        css={buttonRemake}
        value="LOGIN"
      />
    </form>
  );
}
export default observer(LoginForm);
