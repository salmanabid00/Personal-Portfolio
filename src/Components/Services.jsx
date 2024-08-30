import React from 'react';
import theme_pattern from '../assets/theme_pattern.svg';
import services_data from '../assets/services_data';
import arrow_icon from '../assets/arrow_icon.svg';

function Services() {
  return (
    <div id='services' className='Services' style={{ backgroundImage: `url(${theme_pattern})` }}>
      <div className="services-title">
        <h1>My Services</h1>
        <div className="services-container">
          {services_data.map(service => (
            <div key={service.id} className="service-item">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read more</p>
                <img src={arrow_icon} alt="Arrow icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
