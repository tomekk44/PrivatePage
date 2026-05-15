"use client";

import { useEffect, useState } from "react";

export default function CookiePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] bg-white shadow-xl rounded-xl p-5 border border-gray-200 flex flex-col md:flex-row items-center gap-4 animate-fadeIn z-50">
      <p className="text-gray-800 text-sm">
        Ta strona używa plików cookies, aby działała poprawnie i była bardziej przyjazna.
      </p>

      <button
        onClick={acceptCookies}
        className="bg-BlueNN text-white px-5 py-2 rounded-lg hover:bg-BlueNN/80 transition"      >
        Akceptuję
      </button>
    </div>
  );
}
