import ServiceCarousel from "./ServiceCarousel";
function TransportServices() {
  return (
    <section className="bg-white">
      <div className="space-y-6  rounded-xl w-full bg-white mx-auto p-6 sm:p-10 lg:p-12">
        <span className="text-sm text-indigo-500 font-semibold mb-3">
          Types of transport services
          <hr className="border-blue-600 w-[30px]" />
        </span>
        <h2 className="text-blue-600 mt-5 font-bold text-2xl">
          <span className="text-2xl font-extrabold text-black/70">
            Multimodal solutions <span className="text-blue-600"> </span>
          </span>
          for global business
        </h2>
        <p className="text-gray-600">
          Next Logistic provides a wide range of transport services tailored to
          business needs, with deliveries across more than 30 countries. From
          road and rail transport to intermodal and maritime solutions, the
          company builds multimodal logistics that ensure efficiency,
          reliability, and high quality. With strategically developed networks
          and precise planning, we provide trade security, predictability, and
          optimal delivery schedules for our partners.
        </p>
      </div>
      <ServiceCarousel />
    </section>
  );
}

export default TransportServices;
