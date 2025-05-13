// components/Sondaggio.js

export default function Sondaggio({ form }) {
  return (
    <div className="bg-[#FFD400] flex items-center justify-center py-8">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Sei riuscito a fare ciò per cui eri venuto su questo sito oggi?
        </h2>
        <p className="text-gray-600 text-md font-medium mb-4 italic">
          La tua risposta ci aiuterà a migliorare il nostro sito
        </p>

        <form className="space-y-4">
          {form.map((item, index) => (
            <label
              key={index}
              className="flex items-start gap-3 p-4 border border-[#2563EB] rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <input
                type="radio"
                name={item.name}
                value={item.value}
                className="mt-1 text-blue-600"
              />
              <span className="text-gray-800 ml-2 font-medium">{item.label}</span>
            </label>
          ))}
        </form>
      </div>
    </div>
  );
}
