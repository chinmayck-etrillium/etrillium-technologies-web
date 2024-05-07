import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { Outfit } from "@next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "600",
});

export default function Header() {
  return (
    <>
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Site branding */}
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <Link href="/" className="block">
                <svg
                  className="w-10 h-10 fill-current text-purple-600"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle fill="#6A28E2" cx="20" cy="10" r="9" />

                  <circle
                    fill="rgba(106, 40, 226, 0.85)"
                    cx="12.5"
                    cy="23"
                    r="10"
                  />

                  <circle
                    fill="rgba(106, 40, 226, 0.65)"
                    cx="28.5"
                    cy="23"
                    r="10"
                  />
                </svg>
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex md:grow">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li
                  className={`${outfit.className} font-large text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out text-lg`}
                >
                  eTrillium Technologies
                </li>
              </ul>
            </nav>
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
