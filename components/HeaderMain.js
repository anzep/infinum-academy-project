import { css } from '@emotion/core';

const headerMain = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Verdana';
`;
const headerImg = css`
  height: 20px;
`;

function HeaderMain() {
  return (
    <div css={headerMain}>
      <div>
        <img src='img-logo-horizontal@3x.png' alt='page logo' css={headerImg} />
      </div>
      <div>
        <p>Welcome!</p>
      </div>
    </div>
  );
}

export default HeaderMain;
