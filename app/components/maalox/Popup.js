import Image from 'next/image';

export default function Popup({
    popupbgimage,
    popupimage,
    popuptitle,
    popupdescription,
    popupbuttontext,
}) {
    return (
        <div
            className="relative flex items-center justify-center mx-auto bg-gray-100"
            style={{
                backgroundImage: `url('${popupbgimage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden mt-20 mb-20 flex flex-row text-center z-10">
                <div className="w-6/12">
                    <Image
                        src={popupimage}
                        alt="Immagine di esempio"
                        width={500}
                        height={500}
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="w-6/12 flex items-center">
                    <div className="w-8/12 mx-auto">
                        <div className="uppercase tracking-wide text-3xl text-black font-extrabold mt-20">
                            {popuptitle}
                        </div>
                        <p className="text-gray-500 mt-8">{popupdescription}</p>
                        <div className="mt-10">
                            <h1 className="inline-block bg-[#FFD400] text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-500">
                                {popupbuttontext}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
