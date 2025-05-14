import Image from 'next/image';

const CardDx = ({ titolo_card, testo_card, immagine }) => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row items-center rounded-[32px] backdrop-blur-md bg-white/5 p-6 md:p-10 gap-8">
                {/* Text on the left */}
                <div className="flex-1 text-white">
                    <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-4">
                        {titolo_card}
                    </h2>
                    <p className="text-sm md:text-base leading-relaxed text-gray-200">
                        {testo_card}
                    </p>
                </div>

                {/* Image on the right */}
                <div className="flex-1 w-full md:w-auto">
                    <Image
                        src={immagine}
                        alt="Immagine card"
                        className="rounded-[30px] w-full h-auto shadow-xl"
                        width={500} // Adjust width as needed
                        height={300} // Adjust height as needed
                    />
                </div>
            </div>
        </div>
    );
};

export default CardDx;