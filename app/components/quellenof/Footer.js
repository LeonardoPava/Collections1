import React from "react";

const Footer = ({
  address = {
    title: "Indirizzo",
    lines: [
      "Quellenhof Luxury",
      "Resort Passeier",
      "Via Passiria 47",
      "39010 S. Martino in Passiria",
      "presso Merano",
      "Italia",
    ],
  },
  contacts = {
    title: "Contatti",
    phone: "+39 0473 645474",
    email: "info@quellenhof.it",
    website: "www.quellenhof.it/it",
  },
  services = [
    "Immobili del Quellenhof",
    "Medical Center Quellenhof",
    "News dal Quellenhof",
    "Lavorare al Quellenhof",
    "Immagini",
    "Webcam",
  ],
  infoLinks = ["Social media wall", "Sostenibilità", "Negozi", "Compliance"],
  reviews = {
    rating: "★★★★★",
    percent: "96% di 100%",
    total: "più di 4895 recensioni",
  },
}) => {
  return (
    <footer className="bg-[#1c1c1c] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-sm">
        <div>
          <h3 className="text-lg font-semibold mb-2">{address.title}</h3>
          {address.lines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{contacts.title}</h3>
          <p><a href={`tel:${contacts.phone}`} className="underline">{`Tel: ${contacts.phone}`}</a></p>
          <p><a href={`mailto:${contacts.email}`} className="underline">{contacts.email}</a></p>
          <p><a href={`https://${contacts.website}`} className="underline">{contacts.website}</a></p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Service e novità</h3>
          {services.map((service, idx) => (
            <p key={idx}>{service}</p>
          ))}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Informazioni</h3>
          {infoLinks.map((info, idx) => (
            <p key={idx}>{info}</p>
          ))}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Recensioni</h3>
          <p className="text-[#b58e5c] text-xl">{reviews.rating}</p>
          <p>{reviews.percent}</p>
          <p>{reviews.total}</p>
        </div>
      </div>

      <div className="text-xs text-gray-400 mt-10 text-center">
        © 2025 Quellenhof Luxury Resort Passeier | Part.IVA: IT00679110213
      </div>
    </footer>
  );
};

export default Footer;
