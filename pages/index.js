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
      <div>
        {value && value.data[0].title}
        {value && value.data[0].imageUrl}
        {value && value.data[0].likesCount}
      </div>
      <div>
        {value && value.data[1].title}
        {value && value.data[1].imageUrl}
        {value && value.data[1].likesCount}
      </div>
      <div>
        {value && value.data[2].title}
        {value && value.data[2].imageUrl}
        {value && value.data[2].likesCount}
      </div>
      <div>
        {value && value.data[3].title}
        {value && value.data[3].imageUrl}
        {value && value.data[3].likesCount}
      </div>
      <div>
        {value && value.data[4].title}
        {value && value.data[4].imageUrl}
        {value && value.data[4].likesCount}
      </div>
    </div>
  );
}

export default Index;
