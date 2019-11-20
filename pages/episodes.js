import {useAsync} from 'react-use';
import {observer} from 'mobx-react';
import { useRouter } from 'next/router';
import ApiService from '../services/apiService';

function Episodes() {

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

  return (
    <div>
      Episodes
      <h1>{show.title}</h1>
    </div>
  );
}
  
export default observer(Episodes);
  
