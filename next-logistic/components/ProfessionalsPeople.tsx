import Image from "next/image";

const teamMembers = [
    {
        name: "Ganka Moncheva",
        role: "Chief Accountant",
        image: "/ganka.png",
    },
    {
        name: "Nasie Hashimova",
        role: "Manager",
        image: "/nasie.png",
    },
    {
        name: "Tihomir Blajev",
        role: "Engineering Manager",
        image: "/tihomir.png",
    },
    {
        name: "Galina Laleva",
        role: "Deputy Manager",
        image: "/galina.png",
    },
    {
        name: "Rumen Minkov",
        role: "Manager",
        image: "/rumen.png",
    },
    {
        name: "Petya Tsvetanova",
        role: "Manager",
        image: "/petya.png",
    },
    {
        name: "Belon Manukian",
        role: "Engineering Manager",
        image: "/belon.png",
    },
    {
        name: "Eduard Bashev",
        role: "Deputy Manager",
        image: "/edie.png",
    },
];

const Arrow = () => (
    <span aria-hidden="true" className="text-xl leading-none">
        ›
    </span>
);


const LightbulbIcon = () => (
    <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 fill-current"
    >
        <path d="M9 21h6v-1H9v1Zm   3-19a7 7 0 0 0-4.21 12.59c.77.58 1.21 1.33 1.21 2.16V17h6v-.25c0-.83.44-1.58 1.21-2.16A7 7 0 0 0 12 2Zm-3 17h6v-1H9v1Z" />
    </svg>
);

const FutureCard = ({ label, card = null, title, children, link = '', highlighted = false }: {
    label: string;
    title: React.ReactNode;
    card?: React.ReactNode;
    children: React.ReactNode;
    link?: string;
    highlighted?: boolean;
}) => {
    return (
        <article className={`min-h-[200px] border border-t-0 border-[#dddddd] p-6 md:p-8 lg:min-h-[302px] ${highlighted ? 'bg-[#edf3ff]' : 'bg-white'}`}>
            <div className="flex items-center gap-4 border-b border-[#d7d7d7] pb-4 text-[#44516b]">
                <span className="text-[#3264ff]">{LightbulbIcon()}</span>
                <span className="text-sm font-semibold">{label}</span>
            </div>
            <h3 className="mt-8 max-w-[310px] text-xl font-bold leading-7 text-[#2860ff]">{title}</h3>
            <div className="mt-6 max-w-[340px] text-[17px] leading-6 text-[#47516a]">{children}</div>
            {link && (
                <a href={link} className="mt-5 inline-flex items-center gap-3 font-medium text-base text-[#2860ff] transition hover:gap-4 hover:text-blue-800" >Learn More</a>
            )}

        </article>
    );
};

function ProfessionalsPeople() {
    return (
        <section className="bg-white px-4 py-8 sm:px-6 lg:px-12">

            <div className="mx-auto max-w-[1540px] mt-5 ">
                <h5 className="text-lg font-semibold text-[#3264ff] mt-5"> The people behind the success</h5>
                <hr className="border-blue-600 w-[35px]" />
                <h2 className="mb-9 text-2xl font-extrabold leading-tight text-[#33313c] sm:text-3xl mt-5">Professionals ,<span className="text-[#3264ff]">who are creating the future of the industry</span></h2>
                <div className="grid overflow-hidden border-t border-[#dddddd] lg:grid-cols-2 ">
                    <div className="grid md:grid-cols-2">
                        <article className="min-h-[300px] border border-t-0 border-[#dddddd] p-6 md:min-h-[301px] md:p-8">

                            <h3 className="max-w-[320px] text-xl font-bold leading-7 text-[#2860ff]">
                                Leadership with a vision for sustainable development
                            </h3>

                            <p className="mt-6 max-w-[330px] text-[17px] leading-6 text-[#47516a]">
                                Collaboration and mutual support are at the core of our
                                success. We believe that together, we can achieve more.
                            </p>
                        </article>
                        <article className="flex min-h-[300px] flex-col border border-l-0 border-t-0 border-[#dddddd] p-6 md:min-h-[301px] md:p-8">
                            <h3 className="max-w-[330px] text-xl font-bold leading-7 text-[#2860ff]">
                                The team that changes the rules of logistics
                            </h3>

                            <p className="mt-6 max-w-[340px] text-[17px] leading-6 text-[#47516a]">
                                Every success begins with people. Our team combines
                                professionalism and creativity to create innovations that
                                transform the industry. Discover their stories.
                            </p>
                            <a href="/team" className="mt-auto inline-flex items-center gap-3 pt-6 text-base font-medium text-[#2860ff] transition hover:gap-4 hover:text-blue-800">Team <Arrow /></a>
                        </article>
                        <FutureCard label="Teamwork" title={<>The Power of unity , <br />in achieving success</>}>
                            <p>                Collaboration and trust are the foundation of our work. Together, we overcome every challenge and strive to reach new heights.
                            </p>
                        </FutureCard>
                        <FutureCard label="Innovation" title="Creativity that changes the industry" highlighted={true}>
                            <p>
                                Innovation is at the heart of what we do. Our team is constantly pushing boundaries and exploring new ideas to drive progress.
                            </p>
                            <a href="/team" className="mt-auto inline-flex items-center gap-3 pt-6 text-base font-medium text-[#2860ff] transition hover:gap-4 hover:text-blue-800">Careers <Arrow /></a>
                        </FutureCard>
                    </div>
                    <div className="flex min-0 flex-col">
                        <div className="grid grid-cols-2 sm:grid-cols-4 flex-1">
                            {teamMembers.map((member) => (
                                <article key={member.name} className="flex min-h-[140px] flex-col items-center justify-center border-b border-r border-[#dddddd] px-2 py-4 text-center">
                                    <img src={member.image} alt={member.name} className="h-14 w-14 rounded-full object-cover"></img>
                                    <h3 className="mt-3 text-base font-bold leading-5 text-black">{member.name}</h3>
                                    <p className="mt-1 text-sm leading-5 text-[#59627a]">{member.role}</p>
                                </article>
                            ))}
                            { /* The empty cell for the biggest picture*/}
                            <div className="h-[354px] w-full sm:col-span-4 ">
                                <img src="/coworker.png" alt="Team" className="h-full w-full object-cover " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ProfessionalsPeople