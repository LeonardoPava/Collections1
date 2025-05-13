import Image from 'next/image';

export default function Banner({
    bannerimage,
    bannertitle,
    bannersubtitle,
    bannerbuttontext,
}) {
    return (
        <div className="w-full bg-white py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Testo a sinistra */}
                <div className="max-w-md text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        <span className="italic font-bold text-3xl">{bannertitle}</span>
                    </h2>
                    <p className="mt-3 text-md text-gray-700">{bannersubtitle}</p>
                    <h1 className="mt-6 bg-[#FFD400] text-black font-semibold py-2 px-6 rounded-full inline-block hover:bg-yellow-500 hover:text-white transition-colors duration-300">
                        {bannerbuttontext}
                    </h1>
                </div>

                {/* Immagine a destra */}
                <div className="flex justify-center md:justify-end w-full md:w-6/12">
                    <Image
                        src={bannerimage}
                        alt="Prodotti Maalox"
                        width={600}
                        height={400}
                        className="max-w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
}
