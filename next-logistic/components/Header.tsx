"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import image from "@/public/image.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import BusinessIcon from "@mui/icons-material/Business";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DirectionsTransitFilledIcon from "@mui/icons-material/DirectionsTransitFilled";
import DescriptionIcon from "@mui/icons-material/Description";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ContactPage from "@/app/contact/page";
// import "../app/hero.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const [transport, setOpenTransport] = useState(false);
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenCompany(false);
    setOpenTransport(false);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50 md:fixed ">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Left: logo */}
        <div className="flex items-center gap-5">
          <Link href="/" aria-label="Next Logistic Home">
            <Image
              src={image}
              alt="Nextlogistic"
              width={78}
              height={30}
              className="h-auto md:block"
            />
          </Link>
        </div>

        {/* Center navigation */}
        <div className="hidden  xl:flex flex-1 justify-center">
          <nav className="flex items-center gap-8" aria-label="Main menu">
            <Link
              href="/"
              className="text-sm font-medium text-blue-600 font-bold"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-bold text-gray-500 cursor-pointer">
                Company
                <span className="ml-1">▾</span>
              </button>
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all absolute  mt-2 w-156 bg-white shadow-lg rounded p-3 z-10 transition">
                <ul className="space-y-1 text-sm grid grid-cols-2 gap-5">
                  <li className="flex items-center gap-2 hover:bg-blue-100/50  p-2 rounded transition">
                    <span className="items-center gap-2 bg-blue-100/50 text-blue-400 p-2">
                      <BusinessIcon className="w-3 h-3" />
                    </span>
                    <div className="flex flex-col">
                      <Link
                        href="/about"
                        className="block p-1 text-gray-700 font-bold"
                      >
                        About us
                      </Link>

                      <p className="text-gray-500 text-sm">
                        Leader in Logistics
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2 hover:bg-blue-100/50  p-2 rounded transition">
                    <span className="items-center gap-2 bg-blue-100/50 text-blue-400 p-2">
                      <SchoolIcon className="w-3 h-3" />
                    </span>
                    <div className="flex flex-col">
                      <Link
                        href="/academy"
                        className="block p-1 text-gray-700 font-bold"
                      >
                        Academy
                      </Link>
                      <p className="text-gray-500 text-sm">
                        Training for new staff
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2 hover:bg-blue-100/50  p-2 rounded transition">
                    <span className="items-center gap-2 bg-blue-100/50 text-blue-400 p-2">
                      <WorkIcon className="w-3 h-3" />
                    </span>
                    <div className="flex flex-col">
                      <Link
                        href="/careers"
                        className="block p-1 text-gray-700 font-bold"
                      >
                        Careers
                      </Link>
                      <p className="text-gray-500 text-sm">
                        Become part of our team
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2 hover:bg-blue-100/50  p-2 rounded transition">
                    <span className="items-center gap-2 bg-blue-100/50 text-blue-400 p-2">
                      <VolunteerActivismIcon className="w-3 h-3" />
                    </span>
                    <div className="flex flex-col">
                      <Link
                        href="/causes"
                        className="block p-1 text-gray-700 font-bold"
                      >
                        Causes
                      </Link>
                      <p className="text-gray-500 text-sm">
                        Social responsibility and vision
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2 hover:bg-blue-100/50  p-2 rounded transition">
                    <span className="items-center gap-2 bg-blue-100/50 text-blue-400 p-2">
                      <LightbulbIcon className="w-3 h-3" />
                    </span>
                    <div className="flex flex-col">
                      <Link
                        href="/techlogies"
                        className="block p-1 text-gray-700 font-bold"
                      >
                        Technology
                      </Link>
                      <p className="text-gray-500 text-sm">
                        Innovation and AI solutions
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2 hover:bg-blue-100/50  p-2 rounded transition">
                    <span className="items-center gap-2 bg-blue-100/50 text-blue-400 p-2">
                      <EnergySavingsLeafIcon className="w-3 h-3" />
                    </span>
                    <div className="flex flex-col">
                      <Link
                        href="/greenLogistics"
                        className="block p-1 text-gray-700 font-bold"
                      >
                        Green Logistics
                      </Link>
                      <p className="text-gray-500 text-sm">
                        Ecological transport model
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-bold text-gray-500 cursor-pointer">
                Transport <span className="ml-1">▾</span>
              </button>
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all absolute left-0 mt-2 w-156 bg-white shadow-lg rounded p-3 z-10">
                <ul className="space-y-1 text-sm grid  grid-cols-2 gap-5">
                  <li className="flex items-center gap-2 hover:bg-blue-100/50  p-2 rounded transition">
                    <span className="items-center gap-2 bg-blue-100/50 text-blue-400 p-2">
                      <LocalShippingIcon className="w-3 h-3" />
                    </span>
                    <div>
                      <Link
                        href="/roadTransport"
                        className="block py-1 text-gray-700 font-bold"
                      >
                        Road Transport
                      </Link>
                      <p className="text-gray-500 text-sm">
                        Transportation organization{" "}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2 hover:bg-blue-100/50  p-2 rounded transition">
                    <span className="items-center gap-2 bg-blue-100/50 text-blue-400 p-2">
                      <LocalShippingIcon className="w-3 h-3" />
                    </span>
                    <div>
                      <Link
                        href="/academy"
                        className="block py-1 text-gray-700 font-bold"
                      >
                        Intermodal Transport
                      </Link>
                      <p className="text-gray-500 text-sm">
                        Next generation logistics solutions
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2 hover:bg-blue-100/50  p-2 rounded transition">
                    <span className="items-center gap-2 bg-blue-100/50 text-blue-400 p-2">
                      <DirectionsTransitFilledIcon className="w-3 h-3" />
                    </span>
                    <div>
                      <Link
                        href="/railwayTransport"
                        className="block py-1 text-gray-700 font-bold"
                      >
                        Rail Transport
                      </Link>
                      <p className="text-gray-500 text-sm">
                        License for transportation in 4 countries
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2 hover:bg-blue-100/50  p-2 rounded transition">
                    <span className="items-center gap-2 bg-blue-100/50 text-blue-400 p-2">
                      <LocalShippingIcon className="w-3 h-3" />
                    </span>
                    <div>
                      <Link
                        href="/combinedTransport"
                        className="block py-1 text-gray-700 font-bold"
                      >
                        Combined Transport
                      </Link>
                      <p className="text-gray-500 text-sm">
                        Land and sea deliveries
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2 hover:bg-blue-100/50  p-2 rounded transition">
                    <span className="items-center gap-2 bg-blue-100/50 text-blue-400 p-2">
                      <DirectionsTransitFilledIcon className="w-3 h-3" />
                    </span>
                    <div>
                      <Link
                        href="/containerTransport"
                        className="block py-1 text-gray-700 font-bold"
                      >
                        Container Transport
                      </Link>
                      <p className="text-gray-500 text-sm">
                        FCL and LCL from port to door
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2 hover:bg-blue-100/50  p-2 rounded transition">
                    <span className="items-center gap-2 bg-blue-100/50 text-blue-400 p-2">
                      <DirectionsTransitFilledIcon className="w-3 h-3" />
                    </span>
                    <div>
                      <Link
                        href="/containerTransport"
                        className="block py-1 text-gray-700 font-bold"
                      >
                        River Transport
                      </Link>
                      <p className="text-gray-500 text-sm">
                        Bulk cargo solutions{" "}
                      </p>
                    </div>
                  </li>
                </ul>
                {/* down menu */}
                <div className="bg-gray-100/50 w-full grid grid-cols-2 gap-5 mt-3 p-3 rounded">
                  <div className="flex items-center gap-2 hover:bg-blue-100/50  p-2 rounded transition">
                    <span>
                      <DescriptionIcon className="w-3 h-3 text-blue-400" />
                    </span>
                    <p className="text-gray-500 text-sm p-2">
                      {" "}
                      Transit documents
                    </p>
                  </div>
                  <div className="flex items-center gap-2 hover:bg-blue-100/50  p-2 rounded transition">
                    <span>
                      <DescriptionIcon className="w-3 h-3 text-blue-400" />
                    </span>
                    <p className="text-gray-500 text-sm p-2"> Border Posts</p>
                  </div>
                  <div className="flex items-center gap-2 hover:bg-blue-100/50  p-2 rounded transition">
                    <span>
                      <DescriptionIcon className="w-3 h-3 text-blue-400" />
                    </span>
                    <p className="text-gray-500 text-sm p-2"> CMR Convention</p>
                  </div>
                  <div className="flex items-center gap-2 hover:bg-blue-100/50  p-2 rounded transition">
                    <span>
                      <DescriptionIcon className="w-3 h-3 text-blue-400" />
                    </span>
                    <p className="text-gray-500 text-sm p-2">
                      {" "}
                      Make an inquiry
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/news"
              className="block py-1 text-sm font-bold text-gray-500"
            >
              News
            </Link>
            <Link
              href="/contact"
              className="block py-1 text-sm font-bold text-gray-500"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Right: socials + mobile menu */}
        <div className="flex items-center gap-5 md:gap-4">
          <div className="flex items-center gap-3 md:gap-3">
            <Link
              href="https://www.linkedin.com/company/nextlogistic/posts/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
              className="text-blue-600"
            >
              <LinkedInIcon />
            </Link>
            <Link
              href="https://www.facebook.com/nextlogistic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-blue-600"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="https://www.instagram.com/nextlogistic.eu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-blue-600"
            >
              <InstagramIcon />
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen((s) => !s)}
            className="inline-flex items-center justify-center text-gray-600 xl:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <MenuIcon />
          </button>
        </div>
        {/* Mobile menu button */}
      </nav>
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-60 xl:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ease-out ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu backdrop"
          onClick={closeMobileMenu}
        />

        <div
          className={`relative h-full w-[92%] max-w-sm bg-slate-200 px-8 py-6 text-slate-600 shadow-xl transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-8 flex justify-end ">
            <button
              type="button"
              onClick={closeMobileMenu}
              className="inline-flex items-center justify-center text-slate-700"
              aria-label="Close mobile menu"
            >
              <CloseIcon sx={{ fontSize: 36 }} />
            </button>
          </div>

          <div className="space-y-6 text-[18px]  tracking-[0.01em]">
            <Link href="/" onClick={closeMobileMenu} className="block">
              Home
            </Link>

            <div className="">
              <button
                onClick={() => setOpenCompany((s) => !s)}
                className="flex w-full items-center justify-between"
                aria-expanded={openCompany}
              >
                Company
                <KeyboardArrowRightIcon
                  className={
                    openCompany
                      ? "rotate-90 transition-transform duration-300 ease-out"
                      : "transition-transform duration-300 ease-out"
                  }
                />
              </button>
              <div
                className={
                  openCompany
                    ? "grid grid-rows-[1fr] opacity-100 mt-2 transition-all duration-300 ease-out "
                    : "grid grid-rows-[0fr] opacity-0 mt-0 transition-all duration-300 ease-out "
                }
              >
                <ul className="overflow-hidden space-y-2 pl-1  bg-gray-100/50 py-2 rounded ">
                  <li>
                    <Link
                      href="/about"
                      onClick={closeMobileMenu}
                      className="block  text-gray-700"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academy"
                      onClick={closeMobileMenu}
                      className="block  text-gray-700"
                    >
                      Academy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      onClick={closeMobileMenu}
                      className="block  text-gray-700"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/causes"
                      onClick={closeMobileMenu}
                      className="block  text-gray-700"
                    >
                      Causes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/technology"
                      onClick={closeMobileMenu}
                      className="block  text-gray-700"
                    >
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/green-logistics"
                      onClick={closeMobileMenu}
                      className="block  text-gray-700"
                    >
                      Green Logistics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/code-of-ethics"
                      onClick={closeMobileMenu}
                      className="block  text-gray-700"
                    >
                      Code of Ethics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/human-right-policy"
                      onClick={closeMobileMenu}
                      className="block  text-gray-700"
                    >
                      Human right policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/logistic-sustainability-policy"
                      onClick={closeMobileMenu}
                      className="block  text-gray-700"
                    >
                      Logistic sustainability policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/diversity-and-inclusion-policy"
                      onClick={closeMobileMenu}
                      className="block  text-gray-700"
                    >
                      Diversity and Inclusion Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/corporate-social-responsibility"
                      onClick={closeMobileMenu}
                      className="block  text-gray-700"
                    >
                      Corporate Social Responsibility {/*  */} (CSR) policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academy"
                      onClick={closeMobileMenu}
                      className="block  text-gray-700"
                    >
                      Energy Management Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academy"
                      onClick={closeMobileMenu}
                      className="block  text-gray-700"
                    >
                      Environmental policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academy"
                      onClick={closeMobileMenu}
                      className="block  text-gray-700"
                    >
                      Anti-Corruption and Anti-Bribery {/* */} Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academy"
                      onClick={closeMobileMenu}
                      className="block  text-gray-700"
                    >
                      Code of conduct for suppliers and {/* */} business
                      partners
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academy"
                      onClick={closeMobileMenu}
                      className="block  text-gray-700"
                    >
                      Report registration form
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <button
                onClick={() => setOpenTransport((s) => !s)}
                className="flex w-full items-center justify-between"
                aria-expanded={transport}
              >
                Transport
                <KeyboardArrowRightIcon
                  className={
                    transport
                      ? "rotate-90 transition-transform duration-300 ease-out"
                      : "transition-transform duration-300 ease-out"
                  }
                />
              </button>
              <div
                className={
                  transport
                    ? "grid grid-rows-[1fr] opacity-100 mt-2 transition-all duration-300 ease-out "
                    : "grid grid-rows-[0fr] opacity-0 mt-0 transition-all duration-300 ease-out "
                }
              >
                <ul className="overflow-hidden space-y-2 pl-1 bg-gray-100/50 py-2 rounded">
                  <li>
                    <Link
                      href="/roadTransport"
                      onClick={closeMobileMenu}
                      className="block text-gray-700"
                    >
                      Road Transport
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/railwayTransport"
                      onClick={closeMobileMenu}
                      className="block text-gray-700"
                    >
                      Rail Transport
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/combinedTransport"
                      onClick={closeMobileMenu}
                      className="block text-gray-700"
                    >
                      Combined Transport
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/containerTransport"
                      onClick={closeMobileMenu}
                      className="block text-gray-700"
                    >
                      Container Transport
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/riverTransport"
                      onClick={closeMobileMenu}
                      className="block text-gray-700"
                    >
                      River Transport
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link href="/news" onClick={closeMobileMenu} className="block">
              News
            </Link>

            <Link href="/contact" onClick={closeMobileMenu} className="block">
              Contacts
            </Link>

            <p className="pt-4 text-2xl">🇧🇬</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
