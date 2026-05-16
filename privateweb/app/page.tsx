import Image from "next/image";
import Aktywnosc from "./components/Aktywnosc";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-foreground">
      {/* HERO */}
<section className="flex flex-col items-center justify-center text-center h-screen px-6 bg-cream-0 shadow-sm">
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
      Moja aktywność
    </a>

    <a
      href="#kontakt"
      className="px-6 py-3 bg-BlueNN text-white rounded-lg hover:bg-BlueNN/80 transition"
    >
      Kontakt
    </a>
  </div>
</section>


  <section id="omnie"  className="flex flex-col items-center justify-center text-center h-screen px-6 bg-cream-01 shadow-sm">

  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

    {/* TEKST OBOK ZDJĘCIA (GÓRA) */}
    <div className="md:col-span-2 text-BlueNN text-justify">
      <h2 className="text-3xl font-semibold mb-6">O mnie</h2>

      <p className="text-lg mb-4">
        Urodzony na przełomie PRL i III RP w Katowicach. Całe życie związany z Katowicami i Górnym Śląskiem. Niedoszły historyk. Ostatecznie los zaprowadził mnie na Uniwersytet Ekonomiczny i studia na kierunkach Informatyka oraz Informatyka i Ekonometrii. 
      </p>

      <p className="text-lg mb-4">
        Zawodowo zajmuję się inżynierią systemów informatycznych oraz wytwarzaniem oprogramowania. Od czasów szkolnych interesuje mnie wykorzystanie współczesnych technologii w usprawnianiu wielu aspektów życia. Siedząc w licealnej ławce zastanawiałem się czemu do symulacji bitwy pod Grunwaldem nie używa się wyrenderowanych filmów, do nauki biologii cyfrowego ciała pozwalającego zajrzeć w głąb naszych organizmów. Na chemii czy fizyce zaprezentować omawiane procesy w bardziej plastyczny sposób, a na geografii zamiast czytać przejść się wirtualnie po omawianym miejscu.
      </p>
    </div>

    {/* ZDJĘCIE */}
    <div className="md:col-span-1 flex justify-center md:justify-end">
      <Image
        src="/portret.jpg"
        alt="Portret"
        width={400}
        height={500}
        className="rounded-xl shadow-lg h-auto w-auto"
      />
    </div>

    {/* DALSZA CZĘŚĆ TEKSTU POD ZDJĘCIEM – NA CAŁĄ SZEROKOŚĆ */}
    <div className="md:col-span-3 text-BlueNN text-justify">
      <p className="text-lg mb-4">
        Wolności owiec od czasów studiów. Aktywnie zaangażowany od wiosny 2025. Skupiający się nie na rozwiązywaniu problemów globalnych, ale tych lokalnych, które są bliżej nas i które możemy rozwiązać. Dla wielu z nas to właśnie mała ojczyzna ma największe znaczenie, bo tu toczy się codzienne życie. Sprawy lokalne – bezpieczeństwo, drogi, szkoły, relacje sąsiedzkie – wpływają na nas bardziej bezpośrednio niż wielkie polityczne spory. To w najbliższym otoczeniu człowiek naprawdę widzi efekty działań i czuje, że ma realny wpływ na swoją przyszłość. Dlatego troska o małą ojczyznę często okazuje się ważniejsza niż odległe decyzje podejmowane na najwyższych szczeblach władzy.
      </p>

      <p className="text-lg">
        Jeśli chcesz dowiedzieć się więcej – zapraszam do kontaktu!
      </p>
    </div>

  </div>
</section>



<section id="aktywnosc"  className="flex flex-col items-center justify-center text-center h-screen px-6 bg-cream-2 shadow-sm">

  <Aktywnosc />
</section>

<section id="omnie" className="py-24 px-6 bg-cream-3 ">

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

