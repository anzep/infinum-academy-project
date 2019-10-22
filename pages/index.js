import React from 'react';
import {useAsync} from 'react-use';
import fetch from 'isomorphic-fetch';

function getShows() {
  return fetch('https://api.infinum.academy/api/shows')
    .then((res) => res.json());
}
function Index() {
  const {value} = useAsync(getShows);

  return (
    <div>
      <h1>{value && value.data[0].title}</h1>
      {value && value.data[0]._id}
      {value && value.data[0].imageUrl}
      {value && value.data[0].likesCount}
      <h1>hi</h1>
    </div>
  );
}

export default Index;
