import { css } from '@emotion/core';

const headerDiv = css`
  display: flex;
`;

const headerImg = css`
  height: 20px;
`;

function header() {
  return (
    <div>
      <img src='img-logo-horizontal@3x.png' alt='page logo' css={headerImg} />
    </div>
  );
}
export default header;
