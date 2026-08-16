import { hash } from "crypto";

function SocialMedia() {
    const posts = [
        {
            image: "/newspaper-girl.png",
        },
        {
            image: "/insta-girl.png",
        },
        {
            image: "/selfie-girl.png",
        },
        {
            image: "/playing-game.png",
        },
        {
            image: "/laptop-girl.png",
        },
    ];
    const hashtags = [
        "#NextLogisticsTeam",
        "#WorkWithNextLogistics",
        "#NextLogisticsMoments",
        "#NextLogisticsFun",
        "#NextLogisticsCulture",
        "#WorkHardPlayHard",
        "#TeamSpirit",
        "#ProudToBeNextLogistic",
        "#CorporateCulture",
        "#WorkStyle",
    ];
    return (
        <section className="bg-white w-full py-16 md:py-20">
            <div className="mx-auto max-w-[1250px] px-5">
                <h2 className="text-center text-blue-600 text-[27px] font-bold leading-tight ">
                    Find us on {" "}
                    <span className="text-black/80"> social media</span>
                </h2>
                <div className="mx-auto mt-10 flex max-w-[850px] flex-wrap justify-center gap-2">
                    {hashtags.map((tag, index) => (
                        <span key={index} className="text-black/80 rounded-full border border-blue-600 px-3 py-1 text-sm text-blue-600">{tag}</span>
                    ))}
                </div>
            </div>
            <div className="mx-auto mt-8 flex max-w-[1050px] items-start justify-center gap-5 overflow-x-auto pb-5 lg:overflow-visible">
                {posts.map((post, index) => (
                    <div key={index} className={`group w-[250px] min-w-[250px] overflow-hidden rounded-[11px] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.16)] transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-102 hover:shadow-[0_18px_35px_rgba(0,0,0,0.22)]
                                `}>
                        <img src={post.image} alt={`Social media post ${index + 1}`} className="h-full w-full object-cover" />
                    </div>
                ))}
            </div>
        </section>

    )
}


export default SocialMedia