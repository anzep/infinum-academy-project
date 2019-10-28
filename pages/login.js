import { css } from '@emotion/core';
import Link from 'next/link';

import header from '../components/header-logo';
import login from '../components/login';


const container = css`
  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: 25% 100px auto;
  font-family: 'Verdana';
  font-size: 20px;
`;

const itemA = css`
  grid-column-start: 2;
  grid-column-end: five;
  grid-row-start: row1-start;
  grid-row-end: 3;
`;

/* inputUser is for input elements, only bottom border, correct color, use it for everything*/
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
  margin-bottom: 15px;
  color: #FF7BA3;
  font-size: 20px;
`;

const buttonRemake = css`
  margin-top: 30px;
  background-color: #FF7BA3;
  width: 150px;
  height: 50px;
  border: 0;
  outline: 0;
  color: white;
  border-radius: 10px;
  font-family: 'Verdana';
`;

function Login() {
  return (
    <div css={container}>
      {header()}
      <div css={itemA}>
        <p>My username is</p>
        <input type='text' name='username' css={inputUser} />
        <p>and my password is</p>
        <input type='text' name='password' css={inputPassword} />
        <div>
          <input type='checkbox' name='remember' />
          <label htmlFor='checkbox'>Remember me</label>
        </div>
        <button onClick={login} css={buttonRemake}>LOGIN</button>
      </div>
      <div>
        <p>Still don&apos;t have an account?</p>
        <Link href='/register'>
          <a>Register</a>
        </Link>
      </div>
    </div>
  );
}
export default Login;
