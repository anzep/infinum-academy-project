import { css } from '@emotion/core';

import header from '../components/header-logo';
import login from '../components/login';


const container = css`
  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: 25% 100px auto;
`;

const itemA = css`
  grid-column-start: 2;
  grid-column-end: five;
  grid-row-start: row1-start;
  grid-row-end: 3;
`;

const inputUser = css`
  border: 0;
  outline: 0;
  border-bottom: 2px solid #FF7BA3;
  font: bold italic large serif;
`;

function Login() {
  return (
    <div css={container}>
      {header()}
      <div css={itemA}>
        <h1>My username is</h1>
        <input type='text' name='username' css={inputUser} />
        <h1>and my password is</h1>
        <input type='text' name='password' />
        <div>
          <input type='checkbox' name='remember' />
          <label htmlFor='checkbox'>Remember me</label>
        </div>
        <button onClick={login}>Log in</button>
      </div>
      <div>
        footer
      </div>
    </div>
  );
}
export default Login;
