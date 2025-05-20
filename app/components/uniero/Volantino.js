import Image from 'next/image';

export default function UnieuroVolantino({ volantinoProps }) {
    return (
        <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-gray-900">
            {/* Titolo */}
            <div className="text-center mb-10 relative">
                <h1 className="text-5xl md:text-6xl font-extrabold">
                    Volantino
                    <span className="text-gray-300 font-black tracking-tight ml-4">Servizi Social</span>
                </h1>
                <p className="mt-4 text-lg text-gray-700 font-semibold">
                    Scopri i nostri volantini e speciali che abbiamo pensato per te.
                </p>
            </div>

            {/* Card Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-start max-w-3xl mx-auto">
                {Array.isArray(volantinoProps) &&
                    volantinoProps.map((v, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center"
                        >
                            <Image
                                src={v.image}
                                alt={v.title}
                                width={400}
                                height={250}
                                className="rounded-lg mb-4 w-full h-auto object-cover"
                            />
                            <h3 className="font-semibold text-sm text-gray-800">{v.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{v.description}</p>
                        </div>
                    ))}
            </div>

            {/* Testo descrittivo */}
            <div className="mt-12 text-gray-600 text-sm leading-relaxed max-w-5xl mx-auto px-4 md:px-0">
                <h2 className="font-bold text-xl text-gray-500 mb-3">
                    Unieuro: il miglior negozio di elettronica online
                </h2>
                <p className="mb-3">
                    Unieuro è uno dei più grandi negozi italiani di <strong>elettrodomestici</strong>, <strong>elettronica</strong>,
                    <strong>informatica</strong>, <strong>smartphone</strong>, <strong>tablet</strong>, TV e molto altro: sul nostro sito
                    potrai trovare il nostro catalogo aggiornato e approfittare di tutte le offerte dedicate ai clienti online.
                </p>
                <p className="mb-3">
                    Sullo store potrai trovare moltissime <a href="#" className="text-blue-600 underline">offerte sull’elettronica</a> in
                    continuo aggiornamento per venire incontro alle esigenze più disparate...
                </p>
                <p className="mb-3">
                    ...È possibile acquistare elettrodomestici online scegliendo tra il nostro ampio catalogo e selezionando le modalità
                    di consegna che preferisci.
                </p>
                <p>
                    Effettuando un acquisto online su Unieuro avrai infatti a disposizione diverse opzioni: potrai scegliere di
                    <strong> ricevere la merce direttamente a casa tua</strong> sfruttando la spedizione tracciata, oppure optare per il
                    <strong> ritiro del tuo ordine presso il punto vendita più vicino a casa tua</strong>.
                </p>
            </div>
        </section>
    );
}
