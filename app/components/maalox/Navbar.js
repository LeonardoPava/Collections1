import Image from 'next/image';

export default function Navbar({
    navbarlogo,
    navbarsearchicon,
    navbarLinks, // Provide a default value
}) {
    return (
        <div className="w-full bg-[#FFD400] text-black font-sans">
            <div className="max-w-[91.666667%] mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-3">
                <div className="flex items-center space-x-2 mb-3 md:mb-0">
                    <Image src={navbarlogo} alt="Logo" width={40} height={40} className="h-8 md:h-10 w-auto" />
                </div>

                <div className="flex flex-wrap justify-center md:justify-start items-center space-x-4 md:space-x-6 text-sm md:text-md font-bold">
                    {navbarLinks.map((link, index) => (
                        <a key={index} href={link.href} className="hover:underline">
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="flex items-center space-x-3 mt-3 md:mt-0">
                    <Image src={navbarsearchicon} alt="Search Icon" width={24} height={24} className="h-5 md:h-6 w-auto" />
                </div>
            </div>
        </div>
    );
}