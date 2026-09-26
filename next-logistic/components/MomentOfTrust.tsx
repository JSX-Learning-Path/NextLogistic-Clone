import Image from "next/image";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DiamondIcon from "@mui/icons-material/Diamond";
import WorkIcon from "@mui/icons-material/Work";
import Link from "next/link";

function MomentOfTrust() {
  return (
    <section className="bg-[#111418] w-full min-h-screen py-10 md:py-20">
      <div className="lg:flex lg:flex-row">
        {/* LEFT SIDE - TEXT */}
        <div className="w-full lg:w-1/2 px-10 lg:px-20">
          <div className="flex flex-col">
            <h6 className="text-blue-600 text-sm uppercase font-bold">
              A moment of Trust
            </h6>

            <hr className="border-blue-600 w-7.5 mt-2" />
          </div>
          <div className="mt-6">
            <h1 className="text-white text-2xl font-bold">
              The Future of <span className="text-blue-600">Logistic</span>
            </h1>
          </div>
          <div className="mt-5">
            <p className="text-sm text-white ">
              At Next Logistic, we believe that success is built on trust and
              sustainable relationships. We founded the company with the
              ambition to offer not just logistics services, but comprehensive
              solutions that drive your success. Our mission is to deliver
              innovation, security, and reliability that exceed expectations and
              set new standards in the industry.
            </p>
          </div>
          <div className="mt-5">
            <p className="text-sm text-white ">
              From our very first transport until today, our focus has always
              been on building strong relationships and developing lasting
              partnerships. By implementing modern technologies and innovative
              approaches, we ensure efficiency, transparency, and competitive
              advantages for our clients. We are here to support your growth
              with personalized solutions tailored to market dynamics and your
              specific needs.
            </p>
          </div>
          <div className="mt-5">
            <p className="text-sm text-white ">
              We strive to be a partner you can rely on – in every delivery, in
              every endeavor, in every step toward the future. For us, trust is
              not just a moment, but a long-term commitment.
            </p>
          </div>
          {/* CEO */}
          <div className="flex items-center mt-10">
            <Image
              src="/mr-bosneshki.png"
              alt="Mr. Bosneshki"
              width={100}
              height={100}
              className="rounded-full border border-white p-1"
            />
            <div className="ml-4">
              <h6 className="text-white text-sm uppercase font-bold">
                Vasil Bosneshki
              </h6>

              <p className="text-sm text-white">CEO</p>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE - COSMONAUT */}
        <div className="w-full mt-10 lg:w-1/2 lg:mx-15 lg:mt-0 ">
          <div className="relative grid h-[700px] grid-cols-2 grid-rows-2">
            <Image
              src="/cosmonavt-of-trust.png"
              alt="Cosmonaut of Trust"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            {/* TECHNOLOGIES */}
            <div className="relative bg-blue-600/50 p-8 px-10">
              <RocketLaunchIcon
                sx={{
                  color: "white",
                  fontSize: 40,
                  backgroundColor: "black",
                  padding: "7px",
                  borderRadius: "40px",
                }}
              />

              <div className="mt-5">
                <h2 className="text-white text-lg font-bold uppercase">
                  Technologies
                </h2>

                <p className="text-white">
                  We implement cutting-edge technologies that transform
                  logistics and ensure security and efficiency at every step.
                </p>

                <Link href="/technologies" className="text-white">
                  Read More
                </Link>
              </div>
            </div>

            {/* CAUSES */}
            <div className="relative bg-[#374A6A]/50 p-8">
              <FavoriteIcon
                sx={{
                  color: "white",
                  fontSize: 40,
                  backgroundColor: "black",
                  padding: "7px",
                  borderRadius: "40px",
                }}
              />

              <div className="mt-5">
                <h2 className="text-white text-lg font-bold uppercase">
                  Causes
                </h2>

                <p className="text-white">
                  We support various social and environmental causes, ensuring
                  our growth positively impacts the world.
                </p>

                <Link href="/causes" className="text-white">
                  Read More
                </Link>
              </div>
            </div>

            {/* ACADEMY */}
            <div className="relative bg-[#2E2F31]/50 p-8">
              <DiamondIcon
                sx={{
                  color: "white",
                  fontSize: 40,
                  backgroundColor: "black",
                  padding: "7px",
                  borderRadius: "40px",
                }}
              />

              <div className="mt-5">
                <h2 className="text-white text-lg font-bold uppercase">
                  Academy
                </h2>

                <p className="text-white">
                  We offer training and resources to help our partners excel in
                  the logistics industry.
                </p>

                <Link href="/academy" className="text-white">
                  Read More
                </Link>
              </div>
            </div>

            {/* FREE POSITIONS */}
            <div className="relative bg-[#65696E]/50 p-8">
              <WorkIcon
                sx={{
                  color: "white",
                  fontSize: 40,
                  backgroundColor: "black",
                  padding: "7px",
                  borderRadius: "40px",
                }}
              />

              <div className="mt-5">
                <h2 className="text-white text-lg font-bold uppercase">
                  Free Positions
                </h2>

                <p className="text-white">
                  We are constantly looking for talented individuals to join our
                  team and help us shape the future of logistics.
                </p>

                <Link href="/careers" className="text-white italic">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MomentOfTrust;
