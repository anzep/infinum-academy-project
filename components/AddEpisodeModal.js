import { observer } from 'mobx-react';
import { css } from '@emotion/core';

const mask = css`
  background: #000000c2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const modal = css`
  background: white;
  box-shadow: 1px 1px 6px 0px #949494;
  padding: 20px;
`;

function AddEpisodeModal({onModalClose}) {
  return (
    <div css={mask}>
      <div css={modal}>
        <h2>Kao edit forma</h2>
        <button onClick={onModalClose}>Close</button>
      </div>
    </div>
  );
}

export default observer(AddEpisodeModal);
