import React from "react";

const LuxuryIntroSection = ({
  tagline,
  mainTitle,
  mainDescription,
  subTitle,
  subParagraph,
  cardData = [],
}) => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-24 px-6 md:px-24"
      style={{ backgroundImage: `url('images/quellenohf/bg-section.jpg')` }}
    >
      {/* Overlay nero per scurire l'immagine */}
      <div className="absolute inset-0 bg-[#222222] opacity-80"></div>


      <div className="relative z-10">
        {/* Top section */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div>
            <p className="text-sm text-amber-100 mb-2">{tagline}</p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight">{mainTitle}</h2>
          </div>
          <div>
            <p className="text-sm text-gray-300">{mainDescription}</p>
          </div>
        </div>

        {/* Subtitle center */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-light">{subTitle}</h3>
        </div>

        {/* Paragraph center */}
        <div className="max-w-4xl mx-auto text-center text-gray-300 mb-20">
          <p>{subParagraph}</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              className="bg-opacity-80 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-[584px] h-[300px] object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold">{card.title}</h4>
                <p className="text-gray-400 mt-2">{card.subtitle}</p>
                <p className="mt-4 text-amber-200 text-sm underline hover:text-amber-300 cursor-pointer">
                  {card.cta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryIntroSection;
