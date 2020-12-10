import React, { useState, useEffect } from 'react';
import axios from "axios";

import Card from '@governo-de-alagoas/card-podcast'

const App = () => {
  const [podcast, setPodcast] = useState([]);

  function getNews() {
    axios
      .get(`http://186.249.51.18/api/home_page_detached_podcasts`)
      .then((resp) => {
        setPodcast(resp.data.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getNews();
  }, []);

  function renderNews() {
    const podcastsList = podcast || [];
    podcastsList.sort((a, b) => b.id - a.id);
    return podcastsList.map((podcast) => (
      <Card podcast={podcast} key={podcast.id} color="#F7941D" type="podcast" />
    ));
  }

  return (
    <section className="padding-lateral padding-vertical" id="noticias">
      <div className="noticias-container">{renderNews()}</div>
    </section>
  );
}

export default App
