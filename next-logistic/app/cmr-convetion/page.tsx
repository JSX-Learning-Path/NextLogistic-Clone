"use client";

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Divider from "@mui/material/Divider";
import SocialIcons from "@/components/socials/Socials";

const SECTIONS = [
  { id: "preamble", label: "Preamble", numbered: false },
  { id: "chapter1", label: "Scope (Ch. I)" },
  { id: "chapter2", label: "Persons (Ch. II)" },
  { id: "chapter3", label: "Contract (Ch. III)" },
  { id: "chapter4", label: "Liability (Ch. IV)" },
  { id: "chapter5", label: "Claims & Jurisdiction (Ch. V)" },
  { id: "chapter6", label: "Successive carriers (Ch. VI)" },
  { id: "chapter7", label: "Nullity (Ch. VII)" },
  { id: "chapter8", label: "Final provisions (Ch. VIII)" },
];

const listSx = {
  color: "text.secondary",
  mt: 1,
  pl: 3,
  pr: 1,
  listStyleType: "disc",
  listStylePosition: "outside",
  textAlign: "left",
  m: 0,
  "& li": {
    mb: 0.75,
    lineHeight: 1.6,
    fontSize: "0.95rem",
    display: "list-item",
  },
};

const heading = {
  color: "#1A2340",
  fontWeight: 700,
  fontSize: "1.15rem",
  mt: 6,
  mb: 2,
  pl: 2,
  borderLeft: "3px solid #2F6FED",
};

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <Box id={id} sx={{ scrollMarginTop: "96px" }}>
      <Typography component="h2" sx={heading}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default function CmrConvetionPage() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ids = SECTIONS.map((s) => s.id);
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { root: null, rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <Box component="section" sx={{ bgcolor: "#FFFFFF", minHeight: "100vh", py: { xs: 5, md: 8 }, px: { xs: 2, md: 6 } }}>
      <Box sx={{ maxWidth: 1000, mx: "auto" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" component="h1" sx={{ color: "#1A2340", fontWeight: 700, fontSize: { xs: "1.5rem", md: "1.9rem" } }}>
            Convention on the Contract for the International Carriage of Goods by Road (CMR)
          </Typography>
          <Typography sx={{ color: "text.secondary", mt: 0.5 }}>Official text (Bulgarian)</Typography>
        </Box>

        <Stack direction="row" spacing={1.5} sx={{ mt: 2.5, justifyContent: "center" }}>
          <Stack direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
            <DescriptionOutlinedIcon sx={{ fontSize: 18, color: "text.secondary" }} />
            <Typography sx={{ color: "text.secondary", fontSize: "0.95rem" }}>Text extracted</Typography>
          </Stack>
        </Stack>

        <Box sx={{ display: "flex", gap: { md: 6 }, mt: { xs: 4, md: 6 }, alignItems: "flex-start", flexDirection: { xs: "column", md: "row" } }}>
          <Box component="nav" sx={{ width: { xs: "100%", md: 280 }, flexShrink: 0, bgcolor: "#EEF2FC", borderRadius: 4, px: 3.5, py: 4, position: { md: "sticky" }, top: { md: 96 } }}>
            <Typography sx={{ color: "#1A2340", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.02em", textTransform: "uppercase", mb: 2.5 }}>Contents</Typography>
            <Stack spacing={2.25}>
              {SECTIONS.map((s, i) => {
                const isActive = activeId === s.id;
                const number = SECTIONS.slice(0, i + 1).filter((x) => x.numbered !== false).length;
                return (
                  <Box
                    key={s.id}
                    component="a"
                    href={`#${s.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(s.id);
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                      history.replaceState(null, "", `#${s.id}`);
                      setActiveId(s.id);
                    }}
                    sx={{ display: "block", textDecoration: "none", color: isActive ? "#2F6FED" : "#5B6B8C", borderLeft: isActive ? "3px solid #2F6FED" : "3px solid transparent", pl: 1.5, fontSize: "0.98rem", fontWeight: isActive ? 700 : 400 }}
                  >
                    {s.numbered === false ? s.label : `${number}. ${s.label}`}
                  </Box>
                );
              })}
            </Stack>
          </Box>

          <Box sx={{ flex: 1, minWidth: 0, color: "text.secondary", fontSize: "0.95rem" }}>
            <Section id="preamble" title="Preamble">
              <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.7, color: "text.primary" }}>{`Договарящите страни,

Признавайки ползата от уреждането по единен начин на условията на договора за международен автомобилен превоз на стоки, особено по отношение на използваните документи за този транспорт и отговорността на превозвача,

се споразумяха за следното:`}</Typography>
            </Section>

            <Section id="chapter1" title="Chapter I: Scope of application (Articles 1-2)">
              <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>{`Член 1
Тази конвенция се прилага за всеки договор за автомобилен превоз на стоки с превозни средства срещу заплащане, когато мястото на приемане на стоката за превоз и предвиденото място за доставянето ѝ, така както са посочени в договора, се намират в две различни държави, от които поне една е договаряща страна. Това е така независимо от седалището и националността на страните.

При прилагането на тази конвенция под „превозни средства“ трябва да се разбират автомобилите, ремаркетата и полуремаркетата, така както са определени в член 4 от Конвенцията за движение по пътищата от 19 септември 1949 г.

Тази конвенция се прилага дори когато превозите, влизащи в нейния обхват, се извършват от държави или от правителствени институции и организации.

Тази конвенция не се прилага:

a) при превозите, извършвани в обсега на международните пощенски конвенции;

б) при превоза на тленни останки;

в) при превоза на вещи при промяна на местожителство.

Договарящите страни се задължават да не внасят по пътя на отделни споразумения, сключени между две или повече от тях, каквото и да било изменение в тази конвенция, освен за да изключат от нейния обсег граничния си трафик или за да позволят употребата на товарителница, обявяваща стоката, при превозите, осъществявани изключително на тяхна територия.

Член 2
Когато натовареното превозно средство се превозва по море, железница, вътрешен воден път или по въздуха за част от маршрута, без претоварване, тази конвенция се прилага за целия превоз, освен в случай на приложение на разпоредбите на чл. 14. Все пак, доколкото се докаже, че загубването, повреждането или закъснението при доставянето на стоката, станали по време на превоза с някои от другите видове транспорт, освен пътния, не са били предизвикани от действие или бездействие на автомобилния превозвач и че се дължат на причина, която е могла да настъпи само по време и вследствие на неавтомобилния превоз, отговорността на автомобилния превозвач се определя не от тази конвенция, а по начина, по който би била определена отговорността на неавтомобилния превозвач, ако беше сключен договор за превоз между изпращача и неавтомобилния превозвач, само за превоза на стоката, в съответствие с императивните разпоредби на закона за превоза на стоката с неавтомобилен вид транспорт. Все пак, при отсъствие на подобни разпоредби, отговорността на пътния превозвач се определя от тази конвенция.

Когато автомобилният и неавтомобилният превозвач са едно и също лице, неговата отговорност се определя от параграф 1, все едно че неговите функции на автомобилен и неавтомобилен превозвач се изпълняват от две различни лица.`}</Typography>
            </Section>

            <Section id="chapter2" title="Chapter II: Persons for whom the carrier is responsible (Article 3)">
              <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>{`Член 3
При приложението на тази конвенция превозвачът отговаря като за свои действия и пропуски за действията и пропуските на своите служители и на всички други лица, до чиито услуги е прибягнал за извършването на превоза, когато тези негови служители или лица действуват в изпълнение на техните функции.`}</Typography>
            </Section>

            <Section id="chapter3" title="Chapter III: Conclusion and performance of the contract (Articles 4-16)">
              <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>{`Член 4
Договорът за превоз се установява с товарителница. Липсата, нередовността или загубата на товарителницата не засягат нито съществуването, нито действието на договора за превоз, който остава подчинен на разпоредбите на тази конвенция.

Член 5
Товарителницата се изготвя в три оригинални екземпляра, подписани от изпращача и от превозвача. ...`}</Typography>
            </Section>

            <Section id="chapter4" title="Chapter IV: Liability of the carrier (Articles 17-29)">
              <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>{`Член 17
Превозвачът е отговорен за цялостната или частична липса или повреда на стоката от момента на приемането ѝ за превоз до този на доставянето ѝ, както и за забавата при доставянето ѝ.

Член 18
Доказването, че липсата, повредата или забавата са причинени от един от фактите, предвидени в чл. 17, параграф 2, е в тежест на превозвача.`}</Typography>
            </Section>

            <Section id="chapter5" title="Chapter V: Claims, actions and jurisdiction (Articles 30-33)">
              <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>{`Член 30
Когато получателят е получил стоката, без да е установил състоянието ѝ съвместно с превозвача или е направил възражения пред превозвача най-късно в момента на доставянето, ако се касае за явни липси и повреди, или в срок от седем дни, считано от доставянето (празничните и неделните дни не се броят), ако се касае до скрити липси и повреди, като посочи общото естество на липсата или повредата, счита се, до доказване на противното, че е получил стоката в състоянието, описано в товарителницата.`}</Typography>
            </Section>

            <Section id="chapter6" title="Chapter VI: Successive carriers (Articles 34-40)">
              <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>{`Член 34
Когато един превоз, извършван в изпълнение на един-единствен договор, се осъществява от последователни пътни превозвачи, всеки от тях поема отговорността за изпълнението на цялостния превоз, като вторият и следващите превозвачи стават страна по договора с приемането на стоката и товарителницата, при условията, посочени в товарителницата.`}</Typography>
            </Section>

            <Section id="chapter7" title="Chapter VII: Nullity of clauses contrary to the Convention (Article 41)">
              <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>{`Член 41
С изключение на разпоредбите на член 40, нищожна и без правно действие е всяка клауза, която пряко или косвено противоречи на разпоредбите на тази конвенция.`}</Typography>
            </Section>

            <Section id="chapter8" title="Chapter VIII: Final provisions (Articles 42-51)">
              <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>{`Член 42
Тази конвенция е открита за подписване или присъединяване от държавите-членки на Икономическата комисия за Европа...`}</Typography>
            </Section>

            <Divider sx={{ mt: 3 }} />
            <Box sx={{ mt: 3, display: "flex", alignItems: "center" }}>
              <Typography sx={{ mr: 2, fontWeight: 600 }}>Share</Typography>
              <SocialIcons />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
