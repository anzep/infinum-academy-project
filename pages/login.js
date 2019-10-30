import { css } from '@emotion/core';

import LoginForm from '../components/LoginForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
`;

const footer = css`
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
  })
    .then((data) => {
      document.cookie = data.token;
      console.log(data.token);
      // alert(document.cookie);
    });
}


function Login() {

  return (
    <div css={container}>
      <div css={header}>
        <Header />
      </div>
      <div css={form}>
        <LoginForm onLogin={loginUser} />
      </div>
      <div css={footer}>
        <Footer />
      </div>
    </div>
  );
}
export default Login;
