import { css } from '@emotion/core';

/* CSS rules */

const imgSM = css`
  width: 35px;
  hight: 35px;
  border-radius: 20px;
  margin-left: 10px;
  filter: grayscale(100%);
  :hover {
    filter: grayscale(0%);
  }
`;

/* End of CSS rules */

function SocialMedia() {
  return (
    <div>
      <a target="_blank" href='https://www.facebook.com/anze.pureber' rel="noopener noreferrer">
        <img src='/facebook_icon.png' alt="link to FB page" css={imgSM} />
      </a>
      <a target="_blank" href='https://www.instagram.com/anzepureber/' rel="noopener noreferrer">
        <img src='/instagram_icon.png' alt="link to Instagram page" css={imgSM} />
      </a>
      <a target="_blank" href='https://www.linkedin.com/in/an%C5%BEe-pureber-068b58185/' rel="noopener noreferrer">
        <img src='/linkedin_icon.png' alt="link to LinkedIn page" css={imgSM} />
      </a>
    </div>
  );
}

export default SocialMedia;
