"use client";
import Link from "next/link";
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
import SummarizeIcon from "@mui/icons-material/Summarize";
import PolicyIcon from "@mui/icons-material/Policy";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";

import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const [policiesOpen, setPoliciesOpen] = useState(false);
  const [transport, setOpenTransport] = useState(false);
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenCompany(false);
    setPoliciesOpen(false);
    setOpenTransport(false);
  };
  const pathname = usePathname();

  return (
    <header className="fixed w-full bg-[#F8FAFC] shadow-md z-50 md:fixed ">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Left: logo */}
        <div className="flex items-center gap-5">
          <Link href="/" aria-label="Next Logistic Home">
            <Image
              src={image}
              alt="Nextlogistic"
              priority
              className="block w-[78px] h-auto"
            />
          </Link>
        </div>

        {/* Center navigation */}
        <div className="hidden  xl:flex flex-1 justify-start ml-30">
          <nav className="flex items-center gap-8" aria-label="Main menu">
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "  text-blue-500 cursor-pointer"
                  : " text-black/80 cursor-pointer"
              }
            >
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-l text-black/80 cursor-pointer">
                Company
                <span className="ml-1">▾</span>
              </button>
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all absolute  mt-2 w-156 bg-white shadow-lg rounded-xl p-3 z-10 ">
                <ul className="space-y-1 text-sm grid grid-cols-2">
                  <li className="flex items-center gap-2 hover:bg-blue-100/30  p-2 rounded transition">
                    <span className="items-center gap-2 text-blue-500 p-2">
                      <BusinessIcon />
                    </span>
                    <div className="flex flex-col">
                      <Link
                        href="/about"
                        className="block p-1 text-black/80 font-bold"
                      >
                        About us
                      </Link>

                      <p className="text-gray-500 text-sm">
                        Leader in Logistics
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2 hover:bg-blue-100/30  p-2 rounded transition">
                    <span className="items-center gap-2 text-blue-500 p-2">
                      <SchoolIcon />
                    </span>
                    <div className="flex flex-col">
                      <Link
                        href="/academy"
                        className="block p-1 text-black/80 font-bold"
                      >
                        Academy
                      </Link>
                      <p className="text-gray-500 text-sm">
                        Training for new staff
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2 hover:bg-blue-100/30  p-2 rounded transition">
                    <span className="items-center gap-2  text-blue-500 p-2">
                      <WorkIcon />
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
                  <li className="flex items-center gap-2 hover:bg-blue-100/30  p-2 rounded transition">
                    <span className="items-center gap-2 text-blue-500 p-2">
                      <VolunteerActivismIcon />
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
                  <li className="flex items-center gap-2 hover:bg-blue-100/30  p-2 rounded transition">
                    <span className="items-center gap-2  text-blue-500 p-2">
                      <SettingsEthernetIcon />
                    </span>
                    <div className="flex flex-col">
                      <Link
                        href="/technologies"
                        className="block p-1 text-gray-700 font-bold"
                      >
                        Technology
                      </Link>
                      <p className="text-gray-500 text-sm">
                        Innovation and AI solutions
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2 hover:bg-blue-100/30  p-2 rounded transition">
                    <span className="items-center gap-2 text-blue-500 p-2">
                      <EnergySavingsLeafIcon />
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

                  {/* Policies */}
                  <div className="col-span-2 mt-3 rounded">
                    <li
                      className={`flex items-center gap-2 p-2 rounded transition cursor-pointer ${
                        policiesOpen ? "bg-blue-50" : "hover:bg-blue-100/30"
                      }`}
                      onClick={() => setPoliciesOpen((isOpen) => !isOpen)}
                      aria-expanded={policiesOpen}
                      aria-controls="policies-menu"
                    >
                      <span className="items-center gap-2 text-blue-500 p-2">
                        <PolicyIcon />
                      </span>
                      <div className="flex flex-1 flex-col">
                        <span
                          className={`block p-1 font-bold ${
                            policiesOpen ? "text-blue-600" : "text-black/80"
                          }`}
                        >
                          Company Policies
                        </span>
                        <p className="px-1 text-sm text-gray-500">
                          Transparency &amp; Corporate Responsibility
                        </p>
                      </div>
                      <span
                        className={`mr-2 text-blue-600 transition-transform ${
                          policiesOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▾
                      </span>
                    </li>

                    <div
                      id="policies-menu"
                      className={`col-span-2 grid grid-cols-2 grid-rows-2 gap-5 rounded bg-[#FAFBFC] px-5 py-5 overflow-hidden transition-all duration-300 ${
                        policiesOpen ? "max-h-[500px]" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex items-center text-black text-sm hover:bg-blue-100/50 transition p-2 rounded">
                        <Link
                          href="/policies/code-of-ethics"
                          className="flex items-center"
                        >
                          <SummarizeIcon
                            sx={{
                              width: 35,
                              height: 35,
                              color: "#64748B",
                              backgroundColor: "#F1F5F9",
                              padding: "5px",
                              borderRadius: "10px",
                              marginRight: "12px",
                            }}
                          />
                          Code of Ethics
                        </Link>
                      </div>
                      <div className="flex items-center text-black text-sm hover:bg-blue-100/50 transition p-2 rounded">
                        <Link
                          href="/policies/human-right-policy"
                          className="flex items-center"
                        >
                          <SummarizeIcon
                            sx={{
                              width: 35,
                              height: 35,
                              color: "#64748B",
                              backgroundColor: "#F1F5F9",
                              padding: "5px",
                              borderRadius: "10px",
                              marginRight: "12px",
                            }}
                          />
                          Human Rights Policy
                        </Link>
                      </div>
                      <div className="flex items-center text-black text-sm hover:bg-blue-100/50 transition p-2 rounded">
                        <Link
                          href="/policies/logistic-sustainability"
                          className="flex items-center"
                        >
                          <SummarizeIcon
                            sx={{
                              width: 35,
                              height: 35,
                              color: "#64748B",
                              backgroundColor: "#F1F5F9",
                              padding: "5px",
                              borderRadius: "10px",
                              marginRight: "12px",
                            }}
                          />
                          Logistic Sustainability Policy
                        </Link>
                      </div>
                      <div className="flex items-center text-black text-sm hover:bg-blue-100/50 transition p-2 rounded">
                        <Link
                          href="/policies/diversity-inclusion-policy"
                          className="flex items-center"
                        >
                          <SummarizeIcon
                            sx={{
                              width: 35,
                              height: 35,
                              color: "#64748B",
                              backgroundColor: "#F1F5F9",
                              padding: "5px",
                              borderRadius: "10px",
                              marginRight: "12px",
                            }}
                          />
                          Diversity and inclusion policy
                        </Link>
                      </div>
                      <div className="flex items-center text-black text-sm hover:bg-blue-100/50 transition p-2 rounded">
                        <Link
                          href="/policies/corporate-socials-rensponsibility"
                          className="flex items-center"
                        >
                          <SummarizeIcon
                            sx={{
                              width: 35,
                              height: 35,
                              color: "#64748B",
                              backgroundColor: "#F1F5F9",
                              padding: "5px",
                              borderRadius: "10px",
                              marginRight: "12px",
                            }}
                          />
                          Corporate Social Responsibility (CSR) Policy
                        </Link>
                      </div>
                      <div className="flex items-center text-black text-sm hover:bg-blue-100/50 transition p-2 rounded">
                        <Link
                          href="/policies/energy-management-policy"
                          className="flex items-center"
                        >
                          <SummarizeIcon
                            sx={{
                              width: 35,
                              height: 35,
                              color: "#64748B",
                              backgroundColor: "#F1F5F9",
                              padding: "5px",
                              borderRadius: "10px",
                              marginRight: "12px",
                            }}
                          />
                          Energy Management policy
                        </Link>
                      </div>
                      <div className="flex items-center text-black text-sm hover:bg-blue-100/50 transition p-2 rounded">
                        <Link
                          href="/policies/code-of-conduct-for-suppliers"
                          className="flex items-center"
                        >
                          <SummarizeIcon
                            sx={{
                              width: 35,
                              height: 35,
                              color: "#64748B",
                              backgroundColor: "#F1F5F9",
                              padding: "5px",
                              borderRadius: "10px",
                              marginRight: "12px",
                            }}
                          />
                          Code of conduct for suppliers and business partners
                        </Link>
                      </div>
                      <div className="flex items-center text-black text-sm hover:bg-blue-100/50 transition p-2 rounded">
                        <Link href="/" className="flex items-center">
                          <SummarizeIcon
                            sx={{
                              width: 35,
                              height: 35,
                              color: "#64748B",
                              backgroundColor: "#F1F5F9",
                              padding: "5px",
                              borderRadius: "10px",
                              marginRight: "12px",
                            }}
                          />
                          Report Registration Form
                        </Link>
                      </div>
                      <div className="flex items-center text-black text-sm hover:bg-blue-100/50 transition p-2 rounded">
                        <Link
                          href="/policies/environmental-policy"
                          className="flex items-center"
                        >
                          <SummarizeIcon
                            sx={{
                              width: 35,
                              height: 35,
                              color: "#64748B",
                              backgroundColor: "#F1F5F9",
                              padding: "5px",
                              borderRadius: "10px",
                              marginRight: "12px",
                            }}
                          />
                          Environmental policy
                        </Link>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-l text-black/80 cursor-pointer">
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
                        href="/interModalTransport"
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
                        href="/rail-transport"
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
                        href="/combined-transport"
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
                    <Link
                      href="/convetion/cmr-convetion"
                      className="text-gray-500 text-sm p-2"
                    >
                      CMR Convention
                    </Link>
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
              className={
                pathname === "/news"
                  ? "block py-1  text-blue-500"
                  : "block py-1  text-black/80"
              }
            >
              News
            </Link>
            <Link
              href="/contact"
              className={
                pathname === "/contact"
                  ? "block py-1  text-blue-500"
                  : "block py-1  text-black/80"
              }
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Right: socials + mobile menu */}
        <div className="flex items-center gap-5 md:gap-4 xl:border-l xl:border-gray-300">
          <div className="flex items-center gap-3 md:gap-3 md:ml-5">
            <Link
              href="https://www.linkedin.com/company/nextlogistic/posts/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
              className="text-[#2066C2]"
            >
              <LinkedInIcon />
            </Link>
            <Link
              href="https://www.facebook.com/nextlogistic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#2977F2]"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="https://www.instagram.com/nextlogistic.eu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#E44C80]"
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
                <ul className="overflow-hidden space-y-2 pl-1 bg-gray-100/50 py-2 rounded ">
                  <li>
                    <Link
                      href="/about"
                      onClick={closeMobileMenu}
                      className="block  text-gray-800"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academy"
                      onClick={closeMobileMenu}
                      className="block  text-gray-800"
                    >
                      Academy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      onClick={closeMobileMenu}
                      className="block  text-gray-800"
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
