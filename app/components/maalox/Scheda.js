import Image from 'next/image';

export default function Scheda({
    schedaimage,
    schedatitle,
    schedasubtitle,
    schedaBenefici,
    schedainformazioni,
}) {
    return (
        <div className="flex flex-col md:flex-row items-start justify-center w-[60%] mx-auto mb-20 mt-20">
            {/* Sezione sinistra con immagine */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0 md:pr-8">
                <Image
                    src={schedaimage}
                    alt={schedatitle}
                    width={400}
                    height={400}
                    className="w-full md:w-auto max-w-md h-auto"
                />
            </div>

            {/* Sezione destra con testo */}
            <div className="w-full md:w-1/2 flex flex-col items-start">
                <h1 className="text-4xl font-bold mb-4">{schedatitle}</h1>

                <span className="border border-black rounded-full px-3 py-1 text-md font-semibold mb-4">
                    {schedasubtitle}
                </span>

                <p className="text-base mb-2">
                    Maalox Plus grazie a due antiacidi associati ad un antigonfiore:
                </p>
                <ul className="list-disc list-inside pl-4 mb-4">
                    {schedaBenefici.map((beneficio, index) => (
                        <li key={index}>{beneficio}</li>
                    ))}
                </ul>

                <div className="w-full mt-6">
                    <h3 className="text-2xl font-semibold mb-2">{schedainformazioni}</h3>
                    <a href="#" className="text-gray-500 hover:text-gray-700 mb-2 block">
                        Cos'è Maalox Plus
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700 mb-2 block">
                        Quando è utile
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700 mb-2 block">
                        Come agisce
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700 mb-2 block">
                        Ingredienti
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700 mb-2 block">
                        Posologia
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700 mb-2 block">
                        Formati disponibili
                    </a>
                </div>
            </div>
        </div>
    );
}
