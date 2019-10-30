import { css } from '@emotion/core';

const headerImg = css`
  height: 20px;
`;

function Header() {
  return (
    <div>
      <img src='img-logo-horizontal@3x.png' alt='page logo' css={headerImg} />
    </div>
  );
}
export default Header;
