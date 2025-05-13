import Image from "next/image";

export default function News({ newsItems }) {
    return (
        <section className="bg-black text-white py-8 px-2 relative">
            {/* Immagine di sfondo */}
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/images/quellenohf/background-news.jpg)' }}></div>
            
            <div className="relative max-w-5xl mx-auto text-center">
                <h2 className="text-lg md:text-2xl font-bold mb-2">
                    Novità, eventi e curiosità dai Quellenhof Resorts
                </h2>
                <p className="text-gray-300 max-w-xl mx-auto mb-6 text-xs md:text-sm">
                    Vi teniamo sempre aggiornati su eventi speciali, curiosità su celebrità del mondo dello sport che amano soggiornare nei nostri hotel di lusso in Alto Adige e su novità esclusive. Date un’occhiata al blog del Quellenhof e lasciatevi ispirare!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {/* Immagine verticale a sinistra */}
                    <div className="relative group overflow-hidden rounded-lg col-span-1 row-span-1 md:row-span-2">
                        <Image
                            src={newsItems[0].image}
                            alt={newsItems[0].title}
                            width={200}
                            height={400}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
                            <p className="text-xs md:text-sm text-gray-300">{newsItems[0].date}</p>
                            <h3 className="text-sm md:text-lg font-semibold">{newsItems[0].title}</h3>
                        </div>
                    </div>

                    {/* Due immagini quadrate a destra */}
                    {newsItems.slice(1, 3).map((item, index) => (
                        <div key={index} className="relative group overflow-hidden rounded-lg col-span-1 row-span-1">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={400}
                                height={400}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
                                <p className="text-xs md:text-sm text-gray-300">{item.date}</p>
                                <h3 className="text-sm md:text-lg font-semibold">{item.title}</h3>
                            </div>
                        </div>
                    ))}

                    {/* Immagine larga in basso */}
                    <div className="relative group overflow-hidden rounded-lg col-span-1 md:col-span-2 row-span-1">
                        <Image
                            src={newsItems[3].image}
                            alt={newsItems[3].title}
                            width={800}
                            height={400}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
                            <p className="text-xs md:text-sm text-gray-300">{newsItems[3].date}</p>
                            <h3 className="text-sm md:text-lg font-semibold">{newsItems[3].title}</h3>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <a href="#" className="text-xs md:text-sm tracking-wide uppercase text-white border-b border-white hover:text-yellow-500 transition">
                        — Tutte le novità
                    </a>
                </div>
            </div>
        </section>
    );
}
