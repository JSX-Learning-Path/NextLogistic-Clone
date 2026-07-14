export default function Footer() {
  return (
    <footer className="bg-[#163a8c] text-white">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-white/20">
        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT */}
          <div>
            <p className="text-sm uppercase tracking-widest font-semibold">
              Choose us
            </p>

            <div className="w-10 h-[2px] bg-white my-4" />

            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Trust us for secure deliveries and professional logistics
              solutions
            </h2>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 text-white hover:opacity-80 transition"
            >
              Contact us <span>›</span>
            </a>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col md:items-end justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                Subscribe to NEXT newsletter
              </h3>

              <div className="flex items-center mt-5 border-b border-white/60 pb-2 w-full md:w-[320px]">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent outline-none flex-1 placeholder-white/70"
                />

                <button className="ml-2 text-2xl hover:translate-x-1 transition">
                  ›
                </button>
              </div>
            </div>

            {/* avatars */}
            <div className="flex items-center gap-3 mt-6">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-gray-300" />
                <div className="w-7 h-7 rounded-full bg-gray-400" />
                <div className="w-7 h-7 rounded-full bg-gray-500" />
                <div className="w-7 h-7 rounded-full bg-gray-200" />
              </div>

              <p className="text-sm text-white/80">
                +48 нови абонати този месец
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MIDDLE SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* logo */}
        <div>
          <div className="text-2xl font-bold mb-4">NEXT LOGISTIC</div>
        </div>

        {/* columns */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-white/80">
            <li>Home</li>
            <li>About Us</li>
            <li>Green Logistics</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Transport </h4>
          <ul className="space-y-2 text-white/80">
            <li>Road</li>
            <li>Combined</li>
            <li>Intermodal</li>
            <li>Railway</li>
            <li>Containerized</li>
            <li>River</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-white/80">
            <li>Causes</li>
            <li>Academy</li>
            <li>Technologies</li>
            <li>News</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <p className="text-white/80">office@nextlogistic.eu</p>
          <p className="text-white/80 mt-2">
            Rogoshko Shose 36
            <br />
            Plovdiv, Bulgaria
          </p>

          <div className="mt-4">
            <a className="block">Contact</a>
          </div>
        </div>
      </div>

      {/* SOCIAL */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center border-t border-white/20">
        <p className="text-sm text-white/70">
          Next Logistics 2025 © All rights reserved
        </p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <div className="w-8 h-8 bg-white/20 rounded-full" />
          <div className="w-8 h-8 bg-white/20 rounded-full" />
          <div className="w-8 h-8 bg-white/20 rounded-full" />
        </div>
      </div>
    </footer>
  );
}
