"use client";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlaceIcon from "@mui/icons-material/Place";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import { useState } from "react";
import contactFaq from "./contactFaq";

function ContactPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (id: number) => {
    setOpenIndex((current) => (current === id ? null : id));
  };

  return (
    <section className="bg-[rgb(238,242,251)]  mt-10">
      <div className="flex justify-center p-5 md:p-10">
        <div className="w-full max-w-5xl overflow-hidden rounded-3xl shadow-xl flex flex-col lg:flex-row">
          {/* Left - form */}
          <div className="bg-white w-full lg:w-1/2 p-8 md:p-12">
            <h2 className="text-black text-3xl md:text-4xl font-serif font-bold mb-4">
            Contact us
            </h2>
            <p className="text-gray-600 text-base mb-6">
             You can reach our team by phone, by email, or by filling in the form below. We process your personal data in accordance with our {" "}
              <Link
                href="/privacy-policy"
                className="text-blue-600 font-medium underline"
              >
                Privacy Policy
              </Link>
              .
            </p>

            <form className="flex flex-col gap-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="border rounded-lg border-gray-300 p-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border rounded-lg border-gray-300 p-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded-lg border-gray-300 p-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="border rounded-lg border-gray-300 p-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <textarea
                placeholder="How can we help you?"
                rows={4}
                className="w-full border rounded-lg border-gray-300 p-3 resize-none placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition-colors text-white text-lg font-medium rounded-lg p-3 mt-2 cursor-pointer"
              >
               Send enquiry
              </button>

              <p className="text-center text-sm text-gray-500 mt-1">
              By submitting you agree to our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-blue-600 underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>

          {/* Right - contacts */}
          <div className="bg-blue-700 w-full lg:w-1/2 p-8 md:p-12 text-white flex flex-col">
            <h2 className="text-2xl font-bold mb-2">Contacts</h2>
            <p className="text-blue-100 mb-6">
            We will respond to your enquiries as quickly as possible and will be glad to help!
            </p>

            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600">
                  <LocalPhoneIcon className="text-white text-[20px]" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-blue-200">
                    Phone
                  </p>
                  <p className="font-semibold">+359 893 406 767</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600">
                  <EmailIcon className="text-white text-[20px]" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-blue-200">
                    Email
                  </p>
                  <p className="font-semibold">office@nextlogistic.eu</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600">
                  <PlaceIcon className="text-white text-[20px]" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-blue-200">
                    Address 
                  </p>
                  <p className="font-semibold">36 Rogoshko Shose St., Plovdiv</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <Link
                href="https://www.facebook.com/nextlogistic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 transition-colors"
              >
                <FacebookIcon className="text-white text-[18px]" />
              </Link>

              <Link
                href="https://www.instagram.com/nextlogistic.eu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 transition-colors"
              >
                <InstagramIcon className="text-white text-[18px]" />
              </Link>

              <Link
                href="https://www.linkedin.com/company/nextlogistic/posts/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 transition-colors"
              >
                <LinkedInIcon className="text-white text-[18px]" />
              </Link>
            </div>

            <div className="relative rounded-xl overflow-hidden flex-1 min-h-[220px]">
              <a
                href="https://www.google.com/maps/place/Next+Logistic/@42.16292138096249,24.77305763892986,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-white text-blue-600 text-sm font-medium px-3 py-1.5 rounded-md shadow-md"
              >
                Open in Maps
                <OpenInNewIcon className="text-[14px]" />
              </a>
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1478.7047524025772!2d24.77305763892986!3d42.16292138096249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd1c2b99d99c3%3A0x3bb163b6b1e1fd50!2sNext%20Logistic!5e0!3m2!1sbg!2sbg!4v1784297462261!5m2!1sbg!2sbg"
                height="100%"
                width="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[220px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white items-center justify-center flex flex-col gap-4 p-10 md:p-20">
        <div>
          <p className="text-blue-600 font-bold text-sm text-center">
            Често задавани въпроси
          </p>
          <p className="text-black text-2xl font-bold text-center">
            Имате въпроси?{" "}
            <span className="text-blue-600">Намерете отговорите тук.</span>
          </p>
        </div>
        <div className="w-full max-w-3xl">
          {contactFaq.map((faq) => (
            <div
              key={faq.id}
              className="border-b border-blue-100 py-3 last:border-b-0"
            >
              <button
                type="button"
                onClick={() => toggleAnswer(faq.id)}
                className="flex w-full items-center justify-between gap-4 text-left"
                aria-expanded={openIndex === faq.id}
              >
                <h3 className="text-base font-semibold text-black md:text-lg">
                  {faq.question}
                </h3>
                <KeyboardArrowDownIcon
                  className={`shrink-0 text-black transition-transform duration-300 ${
                    openIndex === faq.id ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === faq.id
                    ? "mt-2 max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm leading-6 text-gray-700 md:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ContactPage;