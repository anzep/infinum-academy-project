import { css } from '@emotion/core';
import SocialMedia from './SocialMedia';

const footerMain = css`
  display: flex-column;
  justify-content: space-between;
  align-items: center;

  font-family: 'Verdana';
  font-size: 13px;
  color: #999999;
  padding-top: 50px: 
`;

const socialMediaLine = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const legalLinks = css`
  display: flex; 
  justify-content: flex-start;
`;


const footerP = css`
  margin-right: 20px;
  
`;

const headerImg = css`
  height: 20px;
`;

function FooterMain() {
  return (
    <div css={footerMain}>
      <div css={socialMediaLine}>
        <img src='img-logo-horizontal@3x.png' alt='page logo' css={headerImg} />
        <SocialMedia />
      </div>
      <div css={legalLinks}>
        <p css={footerP}>About us</p>
        <p css={footerP}>Privacy policy</p>
        <p css={footerP}>Terms of Service</p>
      </div>
      <div>
        <p css={footerP}>&#169; 2019 Shows. All rights reserved. Additional terms and conditions may apply.</p>
      </div>
    </div>
  );
}

export default FooterMain;
