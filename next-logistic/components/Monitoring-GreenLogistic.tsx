import Image from "next/image";
import Link from "next/link";

function MonitoringGreenLogistic() {
  return (
    <section className="w-full">
      <div className="flex min-h-[650px] w-full flex-col md:flex-row">
        {/* Left */}
        <div className="relative w-full overflow-hidden md:w-1/2">
          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-black/50" />

          <Image
            src="/monitoring-green-1.png"
            alt="Monitoring Green Logistic"
            width={1000}
            height={205}
            className="h-full w-full object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 text-white md:px-16 lg:px-20">
            <h6 className="text-sm font-bold uppercase">
              Monitoring
              <hr className="mt-2 w-[35px] border-white" />
            </h6>

            <h2 className="mt-3 max-w-[650px] text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Data that ensure accuracy
              <br />
              and control
            </h2>

            <p className="mt-5 max-w-[650px] text-sm leading-6 md:text-base">
              Our systems provide precise control over every movement of the
              cargo. Thanks to our internal infrastructure, we plan with high
              accuracy and ensure timely and secure delivery — with minimal
              involvement required from the client.
            </p>

            <Link href="/#" className="mt-8 text-sm font-medium">
              Read more ￫
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="relative w-full overflow-hidden md:w-1/2">
          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-black/40" />

          <Image
            src="/monitoring-green-2.png"
            alt="Monitoring Green Logistic"
            width={1000}
            height={205}
            className="h-full w-full object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 text-white md:px-16 lg:px-20">
            <h6 className="text-sm font-bold uppercase">
              Green Logistics
              <hr className="mt-2 w-[35px] border-white" />
            </h6>

            <h2 className="mt-3 max-w-[650px] text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Data that ensure accuracy
              <br />
              and control
            </h2>

            <p className="mt-5 max-w-[650px] text-sm leading-6 md:text-base">
              Our systems provide precise control over every movement of the
              cargo. Thanks to our internal infrastructure, we plan with high
              accuracy and ensure timely and secure delivery — with minimal
              involvement required from the client.
            </p>

            <Link href="/#" className="mt-8 text-sm font-medium">
              Read more ￫
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MonitoringGreenLogistic;
