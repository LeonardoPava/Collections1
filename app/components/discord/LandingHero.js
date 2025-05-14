import Image from 'next/image';

const LandingHero = ({ logoSrc, logoAlt, navLinks, browserUrl, titolo, sottotitolo, imgSrc, bottoneSecondario }) => {
    return (
        <div className="relative z-10 flex flex-col h-full text-white">
            {/* Top Bar */}
            <header className="flex justify-between items-center px-6 py-4">
                <Image src={logoSrc} alt={logoAlt} className="#" width={80} height={80} />

                <nav className="hidden md:flex space-x-6 text-sm md:text-base">
                    {navLinks.map((link, index) => (
                        <a key={index} href={link.href} className="hover:underline">
                            {link.label}
                        </a>
                    ))}
                </nav>

                <a
                    href={browserUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-black rounded-full font-semibold"
                >
                    Apri Discord
                </a>
            </header>

            {/* Hero Content */}
            <div className="mt-10 flex flex-col items-center text-center px-6 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-center w-full max-w-6xl">
                    {/* Text Section */}
                    <div className="space-y-4 text-left">
                        <h1 className="text-4xl md:text-6xl font-extrabold">{titolo}</h1>
                        <p className="text-lg md:text-xl leading-relaxed">{sottotitolo}</p>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center">
                        <Image src={imgSrc} alt="Hero" className="max-w-full h-auto" width={500} height={500} />
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex justify-center w-full">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-white text-black border mx-auto border-gray-300 rounded-lg px-6 py-3 flex items-center justify-center hover:bg-gray-100">
                            <Image src="/images/discord/downloads.png" alt="Download Icon" className="h-6 w-6 mr-2" width={24} height={24} />
                            Scarica per Windows
                        </button>
                        <a
                            href={browserUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative px-6 py-3 bg-[#5865f2] text-white rounded-lg shadow-md font-semibold transition hover:shadow-lg hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-black hover:before:opacity-10"
                        >
                            {bottoneSecondario}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingHero;
