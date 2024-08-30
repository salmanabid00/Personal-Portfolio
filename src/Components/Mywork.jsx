import React from 'react';
import theme_pattern from '../assets/theme_pattern.svg';
import Mywork_data from '../assets/mywork_data'; 

function Mywork() {
  return (
    <div id='work' className='my-work'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="Theme pattern" />
      </div>
      <div className='mywork-container'>
        {Mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt={work.w_title || `Work ${index + 1}`} />;
        })}
      </div>
    </div>
  );
}

export default Mywork;
