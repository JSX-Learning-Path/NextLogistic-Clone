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

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const [transport, setOpenTransport] = useState(false);
  return (
    <header className="w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4 ">
        {/* Left: logo */}
        <div className="flex items-center gap-5">
          <Link href="/" aria-label="Next Logistic Home">
            <Image
              src={image}
              alt="Nextlogistic"
              width={78}
              height={30}
              className="hidden md:block"
            />
          </Link>
        </div>

        {/* Center navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex items-center gap-8" aria-label="Main menu">
            <Link
              href="/"
              className="text-sm font-medium text-blue-600 font-bold"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-bold text-gray-500">
                Company
                <span className="ml-1">▾</span>
              </button>
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all absolute left-0 mt-2 w-156 bg-white shadow-lg rounded p-3 z-10 transition">
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
              <button className="flex items-center gap-1 text-sm font-bold text-gray-500">
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
            <Link href="/news" className="block py-1">
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

        {/* Right: socials */}
        <div className="flex items-center gap-3">
          <Link
            href="https://www.linkedin.com/company/nextlogistic/posts/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            className="text-blue-600 "
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
            href="https://www.instagram.com/nextlogistic/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-blue-600 "
          >
            <InstagramIcon />
          </Link>
        </div>
      </nav>
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="p-4 space-y-3">
            <div>
              <button
                onClick={() => setOpenCompany((s) => !s)}
                className="w-full flex justify-between items-center"
              >
                Company<span className="ml-1">▾</span>
              </button>
              {openCompany && (
                <ul className="mt-2 space-y-1">
                  <li>
                    <Link href="/about" className="block py-1">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" className="block py-1">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="block py-1">
                      Careers
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <div>
              <button
                onClick={() => setOpenTransport((s) => !s)}
                className="w-full flex justify-between items-center  font-bold text-gray-500"
              >
                Transport<span className="ml-1">▾</span>
              </button>
              {transport && (
                <ul className="mt-2 space-y-1">
                  <li>
                    <Link href="/roadTransport" className="block py-1">
                      Road Transport
                    </Link>
                  </li>
                  <li>
                    <Link href="/railwayTransport" className="block py-1">
                      Rail Transport
                    </Link>
                  </li>
                  <li>
                    <Link href="/combinedTransport" className="block py-1">
                      Combined Transport
                    </Link>
                  </li>
                  <li>
                    <Link href="/containerTransport" className="block py-1">
                      Container Transport
                    </Link>
                  </li>
                  <li>
                    <Link href="/riverTransport" className="block py-1">
                      River Transport
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
