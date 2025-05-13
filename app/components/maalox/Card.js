import Image from 'next/image';

export default function Card({
    cardimage,
    cardsubtitle,
    cardtitle,
    carddescription,
}) {
    return (
        <div className="max-w-lg rounded-2xl overflow-hidden shadow-lg mt-14 mb-14 mx-auto">
            <div className="relative h-[500px]">
                <Image
                    src={cardimage}
                    alt={cardtitle}
                    fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 500px"
                />
                <span className="absolute top-4 left-4 bg-black bg-opacity-80 text-white text-sm px-3 py-1 rounded-full">
                    {cardsubtitle}
                </span>
            </div>

            <div className="bg-black text-white p-4">
                <h2 className="text-xl font-bold italic mb-5">{cardtitle}</h2>
                <p className="text-md mb-2">{carddescription}</p>
            </div>
        </div>
    );
}
