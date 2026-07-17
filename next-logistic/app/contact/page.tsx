"use client";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import { useState } from "react";
import contactFaq from "./contactFaq";
import Footer from "@/components/Footer";

function ContactPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (id: number) => {
    setOpenIndex((current) => (current === id ? null : id));
  };

  return (
    <section className="bg-blue-50 ">
      <div className="flex flex-col mt-25 gap-10 md:gap-20 items-center justify-center p-5 md:p-10 bg-blue-50 lg:flex-row lg:items-start lg:justify-center lg:gap-5">
        <div className="bg-white w-full mx-5 p-5 rounded-lg lg:w-2/3 shadow-md ">
          <h2 className="text-black text-xl mb-2 font-bold p-2">Contact us</h2>
          <div className="flex flex-col p-2">
            <p className="text-gray-700 text-lg ">
              You can contact our team by phone, email, or by filling out the
              form below.
            </p>
            <p className="text-gray-700 text-lg ">
              We process your personal data in accordance with our Privacy
              Policy.
            </p>
          </div>
          <div className="flex flex-col mt-4 md:grid md:grid-cols-2 gap-4 p-5">
            <input
              type="text"
              placeholder="URN"
              className="border rounded-md border-gray-300 p-2 mb-2 placeholder:text-black "
            />

            <input
              type="text"
              placeholder="Name"
              className="border rounded-md border-gray-300 p-2 mb-2 placeholder:text-black placeholder:opacity-90"
            />

            <input
              type="text"
              placeholder="Email"
              className="border rounded-md border-gray-300 p-2 mb-2 placeholder:text-black placeholder:opacity-70"
            />

            <input
              type="text"
              placeholder="Phone"
              className="border rounded-md border-gray-300 p-2 mb-2 placeholder:text-black placeholder:opacity-70"
            />

            <textarea
              placeholder="How can we help you?"
              className="w-full border-2 border-gray-300 rounded-md p-2 mb-2 resize-none placeholder:text-black placeholder:opacity-70 md:col-span-2"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white text-2xl  rounded-md p-2 mb-2 md:col-span-2 cursor-pointer"
            >
              Make an appointment
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="bg-white p-8 rounded-lg shadow-md w-full ">
            <h2 className="text-black  mb-2 font-bold">Contacts</h2>
            <p className="text-gray-700 text-lg">
              We will respond to your inquiries as quickly as possible and will
              be happy to help you!
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:w-full">
              <div className="flex flex-col gap-3">
                <p className="text-gray-700 text-lg">
                  <LocalPhoneIcon className="inline-block mr-2 text-blue-600" />
                  +359 893 406 767
                </p>
                <p className="text-gray-700 text-lg">
                  <EmailIcon className="inline-block mr-2 text-blue-600" />
                  office@nextlogistic.eu
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="https://www.facebook.com/nextlogistic"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-blue-600 text-blue-600"
                >
                  <FacebookIcon className="text-[18px]" />
                </Link>

                <Link
                  href="https://www.instagram.com/nextlogistic.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-blue-600 text-blue-600"
                >
                  <InstagramIcon className="text-[18px]" />
                </Link>

                <Link
                  href="https://www.linkedin.com/company/nextlogistic/posts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-blue-600 text-blue-600"
                >
                  <LinkedInIcon className="text-[18px]" />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md w-full lg:w-full ">
            <h2 className="text-black mb-2 font-bold">Address</h2>
            <p className="text-gray-700 text-lg">
              36 Rogoshko Shose St., Plovdiv
            </p>
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1478.7047524025772!2d24.77305763892986!3d42.16292138096249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd1c2b99d99c3%3A0x3bb163b6b1e1fd50!2sNext%20Logistic!5e0!3m2!1sbg!2sbg!4v1784297462261!5m2!1sbg!2sbg"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border rounded shadow-lg w-full h-64 md:h-96"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="bg-white items-center justify-center flex flex-col gap-4 p-10 md:p-20">
        <div>
          <p className="text-blue-600 font-bold text-sm text-center">
            Frequently asked questions
          </p>
          <p className="text-black text-2xl font-bold">
            Have questions? Find{" "}
            <span className="text-blue-600">
              {" "}
              the answers you&apos;re looking for.
            </span>
          </p>
        </div>
        <div className="">
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
        <Footer />
    </section>
  );
}
export default ContactPage;
