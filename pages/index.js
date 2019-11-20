import React from 'react';
import {useAsync} from 'react-use';
import fetch from 'isomorphic-fetch';

/* a remnant of our initial work */

function getShows() {
  return fetch('https://api.infinum.academy/api/shows')
    .then((response) => response.json());
}
function Index() {
  const {value} = useAsync(getShows);

  return (
    <div>
      {value && value.data.map((show) => <div key={show._id}>{show.title} <img src={`https://api.infinum.academy${show.imageUrl}`} alt='cover of the show' />{show.likesCount} </div>)}
    </div>
  );
}

export default Index;
