import React from "react";
import Link from "next/link";
import { Outfit } from "@next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "600",
});

export default function MobileMenu() {
  return (
    <div className="md:hidden">
      {/* Render "Etrillium Technologies" */}
      <div
        className={`${outfit.className} font-large text-purple-600 hover:text-gray-200 text-xl font-bold text-center py-4`}
      >
        ETrillium Technologies
      </div>
    </div>
  );
}
