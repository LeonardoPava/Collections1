import React from 'react';

const CardTesto = ({ testotitle, testosubtitle, panoramica }) => {
    return (
        <section className="bg-[#1c1c1c] text-white flex px-20 py-40">
            <div className="max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                    {testotitle}
                </h2>
                <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-md">
                    {testosubtitle}
                </p>
                <div className="mt-10">
                    <a href="#" className="inline-flex items-center text-white text-lg group">
                        <span className="relative pr-8">
                            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-px bg-yellow-700 group-hover:w-8 transition-all duration-300"></span>
                        </span>
                        {panoramica}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CardTesto;