import React from "react";

const NewsLetter = ({
  title = "Tutte le novità dal Quellenhof. Iscrivetevi ora!",
  placeholder = "Inserisci indirizzo e-mail",
  buttonLabel = "Iscrivetevi",
}) => {
  return (
    <section className="bg-[#1c1c1c] py-16 px-6 text-center">
      <h2 className="text-white text-3xl md:text-4xl font-medium mb-8 leading-snug">
        {title}
      </h2>
      <form className="flex flex-col md:flex-row justify-center items-center max-w-xl mx-auto">
        <input
          type="email"
          placeholder={placeholder}
          className="w-full md:w-auto px-3 py-3 mb-4 md:mb-0 md:mr-2 border border-gray-700 bg-transparent text-white placeholder-gray-400 focus:outline-none"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-[#b58e5c] text-white font-medium hover:bg-[#a27d4a] transition"
        >
          {buttonLabel}
        </button>
      </form>
    </section>
  );
};

export default NewsLetter;
