import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6 bg-white shadow-sm">
        <h1 className="text-5xl font-bold mb-4">Twoja Firma</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Profesjonalne usługi dla klientów indywidualnych i biznesowych.
        </p>
        <a
          href="#kontakt"
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Skontaktuj się
        </a>
      </section>

      {/* O NAS */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">O nas</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Jesteśmy zespołem specjalistów z wieloletnim doświadczeniem. 
          Stawiamy na jakość, terminowość i indywidualne podejście do klienta.
        </p>
      </section>

      {/* OFERTA */}
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

      {/* KONTAKT */}
      <section id="kontakt" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Kontakt</h2>

        <p className="text-lg mb-4">
          Masz pytania? Skontaktuj się z nami:
        </p>

        <ul className="text-lg">
          <li>📞 Telefon: <strong>123 456 789</strong></li>
          <li>📧 Email: <strong>kontakt@twojafirma.pl</strong></li>
          <li>📍 Adres: <strong>Kraków, Polska</strong></li>
        </ul>
      </section>
    </main>
  );
}

