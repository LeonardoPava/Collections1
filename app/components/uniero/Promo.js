import React from 'react'



import Image from 'next/image';

export default function UnieuroPromo({ promoProps }) {
  return (
    <section className="max-w-screen-xl mx-auto px-4 mt-12 mb-20">
      {/* Titolo */}
      <div>
        <h2 className="text-4xl font-bold text-[#3C4043] mb-5">Da non perdere!</h2>
        <p className="text-lg text-gray-700">
          <strong>
            <a href="#" className="text-black underline">
              Clicca qui per scoprire tutti i prodotti
            </a>
          </strong>
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Maggiori informazioni sul calcolo del prezzo{' '}
          <span title="Tooltip">ℹ️</span>
        </p>
      </div>

      {/* Prodotti */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {Array.isArray(promoProps.promocard) &&
          promoProps.promocard.map((promo, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-full text-sm text-center text-gray-700 mb-1">
                {promo.description}
              </div>
              <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
                <div className="absolute top-0 left-0 h-full bg-orange-500 w-1/2 flex items-center justify-center text-white text-xs">
                  🕓
                </div>
              </div>
              <div className="relative bg-white p-4 rounded-xl shadow">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-64 object-contain mb-4"
                />
                <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                  ⏳
                </div>
                <p className="text-sm text-center text-gray-800 mb-2">{promo.title}</p>
                <div className="flex justify-center items-center space-x-2 text-lg font-bold">
                  <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <span>{promo.button}</span>
                    <img
                      src="/images/uniero/logopromo.svg"
                      alt="Icona"
                      className="w-4 h-4"
                    />
                  </span>
                  <span>{promo.prezzo}</span>
                </div>
                <div className="text-xs text-center text-gray-500 mt-1">
                  Prezzo consigliato {promo.originale_prezzo}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}
