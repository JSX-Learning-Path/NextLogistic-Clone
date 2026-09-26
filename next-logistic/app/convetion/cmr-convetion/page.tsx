"use client";

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import Divider from "@mui/material/Divider";
import SocialIcons from "@/components/socials/Socials";

const SECTIONS = [
  { id: "intro", label: "Intro", numbered: false },
  { id: "preamble", label: "Preamble" },
  { id: "chapter1", label: "Chapter I" },
  { id: "chapter3", label: "Chapter III" },
  { id: "chapter4", label: "Chapter IV" },
  { id: "chapter5", label: "Chapter V" },
  { id: "chapter6", label: "Chapter VI" },
  { id: "chapter7", label: "Chapter VII" },
  { id: "chapter8", label: "Chapter VIII" },
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

export default function CMRConvetionPage() {
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
            CONVENTION ON THE CONTRACT FOR THE INTERNATIONAL CARRIAGE OF GOODS BY ROAD (CMR)
          </Typography>
          <Typography sx={{ color: "text.secondary", mt: 0.75 }}>Ratified by Decree No. 1143 of the State Council of 29.07.1977</Typography>
          <Typography sx={{ color: "text.secondary", mt: 0.5 }}>In force for Bulgaria as of 18.01.1978</Typography>
        </Box>

        <Stack direction="row" spacing={1.5} sx={{ mt: 2.5, justifyContent: "center" }}>
          <Stack direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
            <DescriptionOutlinedIcon sx={{ fontSize: 18, color: "text.secondary" }} />
            <Typography sx={{ color: "text.secondary", fontSize: "0.95rem" }}>Official text</Typography>
          </Stack>
          <Stack direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
            <EventAvailableOutlinedIcon sx={{ fontSize: 18, color: "text.secondary" }} />
            <Typography sx={{ color: "text.secondary", fontSize: "0.95rem" }}>Geneva, 19 May 1956</Typography>
          </Stack>
        </Stack>

        <Stack direction="row" sx={{ height: 4, mt: 4, borderRadius: 2, overflow: "hidden" }}>
          <Box sx={{ flex: 1, bgcolor: "#F5A623" }} />
          <Box sx={{ flex: 1, bgcolor: "#E64980" }} />
          <Box sx={{ flex: 1, bgcolor: "#17A2A0" }} />
          <Box sx={{ flex: 1, bgcolor: "#2F6FED" }} />
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
            <Section id="intro" title="Intro">
              <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.7, color: "text.primary" }}>{`The Contracting Parties,

Recognizing the advantage of standardizing the conditions governing the contract for the international carriage of goods by road, particularly in respect of the documents used for such carriage and the carrier’s liability,

Have agreed as follows:`}</Typography>
            </Section>

            <Section id="preamble" title="Preamble and Ratification">
              <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>{`Ratified by Decree No. 1143 of the State Council of 29.07.1977 – State Gazette, issue 61 of 5.08.1977.

In force for Bulgaria as of 18.01.1978. Published in the Collection of International Treaties of Bulgaria, Vol. III, 1995.`}</Typography>
            </Section>

            <Section id="chapter1" title="Chapter I: Scope of Application (Articles 1-2)">
              <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>{`Article 1
This Convention shall apply to every contract for the carriage of goods by road in vehicles for reward, when the place of taking over of the goods and the place designated for delivery, as specified in the contract, are situated in two different countries, of which at least one is a contracting country, irrespective of the place of residence and the nationality of the parties.

For the purpose of this Convention, “vehicles” shall mean motor vehicles, articulated vehicles, trailers and semi-trailers as defined in Article 4 of the Convention on Road Traffic dated 19 September 1949.

This Convention shall apply even where the carriage is performed by States or by governmental institutions or organizations.`}</Typography>
            </Section>

            <Section id="chapter3" title="Chapter III: Contract (Articles 4-16)">
              <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>{`Article 4
The contract of carriage is evidenced by the consignment note. The absence, irregularity or loss of the consignment note shall not affect the existence or validity of the contract of carriage, which shall remain subject to the provisions of this Convention.

Article 5
The consignment note shall be drawn up in three original copies...`}</Typography>
            </Section>

            <Section id="chapter4" title="Chapter IV: Liability (Articles 17-29)">
              <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>{`Article 17
The carrier shall be liable for the total or partial loss of or damage to the goods occurring between the time when he takes over the goods and the time of delivery, as well as for delay in delivery.`}</Typography>
            </Section>

            <Section id="chapter5" title="Chapter V: Claims, Actions and Jurisdiction (Articles 30-33)">
              <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>{`Article 30
When the consignee has taken delivery of the goods without having ascertained the condition thereof together with the carrier or has not made any protest addressing the carrier at the time of delivery in respect of apparent loss or damage, or within seven days in respect of hidden loss or damage, he shall be presumed to have received the goods in accordance with the contract.`}</Typography>
            </Section>

            <Section id="chapter6" title="Chapter VI: Successive Carriers (Articles 34-40)">
              <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>{`Article 34
When an international carriage, performed under a single contract, is carried out by successive road carriers, each carrier shall be responsible for the performance of the whole carriage...`}</Typography>
            </Section>

            <Section id="chapter7" title="Chapter VII: Nullity of Clauses (Article 41)">
              <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>{`Article 41
Except as provided in Article 40, any clause which is contrary to the provisions of this Convention shall be null and void.`}</Typography>
            </Section>

            <Section id="chapter8" title="Chapter VIII: Final Provisions (Articles 42-51)">
              <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>{`Article 42
This Convention shall be open for signature or accession by the States members of the Economic Commission for Europe...`}</Typography>
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
