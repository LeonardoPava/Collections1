import React from 'react';

const FooterDiscord = () => {
  return (
    <div className="flex flex-col mt-32">
      <div className="w-full sm:w-1/4 p-4">
        <img
          src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e278299a53f5bf88615e90_Symbol.svg"
          alt="Logo"
          className="h-10"
        />
        <div className="mt-4">
          <label htmlFor="language" className="block text-sm font-medium text-gray-300 mb-3">
            Lingua
          </label>
          <select
            id="language"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md text-white bg-gray-800 bg-opacity-50"
          >
            <option className="text-white">Italiano</option>
            <option className="text-white">English</option>
          </select>
        </div>
        <div className="mt-4">
          <h2 className="text-sm font-medium text-gray-300">Social</h2>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">X</span>
              <img
                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe4237b6a1c4fa714f76_x.svg"
                alt="Twitter"
                className="h-6 w-6"
              />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">Instagram</span>
              <img
                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe42d907d27f3dead7a0_instagram.svg"
                alt="Instagram"
                className="h-6 w-6"
              />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">Facebook</span>
              <img
                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe4173c1df8be608c8a2_facebook.svg"
                alt="Facebook"
                className="h-6 w-6"
              />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">Youtube</span>
              <img
                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe42d907d27f3dead7ad_youtube.svg"
                alt="Youtube"
                className="h-6 w-6"
              />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">Tiktok</span>
              <img
                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe4152ae5860036dadf1_tiktok.svg"
                alt="Tiktok"
                className="h-6 w-6"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h2 className="text-sm font-medium text-gray-300">Prodotto</h2>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Scarica</a>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Nitro</a>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Stato</a>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">App Directory</a>
          </div>
          <div>
            <h2 className="text-sm font-medium text-gray-300">Compagnia</h2>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Chi siamo</a>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Lavora con noi</a>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Marchio</a>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Notiziario</a>
          </div>
          <div>
            <h2 className="text-sm font-medium text-gray-300">Risorse</h2>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Università</a>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Assistenza</a>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Sicurezza</a>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Blog</a>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">StreamKit</a>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Creatori</a>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Community</a>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Sviluppatori</a>
          </div>
          <div>
            <h2 className="text-sm font-medium text-gray-300">Norme</h2>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Termini</a>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Politica sulla privacy</a>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Impostazioni dei cookie</a>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Linee guida</a>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Riconoscimenti</a>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Licenze</a>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Informazioni sulla campagna</a>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Articoli ufficiali di terze parti</a>
            <a href="#" className="block mt-2 text-gray-300 hover:text-white">Suggerimenti</a>
          </div>
        </div>
      </div>
      <div className="w-full mt-16">
        <img
          src="/images/discord/logogigante.png"
          alt="Giant Image"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default FooterDiscord;
