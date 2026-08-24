import Image from "next/image";

function Academy() {
  return (
    <section className="w-full bg-black">
      <div className="relative w-full bg-black pb-40 lg:pb-52">
        <div className="absolute inset-0 z-10 bg-linear-to-r from-black/30 to-black/40" />

        <Image
          src="/academy-girls-talking.png"
          alt="Academy Girls"
          width={700}
          height={475}
          className="w-full h-auto"
        />

        <div className="absolute top-[48%]">
          <div className="rounded-xl bg-blue-600/80 py-4">
            <h2 className="mb-2 px-4 text-3xl font-bold uppercase md:text-4xl lg:text-5xl">
              digital academy
            </h2>

            <h4 className="text-xl font-semibold uppercase">
              internal training system
            </h4>

            <p className="px-5 pt-5 text-sm font-semibold md:pb-10 md:text-base">
              A platform created to support the professional development of the
              team. It includes structured courses, practical materials, and
              useful resources that enable skill enhancement and the application
              of best practices in daily work. The trainings cover key topics
              such as international regulations, recent legislative changes, and
              the latest trends in the field of domestic and international
              logistics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Academy;
