import Link from 'next/link';
import { css } from '@emotion/core';

const footer = css`
  font-family: 'Verdana';
  font-size: 10px;
`;

function Footer() {
  return (
    <div css={footer}>
      <p>Still don&apos;t have an account?</p>
      <Link href='/register'>
        <a>Register</a>
      </Link>
    </div>
  );
}

export default Footer;
