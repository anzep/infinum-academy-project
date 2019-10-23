import React from 'react';
import {useAsync} from 'react-use';
import fetch from 'isomorphic-fetch';

function getShows() {
  return fetch('https://api.infinum.academy/api/shows')
    .then((response) => response.json());
}
function Index() {
  const {value} = useAsync(getShows);

  return (
    <div>
      {value && value.data.map(
        (show, i) => <div key={i}>{show.title} <img src={`https://api.infinum.academy${show.imageUrl}`}/>{show.likesCount} </div>
      )}
    </div>
  );
}

export default Index;
