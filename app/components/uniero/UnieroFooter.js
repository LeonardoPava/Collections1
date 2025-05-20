// components/UnieuroFooter.js
import Image from 'next/image';

export default function UnieuroFooter({ footerData }) {
  return (
    <>
      <div className="w-full mx-auto bg-white text-gray-800 shadow p-6">
        <div className="flex flex-col md:flex-row justify-around items-center mb-4 space-y-8 md:space-y-0">
          {/* Store */}
          <div className="text-center w-full md:w-auto">
            <h2 className="text-4xl font-bold mb-5">Store</h2>
            <div className="mt-2 flex flex-col sm:flex-row items-center justify-center">
              <input
                type="text"
                placeholder="Città, Regione, Via o CAP"
                className="px-2 py-1 rounded bg-white text-gray-800 border w-full sm:w-auto"
              />
              <button className="bg-blue-500 text-white px-2 py-1 rounded mt-2 sm:mt-0 sm:ml-2 w-full sm:w-auto">
                Cerca
              </button>
            </div>
            <p className="text-sm mt-2">Ritira in negozio</p>
          </div>

          {/* Newsletter */}
          <div className="text-center w-full md:w-auto">
            <h2 className="text-4xl font-bold mb-5">Newsletter</h2>
            <div className="mt-2 flex flex-col sm:flex-row items-center justify-center">
              <input
                type="email"
                placeholder="Inserisci la tua email"
                className="px-2 py-1 rounded bg-white text-gray-800 border w-full sm:w-auto"
              />
              <button className="bg-blue-500 text-white px-2 py-1 rounded mt-2 sm:mt-0 sm:ml-2 w-full sm:w-auto">
                Iscriviti
              </button>
            </div>
            <p className="text-sm mt-2">Leggi l'informativa</p>
          </div>

          {/* Social */}
          <div className="text-center w-full md:w-auto">
            <h2 className="text-4xl font-bold">I ♥ Social</h2>
            <div className="flex justify-center mt-3">
              <div className="flex space-x-4">
                {footerData.socialIcons.map((icon, idx) => (
                  <div
                    key={idx}
                    className="bg-white shadow-lg rounded px-4 py-2 flex items-center justify-center"
                  >
                    <Image
                      src={icon.image}
                      alt={icon.alt}
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sezione finale */}
      <div className="bg-[#3C4043] text-white p-4">
        <div className="text-center text-sm mt-4">
          <p>
            Grazie a una capillare rete di distribuzione presente su tutto il
            territorio nazionale, Unieuro è la più grande catena di negozi di
            elettronica online ed elettrodomestici in Italia.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-around mt-8 space-y-8 md:space-y-0">
          {footerData.columns.map((column, idx) => (
            <div key={idx} className="text-center md:text-left">
              <h3 className="text-xl font-bold">{column[0]}</h3>
              <ul className="mt-2 space-y-1">
                {column.slice(1).map((item, subIdx) => (
                  <li key={subIdx}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
