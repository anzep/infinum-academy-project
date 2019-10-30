import { css } from '@emotion/core';
import Link from 'next/link';

import LoginForm from '../components/LoginForm';
import Header from '../components/Header';

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

function loginUser(email, password) {
  fetch('https://api.infinum.academy/api/users/sessions', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      email, password,
    }),
  });
}


function Login() {

  return (
    <div css={container}>
      <div>
        <Header />
      </div>
      <div>
        <LoginForm onLogin={loginUser} />
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
