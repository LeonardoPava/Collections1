import React from 'react';

const CardPacchetti = ({ offers }) => {
  return (
    <section
      className="relative bg-cover bg-center text-white min-h-[90vh] flex items-center"
      style={{ backgroundImage: `url('/images/quellenohf/bg-4componente.jpg')` }}
    >
      {/* Overlay oscurato intero */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 w-full px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center lg:items-center justify-between">
          
          {/* Testo al centro verticale sinistra */}
          <div className="flex-1 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
            <h2 className="text-5xl font-light mb-6">I nostri pacchetti speciali</h2>
            <p className="mb-6 leading-relaxed max-w-xl font-light">
              Nei nostri pacchetti troverete la felicità. Sfogliate le nostre offerte e prenotate la vostra vacanza dei sogni.
            </p>
            <a href="#offerte" className="text-white underline font-light">
              Alla panoramica delle offerte
            </a>
          </div>

          {/* Card a metà sezione destra */}
          <div className="flex-1 grid md:grid-cols-2 gap-8 mt-8"> 
            {offers.map((offer, index) => (
              <div key={index} className="overflow-hidden shadow-none">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-100 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm font-light mb-1" style={{ color: '#856e51' }}>
                    Offerte speciali | Benessere e relax
                  </p>
                  <h3 className="text-lg font-light text-white mb-1">{offer.title}</h3>
                  <p className="text-sm font-light mb-2">
                    <strong>{offer.duration}</strong> | Prezzo su richiesta
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-300 font-light mb-2">
                    {offer.periods.map((period, i) => (
                      <li key={i}>{period}</li>
                    ))}
                  </ul>
                  <a href="#periodi" className="text-sm underline text-white font-light mb-2 inline-block">
                    Mostra tutti i periodi
                  </a>
                  <a href={offer.link} className="text-sm underline text-white font-light block mt-1">
                    Mostra dettagli
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CardPacchetti;
