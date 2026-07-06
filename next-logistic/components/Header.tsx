"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import image from "@/public/image.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

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
            <Link href="/" className="text-sm font-medium text-blue-600">
              Home
            </Link>
            <div className="relative group ">
              <button className="flex items-center gap-1 text-sm font-medium text text-gray-700 ">
                Company
                <span className="ml-1">▾</span>
              </button>
              <div className="invisible group-hover:visible opacity:0 group-hover:opacity-100 transition-all absolute left-0 mt-2 w-56 bg-white shadow-lg rounded p-3 z-10 transition">
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/about" className="block p-1 ">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link href="/academy" className="block p-1 ">
                      Academy
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="block p-1 ">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/causes" className="block p-1 ">
                      Causes
                    </Link>
                  </li>
                  <li>
                    <Link href="/techlogies" className="block p-1 ">
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link href="/greenLogistics" className="block p-1 ">
                      Green Logistics
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-gray-700">
                Transport <span className="ml-1">▾</span>
              </button>
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all absolute left-0 mt-2 w-56 bg-white shadow-lg rounded p-3 z-10">
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/roadTransport" className="block py-1">
                      Road Transport
                    </Link>
                  </li>
                  <li>
                    <Link href="/academy" className="block py-1">
                      Academy
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
              </div>
            </div>
            <Link href="/news" className="block py-1">
              News
            </Link>
            <Link href="/contact" className="block py-1">
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
                className="w-full flex justify-between items-center"
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
