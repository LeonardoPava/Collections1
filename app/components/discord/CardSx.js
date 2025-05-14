
const CardSx = ({ immagine, titolo_card, testo_card }) => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row items-center rounded-[32px] backdrop-blur-md bg-white/5 p-6 md:p-10 gap-8">
                {/* Immagine a sinistra */}
                <div className="order-1 md:order-none flex-1 w-full md:w-auto">
                    <img
                        src={immagine}
                        alt="Immagine card"
                        className="rounded-[30px] w-full h-auto shadow-xl"
                    />
                </div>

                {/* Testo a destra */}
                <div className="order-2 md:order-none flex-1 text-white">
                    <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-4">
                        {titolo_card}
                    </h2>
                    <p className="text-sm md:text-base leading-relaxed text-gray-200">
                        {testo_card}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardSx;
