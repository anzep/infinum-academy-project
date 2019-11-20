import { observer } from 'mobx-react';
import { css } from '@emotion/core';
import useForm from 'react-hook-form';


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

const input = css`
  border: 0;
  outline: 0;
  border-bottom: 2px solid #FF7BA3;
  font-family: 'Verdana';
  color: #FF7BA3;
  font-size: 20px;
`;

function AddEpisodeModal({onModalClose, onEpisodeAdded}) {
  const [episode, setEpisode] = React.useState({
    showId: null,
    mediaId: null,
    title: null,
    description: null,
    episodeNumber: null,
    season: null,
  });

  function onShowIdChange(e) {
    setEpisode({
      ...episode,
      showId: e.target.value,
    });
  }

  function onMediaIdChange(e) {
    setEpisode({
      ...episode,
      mediaId: e.target.value,
    });
  }

  function onTitleChange(e) {
    setEpisode({
      ...episode,
      title: e.target.value,
    });
  }

  function onDescriptionChange(e) {
    setEpisode({
      ...episode,
      description: e.target.value,
    });
  }

  function onEpisodeNumberChange(e) {
    setEpisode({
      ...episode,
      episodeNumber: e.target.value,
    });
  }

  function onSeasonChange(e) {
    setEpisode({
      ...episode,
      season: e.target.value,
    });
  }

  const { errors, register, handleSubmit } = useForm();

  function onSubmit() {
    onEpisodeAdded(episode);
  }


  return (
    <div css={mask}>
      <form onSubmit={handleSubmit(onSubmit)} css={modal}>
        <input
          type="text"
          name="showId"
          css={input}
          ref={register({})}
          onChange={onShowIdChange}
        />
        <input
          type="text"
          name="mediaId"
          css={input}
          ref={register({})}
          onChange={onMediaIdChange}
        />
        <input
          type="text"
          name="title"
          css={input}
          ref={register({})}
          onChange={onTitleChange}
        />
        <input
          type="text"
          name="description"
          css={input}
          ref={register({})}
          onChange={onDescriptionChange}
        />
        <input
          type="text"
          name="episodeNumber"
          css={input}
          ref={register({})}
          onChange={onEpisodeNumberChange}
        />
        <input
          type="text"
          name="season"
          css={input}
          ref={register({})}
          onChange={onSeasonChange}
        />
        <input
          type="submit"
          value="Save episode"
        />
        <button onClick={onModalClose}>Close</button>
      </form>
    </div>
  );
}

export default observer(AddEpisodeModal);
