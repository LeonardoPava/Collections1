import React from 'react';

const Hero = ({
  backgroundImage = "/images/quellenohf/hero.jpg",
  logo = "/images/quellenohf/logo.svg",
  navLinks = [],
  headline = "Puro lusso nelle montagne dell'Alto Adige"
}) => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Navbar */}
      <div className="absolute top-2 left-0 right-0 z-20 px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <img src={logo} alt="Logo" className="h-16 sm:h-44 mt-4 sm:mt-5" />

          <nav className="flex flex-col sm:flex-row items-center text-white text-sm sm:text-lg space-y-2 sm:space-y-0 sm:space-x-12 mt-4 sm:mt-0">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="hover:text-gray-300">
                {link.label}
              </a>
            ))}

            <div className="flex items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0">
              <button className="text-white hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
                </svg>
              </button>
              <span className="hover:text-gray-300 cursor-pointer">Menu</span>
            </div>
          </nav>
        </div>
      </div>

      {/* Headline */}
      <div className="absolute bottom-32 left-6 sm:left-24 z-10 text-white px-4 text-left">
        <p className="text-sm sm:text-lg font-light mb-2">Passiria | Alto Adige</p>
        <h1 className="text-3xl sm:text-5xl font-light">{headline}</h1>
      </div>
    </div>
  );
};

export default Hero;
