import { css } from '@emotion/core';

import header from '../components/header-logo';


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

function Login() {
  return (
    <div css={container}>
      {header()}
      <div css={itemA}>
        <h1>My email addres is</h1>
        <h1>!tukaj bo za vpis maila!</h1>
        <h1>and my password will be</h1>
        <h1>!tu pa bo vnos gesla!</h1>
      </div>
      <div>
        footer
      </div>
    </div>
  );
}
export default Login;
