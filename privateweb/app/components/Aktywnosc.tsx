"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function Aktywnosc() {
  const items = [
    {
      src: "/Action/sprzatanieSwiata.jpg",
      title: "Sprzątamy Świat 2026",
      desc: "Akcja \"Nowa Nadzieja dla Ziemi\"",
    },
    {
      src: "/Action/projekt27.jpg",
      title: "Projekt 27",
      desc: "Pomoc w organizacji panelu eksperckiego w temacie energetyki.",
    },
        {
      src: "/Action/dzienKobiet.jpg",
      title: "8 marca - Dzień Kobiet",
      desc: "W dzień kobiet w symboliczny sposób dziękowaliśmy Paniom za ich codzienny trud, pracę oraz ogromny wkład w życie społeczne, rodzinne i zawodowe .",
    },
            {
      src: "/Action/1marca.jpg",
      title: "1 marca - Dzień Pamięci Żołnierzy Wyklętych",
      desc: "Wzmacniajmy pamięć o tych, którzy w walce o suwerenność i niepodległość naszej Ojczyzny oddali swoje życie.",
    },
            {
      src: "/Action/rewerenudmKrk.jpg",
      title: "Referendum Kraków",
      desc: "Referendum odwoławcze prezydenta miasta jest cennym narzędziem demokracji lokalnej, bo daje mieszkańcom realną możliwość skorygowania decyzji wyborczych i przypomina, że władza samorządowa zawsze powinna pozostawać pod bezpośrednią kontrolą obywateli..",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10 text-BlueNN">Moja aktywność</h2>

<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3500, disableOnInteraction: false }}
  spaceBetween={30}
  slidesPerView={1}
  className="rounded-xl shadow-xl bg-(--color-goldNN) p-4 relative pb-10"
>

        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col items-center">

              {/* KONTENER O STAŁEJ WYSOKOŚCI */}
              <div className="relative w-full h-180 overflow-hidden rounded-xl flex justify-center items-center bg-(--color-goldNN)">

                {/* ZDJĘCIE — dopasowane, wyśrodkowane */}
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-contain rounded-xl transition-transform duration-500 hover:scale-105"
                />

                {/* OPIS — NIEBIESKI PANEL */}
<div className="absolute bottom-0 left-0 right-0 bg-BlueNN/70 backdrop-blur-sm text-white p-4 pb-8 rounded-b-xl">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.desc}</p>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
