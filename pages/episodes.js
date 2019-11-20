import React, { useState } from 'react';
import {useAsync, useGetSetState} from 'react-use';
import {observer} from 'mobx-react';
import {useRouter} from 'next/router';
import ApiService from '../services/apiService';
import AddEpisodeModal from '../components/AddEpisodeModal';

function getShows(showId) {
  return ApiService.get(`shows/${showId}`)
    .then((response) => response.data);
}

function Episodes() {
  const router = useRouter();
  const showId = router.query.id;
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const {show} = useAsync(() => getShows(showId));

  function onModalClose() {
    setIsModalVisible(false);
  }

  function onModalOpen() {
    setIsModalVisible(true);
  }

  function onEpisodeAdded(episode) {
    console.log(document.cookie)
    ApiService.post('episodes/', episode, {Authorization: document.cookie})
      .then(() => {
        setIsModalVisible(false);
      })
      .catch((error) => {
        // TODO handle error correctly
      });
  }

  return (
    <div>
      Episodes
      {show && show.title}

      <div>
        <button onClick={onModalOpen}>Add new episode</button>
        {isModalVisible &&
          <AddEpisodeModal onModalClose={onModalClose} onEpisodeAdded={onEpisodeAdded} />
        }
      </div>
    </div>
  );
}
  
export default observer(Episodes);
  
