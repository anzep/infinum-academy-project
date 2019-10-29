import React from 'react';
import { css } from '@emotion/core';

function RegisterForm({registerUser}) {
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
  );
}

export default RegisterForm;
