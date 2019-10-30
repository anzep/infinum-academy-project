function LoginForm({ onLogin }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }
  
  function onLoginClick() {
    onLogin(email, password);
  }

  return (
    <div>
      <h1>My email is</h1>
      <input
        type="text"
        name="email"
        value={email}
        onChange={onEmailChange}
      />
      <h1>and my password is</h1>
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
      <button onClick={onLoginClick}>LOGIN</button>
    </div>
  );


}

export default LoginForm;
