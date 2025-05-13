import Image from 'next/image';

export default function Card2({
  card2image,
  card2title,
  card2description,
  card2buttontext,
}) {
  return (
    <div className="bg-[#FFD400] px-4 py-10 sm:px-6 md:py-16">
      <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center w-full max-w-md mx-auto shadow-lg">
        <Image
          src={card2image}
          alt="Maalox RefluRAPID"
          width={400}
          height={300}
          className="w-3/4 sm:w-2/3 h-auto mb-4"
        />

        <h2 className="text-xl sm:text-2xl font-bold italic mb-2">
          Maalox RefluRAPID
        </h2>

        <span className="border border-black rounded-full px-3 py-1 text-sm font-semibold mb-4">
          Bustine
        </span>

        <ul className="text-left space-y-2 mb-6 w-full max-w-xs mx-auto">
          <li className="flex items-start space-x-2">
            <span>✗</span>
            <span className="font-bold">Blocca il reflusso</span>
          </li>
          <li className="flex items-start space-x-2">
            <span>✗</span>
            <span className="font-bold">{card2title}</span>
          </li>
          <li className="flex items-start space-x-2">
            <span>✗</span>
            <span className="font-bold">{card2description}</span>
          </li>
        </ul>

        <button className="bg-[#FFD400] hover:bg-yellow-500 text-black font-bold py-3 px-6 sm:px-8 rounded-full transition w-full sm:w-auto">
          {card2buttontext}
        </button>
      </div>
    </div>
  );
}
