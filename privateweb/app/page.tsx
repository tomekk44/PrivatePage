import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-foreground">
      {/* HERO */}
<section className="flex flex-col items-center justify-center text-center py-32 px-6 bg-cream-1 shadow-sm">
     <Image
    src="/korona.png"
    alt="Korona"
    width={200}
    height={200}
    className="w-24 h-auto mb-6 md:w-32"
    priority
  />
  <h1 className="text-5xl font-bold mb-4 text-BlueNN">Tomasz Kwiek</h1>

  <p className="text-xl text-BlueNN/80 max-w-2xl">
    „Wolność daje wybór, własność daje niezależność, sprawiedliwość daje równowagę.”
  </p>

  {/* Przyciski w jednej linii */}
  <div className="flex flex-col md:flex-row gap-4 mt-8">
    <a
      href="#omnie"
      className="px-6 py-3 bg-BlueNN text-white rounded-lg hover:bg-BlueNN/80 transition"
    >
      O mnie
    </a>

    <a
      href="#social"
      className="px-6 py-3 bg-BlueNN text-white rounded-lg hover:bg-BlueNN/80 transition"
    >
      Media Społecznościowe
    </a>

    <a
      href="#kontakt"
      className="px-6 py-3 bg-BlueNN text-white rounded-lg hover:bg-BlueNN/80 transition"
    >
      Skontaktuj się
    </a>
  </div>
</section>
      {/* O MNIE */}
<section id="omnie" className="py-24 px-6 bg-cream-2">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-semibold mb-6 text-BlueNN">O mnie</h2>
    ...
  </div>
</section>

      {/* Media Społecznościowe */}
<section id="social" className="py-24 px-6 bg-cream-3">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-semibold mb-6 text-BlueNN">Media Społecznościowe</h2>
    ...
  </div>
</section>
<section id="kontakt" className="py-24 px-6 bg-cream-4">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-semibold mb-6 text-BlueNN">Kontakt</h2>

    <p className="text-lg text-BlueNN/80 mb-4">
      Masz pytania? Skontaktuj się z nami:
    </p>

    <ul className="text-lg text-BlueNN">
      <li>📧 Email: <strong>kontakt@tomaszkwiek.pl</strong></li>
      <li>📍 Adres: <strong>Katowice, Polska</strong></li>
    </ul>
  </div>
</section>

      {/* O NAS
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">O nas</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Jesteśmy zespołem specjalistów z wieloletnim doświadczeniem. 
          Stawiamy na jakość, terminowość i indywidualne podejście do klienta.
        </p>
      </section> */}

      {/* OFERTA 
      <section className="py-24 px-6 bg-white shadow-inner">
        <h2 className="text-3xl font-semibold text-center mb-12">Oferta</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Usługa 1</h3>
            <p className="text-gray-700">Krótki opis usługi.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Usługa 2</h3>
            <p className="text-gray-700">Krótki opis usługi.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Usługa 3</h3>
            <p className="text-gray-700">Krótki opis usługi.</p>
          </div>
        </div>
      </section>
*/}
      {/* KONTAKT */}

    </main>
  );
}

