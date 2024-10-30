import React from 'react';
import './Services.css';
import SheaAvo from '../assets/SheaAvo.jpeg'
import CAimage from '../assets/CAimages.jpeg'
import oil from '../assets/oil.jpeg'
import Hempi from '../assets/Hempimages.jpeg'
import seeds from '../assets/seeds.jpg'
import face from '../assets/FCimages.jpeg'
import raw from '../assets/RawSheaButter.jpeg'
import seedling from '../assets/seedling.png'
import Scentend from '../assets/Scentendimages.jpeg'
import CBD from '../assets/CBD-Shea.jpg'
import shutter from '../assets/shutterstock.jpg'
import clone from '../assets/clone.jpeg'
import BODY from '../assets/BODYimages.jpeg'


const Services = () => {
  const services = [
    { id: 1, title: "Seeds", image: seeds },
    { id: 2, title: "Seedling Production ", image: seedling },
    { id: 3, title: "Cloning", image: clone},
    { id: 4, title: "Research on Cannabis", image: shutter },
    { id: 5, title: "Oil, CBD and THC extraction", image:oil },
    { id: 6, title: "Hemp based cosmetic products ",image: Hempi },
    { id: 7, title: "CBD infused raw shea butter", image: CBD },
    { id: 8, title: "CBD infuse shea body cream", image: BODY },
    { id: 9, title: "CBD infused face cream", image: face },
    { id: 10, title: "Scented raw shea butter", image: Scentend },
    { id: 11, title: "Shea-avo hair food", image: SheaAvo },
    { id: 12, title: "Raw sha butter (Vitamin E actate)", image:raw},
  ];

  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <h3 className="service-title">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
