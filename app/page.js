import CardPacchetti from "./components/quellenof/CardPacchetti";
import Hero from "./components/quellenof/Hero";
import LuxuryIntroSection from "./components/quellenof/LuxuryIntroSection";
import TextSection from "./components/quellenof/CardCulinaria";
import News from "./components/quellenof/News";
import Features from "./components/quellenof/Features";
import NewsLetter from "./components/quellenof/NewsLetter";
import Footer from "./components/quellenof/Footer";
import CardTesto from "./components/quellenof/CardTesto";
import Navbar from "./components/maalox/Navbar";
import Card from "./components/maalox/Card";
import Card2 from "./components/maalox/Card2";
import Scheda from "./components/maalox/Scheda";
import Banner from "./components/maalox/Banner";
import Popup from "./components/maalox/Popup";
import Sondaggio from "./components/maalox/Sondaggio";
import Acquista from "./components/maalox/Acquista";
import Privacy from "./components/discord/Privacy";
import LandingHero from "./components/discord/LandingHero";
import CardSx from "./components/discord/CardSx";
import CardDx from "./components/discord/CardDx";
import TitoloBottone from "./components/discord/TitoloBottone";
import FooterDiscord from "./components/discord/FooterDiscord";

import UnieroHero from "./components/uniero/UnieroHero";
import Promo from "./components/uniero/Promo";
import Swiper from "./components/uniero/Swiper";
import Volantino from "./components/uniero/Volantino";
import Servizi from "./components/uniero/Servizi";
import UnieroFooter from "./components/uniero/UnieroFooter";
import Categories from "./components/uniero/Categories";

export default function Home() {

  const navLinks = [
    { label: "Impressioni", href: "#" },
    { label: "Buoni", href: "#" },
    { label: "Chiama", href: "#" },
    { label: "Scelta del resort", href: "#" },
    { label: "IT", href: "#" },
  ];

  const cardData = [
    {
      image: "/images/quellenohf/card-1.jpg",
      title: "Guesthouse V",
      description: "Un pacchetto esclusivo per il relax totale.",
      duration: "3 notti",
      price: "€450",
      period: "Primavera 2025",
      link: "/offerte/guesthouse-v",
    },
    {
      image: "/images/quellenohf/card-2.jpg",
      title: "Guesthouse P",
      description: "Wellness e gusto in un ambiente incantevole.",
      duration: "5 notti",
      price: "€750",
      period: "Estate 2025",
      link: "/offerte/guesthouse-p",
    },
  ];

  const offersData = [
    {
      image: "/images/quellenohf/card-3.png",
      title: "3 NOTTI MIDWEEK –20% MAGGIO",
      description: "Offerte speciali | Benessere e relax",
      duration: "3 notti",
      price: "Prezzo su richiesta",
      periods: ["4/5/2025 – 9/5/2025", "11/5/2025 – 16/5/2025"],
      link: "/offerte/offerta-1",
    },
    {
      image: "/images/quellenohf/card-4.jpg",
      title: "2 NOTTI MIDWEEK –20% MAGGIO",
      description: "Offerte speciali | Benessere e relax",
      duration: "2 notti",
      price: "Prezzo su richiesta",
      periods: ["4/5/2025 – 9/5/2025", "11/5/2025 – 16/5/2025"],
      link: "/offerte/offerta-2",
    },
  ];

  const newsItems = [
    {
      image: "/images/quellenohf/news1.jpeg",
      title: "Biohacking: la chiave per una salute ottimale",
      date: "Salute & Benessere | 11/4/2025",
    },
    {
      image: "/images/quellenohf/news2.jpg",
      title: "Focus sull’artista Claudio Nicoli",
      date: "Storie | 4/12/2024",
    },
    {
      image: "/images/quellenohf/news4.png",
      title: "L’artista Paolo Staccioli in primo piano",
      date: "Storie | 4/12/2024",
    },
    {
      image: "/images/quellenohf/news3.png",
      title: "L’artista Giovanni Maranghi in primo piano",
      date: "Storie | 4/12/2024",
    },
  ];

  const featuresData = [
    {
      src: "/images/quellenohf/feature1.png",
      alt: "Camera",
      title: "Camere e prezzi",
      description: "Mostra dettagli",
    },
    {
      src: "/images/quellenohf/feature2.webp",
      alt: "Offer",
      title: "Offerte",
      description: "Mostra dettagli",
    },
    {
      src: "/images/quellenohf/feature3.png",
      alt: "Gift",
      title: "Buoni regalo",
      description: "Mostra dettagli",
    },
  ];

  const navbarLinks = [
    { label: "Home", href: "#" },
    { label: "Prodotti", href: "#" },
    { label: "Lo Stomaco", href: "#" },
    { label: "Trova il prodotto per te", href: "#" },
    { label: "Acquista Maalox RefluRAPID", href: "#" },
  ];

  const schedaBenefici = [
    "Protegge la mucosa gastrica",
    "Allevia il bruciore di stomaco",
    "Riduce il reflusso gastroesofageo",
    "Senza zucchero e senza glutine",
  ];

   const form = [
    { name: "feedback", value: "si", label: "Sì, sono riuscito!" },
    { name: "feedback", value: "no", label: "No, ho provato ma non sono riuscito!" },
    { name: "feedback", value: "ancora", label: "Sto ancora finendo di fare ciò per cui ero venuto qua." },
  ];

  const venditori = [
    { image: "/images/maalox/acquista1.png", name: "Amazon", link: "https://www.amazon.it/" },
    { image: "/images/maalox/acquista2.png", name: "Farmacia", link: "https://www.farmacia.it/" },
    { image: "/images/maalox/acquista3.png", name: "Supermercato", link: "https://www.supermercato.it/" },
    { image: "/images/maalox/acquista4.png", name: "Atida Efarma", link: "https://www.efarma.com/" },
    { image: "/images/maalox/acquista5.png", name: "Redcare", link: "https://www.redcare.it/" },
    { image: "/images/maalox/acquista6.png", name: "Farmacia Loreto", link: "https://www.farmacialoreto.it/" },
  ];

   /* Discord */
  const data = {
    navLinks: [
      { label: "Scarica", href: "#download" },
      { label: "Nitro", href: "#nitro" },
      { label: "Scopri", href: "#discover" },
      { label: "Sicurezza", href: "#security" },
      { label: "Assistenza", href: "#support" },
      { label: "Blog", href: "#blog" },
      { label: "Sviluppatori", href: "#developers" },
      { label: "Lavora con noi", href: "#careers" },
    ],
  };





 const heroProps = {
    heroimage: '/images/uniero/hero.jpg',
    herologo: '/images/uniero/logo.png',
    heronavbar1: 'Esplora',
    heronavbar2: 'Negozi',
    prodottihero: [
      { text: 'Apple Passione Casa', link: '#' },
      { text: 'Volantino', link: '#' },
      { text: 'Galaxy S25 Edge', link: '#' },
      { text: 'Samsung TV', link: '#' },
      { text: 'Motorola Edge 60 Pro', link: '#' },
    ],
  };


  const promoProps = {
  promocard: [
    {
      image: '/images/uniero/promo1.jpg',
      title: 'Hotpoint Ariston  Frigorifero combinato HAT70I 932 S DC',
      prezzo: '€ 467,00',
      originale_prezzo: '879,90',
      description: 'Scade tra 12h 14m 23s',
      button: 'Ora'
    },
    {
      image: '/images/uniero/promo2.jpg',
      title: 'MSI Cyborg 15 A13VF-601IT Intel® Core™ i7 15.6" Full HD',
      prezzo: '€ 1.099,00',
      originale_prezzo: '1.499,00',
      description: 'Scade tra 12h 14m 23s',
      button: 'Ora'
    },
    {
      image: '/images/uniero/promo3.jpg',
      title: 'TIM OPPO A58 6.72" 128 GB 5000 mAh',
      prezzo: '€ 139,00',
      originale_prezzo: '249,00',
      description: 'Scade tra 4g 12h 14m 23s',
      button: 'Ora'
    }
  ]
}

const carouselProps = {
    sectionTitle: 'Ora in Unieuro',
    slides: [
        {
            image: '/images/uniero/swiper1.png',
            title: 'SOLO\nONLINE',
            text: 'Scopri i prodotti con consegna gratuita e scegli il meglio del tech della settimana!',
            date: 'Fino al 18 maggio',
        },
        {
            image: '/images/uniero/swiper3.webp',
            title: 'UNIEURO TECH COLLECTION',
            text: 'Scopri l’imperdibile selezione di prodotti tech con consegna gratuita!',
            date: 'Fino al 16 maggio',
        },
        {
            image: '/images/uniero/swiper2.png',
            title: 'ioplee',
            text: 'Esplora il comfort. Esplora lo stile. Trasforma il tuo spazio in un’esperienza.',
            button: {
                label: 'SCOPRI DI PIÙ',
                link: '#',
            },
        },
        {
            image: '/images/uniero/swiper1.png',
            title: 'SOLO\nONLINE',
            text: 'Scopri i prodotti con consegna gratuita e scegli il meglio del tech della settimana!',
            date: 'Fino al 18 maggio',
        },
        {
            image: '/images/uniero/swiper3.webp',
            title: 'UNIEURO TECH COLLECTION',
            text: 'Scopri l’imperdibile selezione di prodotti tech con consegna gratuita!',
            date: 'Fino al 16 maggio',
        }
    ],
};

const volantini = [
  {
    image: '/images/uniero/volantino1.jpg',
    title: '📣 SPECIALE CHROMEBOOK',
    description: 'Fino al 18 maggio',
  },
  {
    image: '/images/uniero/volantino2.jpg',
    title: '📰 VOLANTINO',
    description: 'Fino al 18 maggio',
  },
];



 const footerData = {
    socialIcons: [
      { image: '/images/uniero/social-media.png', alt: 'Facebook' },
      { image: '/images/uniero/tik-tok.png', alt: 'TikTok' },
      { image: '/images/uniero/twitter.png', alt: 'Twitter' },
      { image: '/images/uniero/youtube.png', alt: 'YouTube' },
      { image: '/images/uniero/instagram.png', alt: 'Instagram' },
    ],
    columns: [
      [
        'Conosciamoci Meglio',
        'Chi siamo',
        'Soluzioni per la tua azienda',
        'Lavora con noi',
        'Mappa del sito',
        'Unieuro S.p.A.',
      ],
      [
        'I tuoi acquisti facili',
        'Modalità di pagamento',
        'Modalità di spedizione',
        'Stime tempi di consegna',
        'Informativa prezzi e sconti',
        'Installazione e altri servizi',
        'Informativa RAEE',
        'I nostri punti vendita',
        'Volantino',
      ],
      [
        'Sicurezza e trasparenza',
        'Condizioni di vendita',
        'Sicurezza dei pagamenti',
        'Garanzie',
        'Reso e diritto di recesso',
        'Risoluzione controversie',
        'Avvertenza legale',
        'Privacy Policy',
        'Assistenza Clienti',
        'Tuteliamo la tua privacy',
      ],
      [
        'Al tuo servizio',
        'Lista Regali',
        'Social network',
        'PhotoSI stampa le tue foto',
        'I nostri servizi in negozio',
        'UniUpgrade',
      ],
      [
        'Area clienti',
        'Area personale',
        'Newsletter',
        'Unieuro Club',
        'Aperture straordinarie',
        'Assistenza clienti',
      ],
    ],
  };



const servizi = [
  { image: '/images/uniero/store.png', title: 'Ritira', description: 'in negozio' },
  { image: '/images/uniero/express-delivery.png', title: 'Scegli', description: 'la tua consegna' },
  { image: '/images/uniero/tools.png', title: 'Installazione', description: 'ed altri servizi' },
  { image: '/images/uniero/euro-sign.png', title: 'Finanziamenti', description: '' },
  { image: '/images/uniero/medal.png', title: 'Assistenza', description: 'aggiuntiva' },
  { image: '/images/uniero/box.png', title: 'Reso', description: 'e diritto di recesso' },
];


const categories = [
    { image: '/images/uniero/informatica.png', title: 'Informatica', color: '#FF5733' },
    { image: '/images/uniero/telefonia.png', title: 'Telefonia', color: '#33FF57' },
    { image: '/images/uniero/tv.png', title: 'TV e Home..', color: '#3357FF' },
    { image: '/images/uniero/audio.png', title: 'Audio e Hi-Fi', color: '#FF33A1' },
    { image: '/images/uniero/fotocamera.png', title: 'Foto e Video', color: '#FF8C33' },
    { image: '/images/uniero/elettrodomestici.webp', title: 'Elettrodomestici', color: '#33FFF5' },
    { image: '/images/uniero/console.webp', title: 'Console e Videogiochi', color: '#FF33D4' },
    { image: '/images/uniero/svago.png', title: 'Tempo Libero', color: '#FFC733' },
    { image: '/images/uniero/brand.png', title: 'Brand', color: '#FF3333' },
  ];


  return (
    <div>
      <Hero
        backgroundImage="/images/quellenohf/hero.jpg"
        logo="/images/quellenohf/logo.svg"
        navLinks={navLinks}
        headline="Puro lusso nelle montagne dell'Alto Adige"
      />

      <LuxuryIntroSection
        tagline="Un lusso allo stato puro"
        mainTitle="Benvenuti nel vostro hotel di lusso in Alto Adige a 5 stelle"
        mainDescription="Un angolo di paradiso nel cuore dello scenario alpino della Val Passiria. Un’oasi di pace per trascorrere tempo per sé e con chi si ama. Un hotel di lusso in Alto Adige a cinque stelle, un sogno a occhi aperti. Benvenuti al Quellenhof Luxury Resort Passeier. Benvenuti in uno straordinario regno delle vacanze."
        subTitle="Le strutture del Quellenhof Luxury Resort Passeier"
        subParagraph="Nel vostro hotel a 5 stelle in Alto Adige potrete scegliere tra quattro hotel e due residenze. Qualunque struttura scegliate, lasciatevi viziare dagli esclusivi servizi inclusi del nostro hotel di lusso in Alto Adige: siamo certi che vi brilleranno gli occhi."
        cardData={cardData}
      />

      <CardPacchetti offers={offersData} />

      <TextSection />

      <CardTesto
        testotitle="Un’esperienza unica di benessere e relax"
        testosubtitle="Scopri il nostro resort di lusso immerso nella natura incontaminata dell'Alto Adige."
        panoramica="Scopri di più"
      />

      <News newsItems={newsItems} />

      <Features images={featuresData} />

      <NewsLetter />

      <Footer />

      <Navbar
        navbarlogo="/images/maalox/logo.svg"
        navbarsearchicon="/images/maalox/webicon.png"
        navbarLinks={navbarLinks}
      />
      
      <Card
        cardimage="/images/maalox/card.webp"
        cardsubtitle="Consigli pratici"
        cardtitle="Sport e digestione"
        carddescription="Il movimento è importante, si sa. Ma lo sapevi che può influenzare la digestione?"
      />
      
      <Card2 
        card2image="/images/maalox/reflu.webp"
        card2subtitle="Consigli pratici"
        card2title="Sport e digestione"
        card2description="Il movimento è importante, si sa. Ma lo sapevi che può influenzare la digestione?"
        card2buttontext="Scopri di più"
        />

        <Scheda 
        schedaimage="/images/maalox/scheda1.webp"
        schedatitle="Maalox RefluRAPID"
        schedasubtitle="Bustine"
        schedaBenefici={schedaBenefici}
        />

        <Banner
          bannerimage="/images/maalox/banner.webp"
          bannertitle="Trova il prodotto per te"
          bannersubtitle="Scopri quale prodotto Maalox può alleviare i tuoi problemi di stomaco"
          bannerbuttontext="Inizia il test"
        />

        <Popup
              popupbgimage="/images/maalox/popup1.webp"
              popupimage="/images/maalox/popup2.webp"
              popuptitle="Hai bisogno di aiuto?"
              popupdescription="Possiamo aiutarti a trovare il prodotto più adatto a te."
              popupbuttontext="Scopri di più!"
        />

        <Sondaggio form={form} />

        <Acquista venditori={venditori} />

        {/* Discord */}
      <div class="relative bg-gradient-to-bl from-black via-[#121482] to-[#2c00aa] bg-cover bg-center">
        <Privacy
          titolo_privacy="Discord"
          testo_privacy="Cliccando su 'Accetta tutti i cookie', l'utente accetta di memorizzare i cookie sul dispositivo per migliorare la navigazione del sito, analizzare l'utilizzo del sito e assistere nelle nostre attività di marketing."
          bottone_accetta="Accetta tutti"
          bottone_rifiuta="Rifiuta"
          bottone_personalizza="Impostazioni cookie"
        />

        <LandingHero
          titolo="CHAT DI GRUPPO SUPER MEGA IPER ULTRA DIVERTENTE"
          sottotitolo="Su Discord puoi giocare, divertirti con gli amici e perché no, costruire una community globale. Personalizza il tuo spazio e rendilo il luogo perfetto in cui chiacchierare, giocare e passare del tempo."
          imgSrc="/images/discord/herodiscord.png"
          logoSrc="/images/discord/Logo.png"
          logoAlt="Logo Discord"
          browserUrl="https://discord.com"
          bottoneSecondario="Apri Discord nel tuo browser"
          navLinks={data.navLinks}
        />

        <CardSx
          immagine="/images/discord/main-chat.png"
          titolo_card="TRASMETTI IN STREAMING PER I TUOI AMICI COME SE FOSSERO DAVVERO LÌ CON TE"
          testo_card="Grazie alle dirette streaming di alta qualità e con bassa latenza ti sembrerà che i tuoi amici siano seduti sul divano proprio accanto a te mentre giochi, guardi delle foto, finisci i compiti o fai ciò che ami fare!"
        />

        <CardDx
          immagine="/images/discord/carddx-immagine.png"
          titolo_card="RENDI LE TUE CHAT DI GRUPPO ANCORA PIÙ DIVERTENTI"
          testo_card="Usa tantissimi strumenti, tra cui emoji, adesivi ed effetti per la soundboard personalizzati, per rendere uniche le tue chat testuali, video o vocali. Scegli un avatar e uno stato personalizzato, e fa\' in modo che il tuo profilo compaia in chat proprio come hai sempre desiderato."
        />

        <TitoloBottone
          titolo="NON C'È NIENT'ALTRO QUI. MEGLIO ANDARE A CHATTARE."
          immagine="/images/discord/downloads.png"
          testobottone="Scarica per Windows"
        />

        <FooterDiscord />
      </div>

      <UnieroHero heroProps={heroProps}/>


      <Promo promoProps={promoProps}/>

      <Swiper carouselProps={carouselProps} />

      <Volantino volantinoProps={volantini} />

      <Servizi serviziProps={servizi} />

      <UnieroFooter footerData={footerData} />

      <Categories categories={categories} />
    </div>
  )
}

