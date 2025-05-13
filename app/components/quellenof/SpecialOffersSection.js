import React from 'react';

const SpecialOffersSection = ({ offers }) => {
  return (
    <section className="special-offers">
      <h2>I nostri pacchetti speciali</h2>
      <p>Nei nostri pacchetti trovate la felicità, sfruttate le nostre offerte e prenotate la vostra vacanza dei sogni.</p>
      <div className="offers-grid">
        {offers.map((offer, index) => (
          <div key={index} className="offer-card">
            <img src={offer.image} alt={offer.title} />
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <p><strong>Durata:</strong> {offer.duration}</p>
            <p><strong>Prezzo:</strong> {offer.price}</p>
            <p><strong>Periodo:</strong> {offer.period}</p>
            <a href={offer.link} className="cta-button">Mostra dettagli</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffersSection;
