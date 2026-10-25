import Image from "next/image";

const CausesHero = () => {
  return (
    <section aria-label="Каузи и ценности на Next Logistic">
      <Image
        src="/cause-img.png"
        alt="Цветен колаж с каузите и ценностите на Next Logistic"
        width={2000}
        height={1065}
        priority
        sizes="100vw"
        className="block h-auto w-full"
      />
    </section>
  );
};

export default CausesHero;