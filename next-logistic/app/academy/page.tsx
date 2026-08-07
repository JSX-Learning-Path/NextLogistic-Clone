import Image from "next/image";
function Academy() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen bg-black">
      <div className="absolute inset-0 z-10 bg-linear-to-r from-black/30 to-black/40"></div>
      <Image
        src="/academy-girls-talking.png"
        alt="Academy Girls"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-x-0 bottom-0 z-10 text-center text-white pb-2 mx-3 xl:bottom-auto xl:top-2/3 xl:-translate-y-1/2 xl:w-1/2 xl:mx-auto">
        <div className="bg-blue-600 rounded-xl w-full opacity-90 py-2">
          <h2 className="uppercase text-3xl font-bold mb-2 md:text-3xl md:mb-3 lg:text-5xl lg:mb-2 md:pt-2">
            digital academy
          </h2>
          <h4 className="text-xl font-semibold uppercase">
            internal training system
          </h4>
          <p className="px-5 pt-5 text-white text-sm font-semibold md:text-sm md:pb-10">
            A platform created to support the professional development of the
            team. It includes structured courses, practical materials, and
            useful resources that enable skill enhancement and the application
            of best practices in daily work. The trainings cover key topics such
            as international regulations, recent legislative changes, and the
            latest trends in the field of domestic and international logistics.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Academy;
