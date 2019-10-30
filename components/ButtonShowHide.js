import { css } from '@emotion/core';

/* CSS rules */

const showHideButton = css`
  padding: 2px;
  border: none;
  background: none;
  border-bottom: 2px solid #FF7BA3;
`;
const showHideButtonImg = css`
  hight: 30px;
  width: 30px;
`;

/* End of CSS rules */

function ButtonShowHide() {
  
  function showHide() {
    document.getElementById('pwd').type = 'text';
  }

  return (
    <button onClick={showHide} css={showHideButton}>
      <img src='ic-akcije-show-password-red@3x.png' alt='show/hide' css={showHideButtonImg} />
    </button>
  );
}

export default ButtonShowHide;
