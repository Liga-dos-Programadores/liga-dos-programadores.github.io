import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Team() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://api.github.com/orgs/Liga-dos-Programadores/members'
    })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Equipe</h1>
      {data.map((index) => (
        <div>
          {index.login}
          <img src={index.avatar_url} alt="Avatar" />
          {index.html_url}
        </div>
      ))}
    </div>
  );
}
