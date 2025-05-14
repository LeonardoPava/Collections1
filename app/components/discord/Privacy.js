import React from "react";

const Privacy = ({
  titolo_privacy,
  testo_privacy,
  bottone_accetta,
  bottone_rifiuta,
  bottone_personalizza,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-100 border border-gray-300 rounded-lg w-full mx-auto">
      <div className="flex-1 mb-4 md:mb-0">
        <h3 className="m-0 text-black text-lg">{titolo_privacy}</h3>
        <p className="mt-2 text-sm text-gray-600">{testo_privacy}</p>
      </div>
      <div className="flex flex-col md:flex-row items-end md:items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <a href="#" className="mr-4 text-sm text-blue-500 hover:underline">
            {bottone_personalizza}
          </a>
        </div>
        <div className="flex items-center">
          <button className="mr-2 px-4 py-2 bg-black text-white rounded-full cursor-pointer hover:bg-gray-800">
            {bottone_rifiuta}
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-full cursor-pointer hover:bg-gray-800">
            {bottone_accetta}
          </button>
        </div>
        <span className="ml-0 md:ml-24 text-lg text-gray-500">x</span>
      </div>
    </div>
  );
};

export default Privacy;
