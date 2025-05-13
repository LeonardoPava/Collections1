// components/Acquista.js

export default function Acquista({ venditori }) {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 text-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Acquista <span className="italic">Maalox RefluRAPID</span> online.
      </h1>
      <p className="text-gray-700 text-base sm:text-lg mb-6">
        Basta un click per scegliere dove.
      </p>

      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-4">Seleziona il formato</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-5 py-2 bg-[#FFD400] text-black font-medium rounded focus:outline-none">
            20 bustine monodose
          </button>
          <button className="px-5 py-2 text-gray-800 hover:underline focus:outline-none">
            28 bustine monodose
          </button>
          <button className="px-5 py-2 text-gray-800 hover:underline focus:outline-none">
            40 compresse masticabili
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {venditori.map((venditore, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow p-6 flex items-center justify-center"
          >
            <a
              href={venditore.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={venditore.image}
                alt={venditore.name}
                className="h-6 sm:h-8"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
