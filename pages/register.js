import { css } from '@emotion/core';

import header from '../components/header-logo';

// import registerNewUser from '../components/registerNewUser';
/*
function registerNewUser(email.value) {
  document.cookie = ""
}*/

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

function Register() {
  return (
    <div css={container}>
      <div>
        {header()}
      </div>
      <div>
        <h1>My email addres is</h1>
        <input type='text' name='email' />
        <h1>and my password will be</h1>
        <input type='text' name='password' />
        <div>
          <input type='checkbox' name='remember' />
          <label htmlFor='checkbox'>Remember me</label>
        </div>
        {/* <button onClick={registerNewUser}>Register</button> */}
      </div>
      <div>
        footer
      </div>
    </div>
  );
}
export default Register;
