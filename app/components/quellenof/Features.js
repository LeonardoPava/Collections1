import React from "react";

const Features = ({
  images = [
    {
      imgSrc: "/images/quellenohf/feature1.png",
      alt: "Camera",
      title: "Camere e prezzi",
      description: "Mostra dettagli",
    },
    {
      imgSrc: "/images/quellenohf/feature2.webp",
      alt: "Offer",
      title: "Offerte",
      description: "Mostra dettagli",
    },
    {
      imgSrc: "/images/quellenohf/feature3.png",
      alt: "Gift",
      title: "Buoni regalo",
      description: "Mostra dettagli",
    },
  ],
}) => {
  return (
    <section className="py-12 px-6" style={{ backgroundColor: "#1c1c1c" }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((item, index) => (
          <div key={index} className="p-6 text-center">
            <img
              src={item.imgSrc}
              alt={item.alt}
              className="h-20 w-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-medium mb-2 text-white">
              {item.title}
            </h3>
            <p className="text-sm text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
