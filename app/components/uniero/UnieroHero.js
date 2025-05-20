'use client';

import Image from 'next/image';

export default function UnieroHero({
    heroProps
}) {
    return (
        <div className="bg-white text-gray-900 font-sans mb-10">
            {/* NAVBAR */}
            <nav className="w-full shadow-sm sticky top-0 z-50 bg-white">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    {/* Sinistra: Logo e Shop */}
                    <div className="flex items-center space-x-4">
                        <Image
                            src={heroProps.herologo}
                            alt="Unieuro"
                            width={100}
                            height={24}
                            className="h-6 w-auto"
                        />
                        <a
                            href="#"
                            className="text-2xl font-semibold text-gray-800 hover:text-blue-600 hidden sm:inline"
                        >
                            Unieuro
                        </a>
                        <a
                            href="#"
                            className="ml-2 px-3 py-1 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all"
                        >
                            🛒 Shop
                        </a>
                    </div>

                    {/* Centro: Barra di ricerca */}
                    <div className="hidden md:flex flex-1 mx-10 max-w-lg">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Cerca prodotto, modello, brand"
                                className="w-full pl-5 pr-10 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Destra: Link e icone */}
                    <div className="flex items-center space-x-6">
                        <a href="#" className="text-sm font-medium hover:text-blue-600 hidden xs:inline">
                            {heroProps.heronavbar1}
                        </a>
                        <a href="#" className="text-sm font-medium hover:text-blue-600 hidden xs:inline">
                            {heroProps.heronavbar2}
                        </a>

                        {/* Icone */}
                        <div className="flex items-center space-x-4 text-xl">
                            <a href="#" className="hover:text-blue-600">🔥</a>
                            <a href="#" className="hover:text-blue-600">🛒</a>
                            <a href="#" className="hover:text-blue-600">👤</a>
                        </div>
                    </div>
                </div>
                {/* Mobile search bar */}
                <div className="block md:hidden px-4 pb-2">
                    <input
                        type="text"
                        placeholder="Cerca prodotto, modello, brand"
                        className="w-full pl-5 pr-10 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </nav>

            {/* HERO BANNER */}
            <section className="w-full max-w-screen-xl mx-auto mt-6">
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                    <Image
                        src={heroProps.heroimage}
                        alt="Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Tabs */}
                <div className="flex justify-center flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm font-medium mt-4 text-gray-800 bg-opacity-95 rounded-full px-2 sm:px-8 py-2 sm:py-3 w-fit mx-auto">
                        {Array.isArray(heroProps.prodottihero) &&
                                heroProps.prodottihero.map((prodotto, idx) => (
                                <a
                                        key={idx}
                                        href={prodotto.link}
                                        className={`transition-colors duration-200 ${
                                        prodotto.text === 'Motorola Edge 60 Pro'
                                                ? 'text-blue-600 font-semibold'
                                                : 'text-gray-800 hover:text-blue-600 underline'
                                        }`}
                                >
                                        {prodotto.text}
                                </a>
                                ))}
                     </div>
            </section>
        </div>
    );
}
