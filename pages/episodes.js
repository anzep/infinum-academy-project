import { useState } from 'react';
import {useAsync} from 'react-use';
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {show} = useAsync(() => getShows(showId));

  function onModalClose() {
    setIsModalVisible(false);
  }

  function onModalOpen() {
    setIsModalVisible(true);
  }

  function onEpisodeAdded(episode) {
    ApiService.post('episodes/', episode, {Authorization: document.cookie})
      .then(() => {
        setIsModalVisible(false);
      })
      .catch((error) => {
        if (error.message === 'Validation error') {
          // TODO handle validation errors
        }
      });
  }

  return (
    <div>
      Episodes
      {show && show.title}
      <div>
        <button onClick={onModalOpen}>Add new episode</button>
        {isModalVisible &&
        <AddEpisodeModal onModalClose={onModalClose} onEpisodeAdded={onEpisodeAdded} />}
      </div>
    </div>
  );
}
  
export default observer(Episodes);
  
