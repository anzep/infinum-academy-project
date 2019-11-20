import React, { useState } from 'react';
import {useAsync} from 'react-use';
import {observer} from 'mobx-react';
import { useRouter } from 'next/router';
import ApiService from '../services/apiService';
import AddEpisodeModal from '../components/AddEpisodeModal';
import styles from '../css/modal.module.css';

function Episodes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const showId = router.query.id;

  const show = ApiService.get(`shows/${showId}`)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error.message);
    });
  
  const {loading} = useAsync(show);

  return (
    <div>
      Episodes
      {loading && <p>Shows are loading...</p>}
      {!loading && show.title}

      <button id="modal_opener" onClick={setIsModalOpen(true)}>Click Me!</button>
      <AddEpisodeModal isModalOpen={isModalOpen}>
        <h2>Told Ya!</h2>
      </AddEpisodeModal>
    </div>
  );
}
  
export default observer(Episodes);
  
