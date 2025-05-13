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
      src: "/images/quellenohf/camera-icon.png",
      alt: "Camera",
      title: "Camere e prezzi",
      description: "Mostra dettagli",
    },
    {
      src: "/images/quellenohf/offer-icon.png",
      alt: "Offer",
      title: "Offerte",
      description: "Mostra dettagli",
    },
    {
      src: "/images/quellenohf/gift-icon.png",
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
    </div>
  )
}

