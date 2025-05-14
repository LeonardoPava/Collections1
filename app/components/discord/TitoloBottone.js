import Image from 'next/image';

export default function TitoloBottone({ titolo, immagine, testobottone }) {
    return (
        <div className="text-center">
            <h1 className="text-6xl text-white font-bold mb-6">{titolo}</h1>
            <button className="bg-white text-black border mx-auto border-gray-300 rounded-lg px-6 py-3 flex items-center justify-center hover:bg-gray-100">
                <Image src={immagine} alt="Download Icon" className="h-6 w-6 mr-2" width={24} height={24} />
                {testobottone}
            </button>
        </div>
    );
}