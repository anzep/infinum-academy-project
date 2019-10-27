import { css } from '@emotion/core';

const headerDiv = css`
  display: flex;
  justify-content: center;
`;

const headerImg = css`
  height: 20px;
`;

function header() {
  return (
    <div css={headerDiv}>
      <img src='img-logo-horizontal@3x.png' alt='page logo' css={headerImg} />
    </div>
  );
}
export default header;
