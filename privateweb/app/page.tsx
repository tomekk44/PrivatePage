import Image from "next/image";
import Aktywnosc from "./components/Aktywnosc";

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
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-8">

    {/* TEKST PO LEWEJ */}
    <div className="flex-1 text-BlueNN">
      <h2 className="text-3xl font-semibold mb-6">O mnie</h2>

      <p className="text-lg mb-4">
       
      </p>

      <p className="text-lg mb-4">
        
      </p>

      <p className="text-lg">
        Jeśli chcesz dowiedzieć się więcej — zapraszam do kontaktu!
      </p>
    </div>

    {/* ZDJĘCIE PO PRAWEJ */}
    <div className="w-full md:w-1/3 flex justify-center md:justify-end">
<Image
  src="/portret.jpg"
  alt="Portret"
  width={400}
  height={500}
  className="rounded-xl shadow-lg h-auto w-auto"
/>
    </div>

  </div>
</section>

<section id="aktywnosc" className="py-24 px-6 bg-cream-3">
  <Aktywnosc />
</section>

<section id="kontakt-social" className="py-24 px-6 bg-goldNN">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-semibold mb-10 text-BlueNN">Kontakt</h2>
        <p className="text-lg text-BlueNN/80 mb-4">
          Masz pytania? Skontaktuj się ze mną:
        </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* LEWA KOLUMNA — SOCIAL MEDIA */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-BlueNN">Media Społecznościowe</h3>

        <div className="flex flex-col gap-6">

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61582362362366"
            target="_blank"
            className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-200"
          >
            <Image
              src="/fb.svg"
              alt="Facebook"
              className="w-12 h-12"
              width={200}
              height={200}
            />
            <div>
              <h4 className="text-xl font-semibold text-BlueNN">Facebook</h4>
              <p className="text-BlueNN/70 text-sm">Obserwuj mnie na Facebooku</p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/twojprofil"
            target="_blank"
            className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-200"
          >
            <Image
              src="/ig.svg"
              alt="Instagram"
              className="w-12 h-12"
              width={200}
              height={200}
            />
            <div>
              <h4 className="text-xl font-semibold text-BlueNN">Instagram</h4>
              <p className="text-BlueNN/70 text-sm">Zobacz moje zdjęcia i relacje</p>
            </div>
          </a>

        </div>
      </div>

      {/* PRAWA KOLUMNA — KONTAKT */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-BlueNN">Kontakt</h3>



        <ul className="text-lg text-BlueNN space-y-2">
          <li>📧 Email: <strong>kontakt@tomaszkwiek.pl</strong></li>
          <li>📍 Adres: <strong>Katowice, Polska</strong></li>
        </ul>
      </div>

    </div>
  </div>
</section>






    </main>
  );
}

