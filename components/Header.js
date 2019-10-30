import { css } from '@emotion/core';

/* CSS rules */

const headerImg = css`
  height: 20px;
`;

/* End of CSS rules */

function Header() {
  return (
    <div>
      <img src='img-logo-horizontal@3x.png' alt='page logo' css={headerImg} />
    </div>
  );
}
export default Header;
