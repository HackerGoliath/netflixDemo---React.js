import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Cards';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Card
      imgsrc="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20200813125652/dark-1.jpg"
      sname="DARK "
      title="A netflix Original Series"
      link="https://www.netflix.com/in/title/80100172"
    />
    <Card
      imgsrc="https://i.ytimg.com/vi/2TfYui8A5L0/maxresdefault.jpg"
      sname="EXTRA CURRICULAR"
      title="A netflix Original Series"
      link="https://www.netflix.com/in/title/80990668"
    />
    <Card
      imgsrc="https://www.denofgeek.com/wp-content/uploads/2017/08/stranger-things-season-3-starcourt-teaser-netflix.jpg?fit=670%2C377"
      sname="Stranger Things"
      title="A netflix Original Series"
      link="https://www.netflix.com/in/title/80057281"
    />
    <Card
      imgsrc="https://i.ytimg.com/vi/ulOOON_KYHs/maxresdefault.jpg"
      sname="1899"
      title="A netflix Original Series"
      link="https://www.netflix.com/in/title/80214497"
    />
    <Card
      imgsrc="https://i.ytimg.com/vi/eNQIlMU8Zkg/maxresdefault.jpg"
      sname="ALL OF US ARE DEAD"
      title="A netflix Original Series"
      link="https://www.netflix.com/in/title/81237994"
    />
  </>
);

