import Image from 'next/image';

export default function UnieuroServizi({ serviziProps }) {
    return (
        <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-gray-900">
            {/* Titolo e descrizione */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold">Al tuo servizio</h2>
                <p className="mt-2 text-gray-600 text-base">
                    Scopri tutti i nostri servizi pensati per rendere i tuoi acquisti online sempre più facili e veloci. Scopri tutti i dettagli
                </p>
            </div>

            {/* Servizi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                {Array.isArray(serviziProps) &&
                    serviziProps.map((servizio, index) => (
                        <div
                            key={index}
                            className="border rounded-xl p-4 flex flex-col items-center justify-center transition-colors duration-200 hover:border-blue-600"
                        >
                            <Image
                                src={servizio.image}
                                alt={servizio.title}
                                width={24}
                                height={24}
                                className="mb-2"
                            />
                            <p className="text-sm text-gray-900 font-semibold">{servizio.title}</p>
                            {servizio.description && (
                                <p className="text-sm text-gray-600 -mt-1">{servizio.description}</p>
                            )}
                        </div>
                    ))}
            </div>
        </section>
    );
}
