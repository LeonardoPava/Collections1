import React from 'react';

const TextSection = () => {
    return (
        <section
            className="relative flex items-center justify-center bg-[#222222] h-auto flex-col text-center px-4 pb-16"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-[#222222] to-transparent h-[70%] pointer-events-none"></div>
            <h2 className="text-2xl font-light text-white mb-3 relative z-10 pt-8">
                Esperienze gourmet nel vostro <br />hotel di lusso in Alto Adige
            </h2>
            <p className="text-white leading-relaxed font-light text-sm mb-16 relative z-10">
                Fragranze sublimi, sapori delicati e vellutati, ingredienti selezionati con cura e{' '}
                <span className="text-[#856e51]">composizioni secondo le regole<br />d’arte</span> in grado
                di fare per un capolavoro sempre aggiornato. È questo l’essenza delle esperienze gourmet dei nostri<br />
                ristoranti, un incontro di aromi che culmina in un’elegante{' '}
                <span className="text-[#856e51]">sinfonia di vini pregiati</span>.
            </p>
            <div className="flex flex-col md:flex-row mt-16 gap-16 relative z-10">
                <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="text-white text-left">
                        <h3 className="text-sm font-light mb-2">Ristorante gourmet dal 1897</h3>
                        <p className="text-lg font-light">
                            L'eleganza del<br />nostro piccolo<br />ristorante<br />gourmet.
                        </p>
                        <a href="#" className="text-[#856e51] mt-2 inline-block">Scopri di più</a>
                    </div>
                    <img src="/images/quellenohf/piatto1.png" alt="Piatto 1" className="w-80 h-80 object-cover" />
                </div>
                <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="text-white text-left">
                        <h3 className="text-sm font-light mb-2">Ristorante Sky Teppanyaki</h3>
                        <p className="text-lg font-light">
                            Il primo ristorante<br/>Teppanyaki<br/>dell'Alto Adige.
                        </p>
                        <a href="#" className="text-[#856e51] mt-2 inline-block">Scopri di più</a>
                    </div>
                    <img src="/images/quellenohf/piatto2.png" alt="Piatto 2" className="w-80 h-80 object-cover" />
                </div>
            </div>
        </section>
    );
};

export default TextSection;
