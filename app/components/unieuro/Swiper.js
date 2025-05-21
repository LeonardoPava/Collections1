'use client';

import Image from 'next/image';
import { useRef } from 'react';

export default function UnieuroCarousel({ carouselProps }) {
    const scrollContainerRef = useRef(null);
    const scrollAmount = 416; // 400px + 16px gap

    const handleScrollLeft = () => {
        scrollContainerRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    };

    const handleScrollRight = () => {
        scrollContainerRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    return (
        <section className="bg-white py-12">
            <div className="max-w-screen-xl mx-auto px-4">
                {/* Titolo sezione */}
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                    {carouselProps.sectionTitle}
                </h2>

                {/* Slider orizzontale */}
                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar pb-2"
                    >
                        {carouselProps.slides.map((slide, idx) => (
                            <div
                                key={idx}
                                className="w-[400px] h-[320px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg relative bg-cover bg-center p-6 flex flex-col justify-between"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                <div>
                                    <h3 className="text-xl font-extrabold text-white mb-2 leading-tight whitespace-pre-line">
                                        {slide.title}
                                    </h3>
                                    <p className="text-sm text-white">{slide.text}</p>
                                </div>

                                {slide.button ? (
                                    <a
                                        href={slide.button.link}
                                        className="inline-block bg-blue-600 text-white text-sm font-bold px-5 py-2 rounded-xl self-start hover:bg-blue-700"
                                    >
                                        {slide.button.label}
                                    </a>
                                ) : (
                                    <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full self-start">
                                        {slide.date}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Bottoni frecce */}
                    <div className="flex justify-center mt-4 gap-4">
                        <button
                            onClick={handleScrollLeft}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 shadow"
                            aria-label="Scorri a sinistra"
                        >
                            ←
                        </button>
                        <button
                            onClick={handleScrollRight}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 shadow"
                            aria-label="Scorri a destra"
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>

            {/* Nascondi scrollbar */}
            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }
            `}</style>
        </section>
    );
}
