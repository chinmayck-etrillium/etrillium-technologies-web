"use client";

import { useState, useEffect } from "react";
import { Outfit } from "@next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "600",
});

export default function MobileMenu() {
  const [isHomepage, setIsHomepage] = useState(false);

  useEffect(() => {
    // Determine if we are on the homepage after component mounts
    setIsHomepage(window.location.pathname === "/");
  }, []);

  return (
    <div className="md:hidden">
      {/* Render "Etrillium Technologies" if it's the homepage */}
      {isHomepage && (
        <div
          className={`${outfit.className} font-large text-purple-600 hover:text-gray-200 text-2xl font-bold text-center py-4`}
        >
          Etrillium Technologies
        </div>
      )}
    </div>
  );
}
