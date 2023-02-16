import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Cards';
import Sdata from './Sdata';
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1 className='heading_style'>List of Top Netflix Series in 2023</h1>
    {Sdata.map((val) => {
      return (
        <Card
          imgsrc={val.imgsrc}
          sname={val.sname}
          title={val.title}
          link={val.link}
        />
      )
    })}
  </>
);

