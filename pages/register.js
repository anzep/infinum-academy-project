import { css } from '@emotion/core';

import Header from '../components/header-logo';

// import registerNewUser from '../components/registerNewUser';
/*
function registerNewUser(email.value) {
  document.cookie = ""
}*/

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
  return (
    <div css={container}>
      <div>
        <Header />
      </div>
      <div css={form}>
        <div>
          <h1>My email addres is</h1>
          <input type='text' name='email' />
          <h1>and my password will be</h1>
          <input type='text' name='password' />
          <div>
            <input type='checkbox' name='remember' />
            <label htmlFor='checkbox'>Remember me</label>
          </div>
        </div>
        {/* <button onClick={registerNewUser}>Register</button> */}
      </div>
    </div>
  );
}
export default Register;
