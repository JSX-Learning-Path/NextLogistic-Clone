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
  { id: "preamble", label: "Preamble", numbered: false },
  { id: "requirements", label: "Requirements for suppliers" },
  { id: "objectives", label: "Objectives" },
  { id: "actions", label: "Actions required" },
  { id: "outcomes", label: "Expected outcomes" },
  { id: "scope", label: "Scope of the Code" },
  { id: "relevance", label: "Relevance" },
  { id: "traceability", label: "Traceability and Monitoring" },
  { id: "sanctions", label: "Sanctions" },
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

const CodeOfConductForSuppliersPage = () => {
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
            CODE OF CONDUCT FOR SUPPLIERS AND BUSINESS PARTNERS
          </Typography>
          <Typography sx={{ color: "text.secondary", mt: 0.5 }}>of</Typography>
          <Typography sx={{ color: "#1A2340", fontWeight: 700, fontSize: "1.2rem", mt: 0.5 }}>Next Logistic</Typography>
          <Typography sx={{ color: "text.secondary", mt: 0.5 }}>Plovdiv, 36 Rogoshko Shose St.</Typography>
        </Box>

        <Typography sx={{ textAlign: "center", color: "#2F6FED", fontWeight: 600, mt: 2 }}>Internal Company Policy</Typography>

        <Stack direction="row" spacing={1.5} divider={<Box sx={{ color: "text.disabled" }}>•</Box>} sx={{ mt: 2.5, flexWrap: "wrap", rowGap: 1, justifyContent: "center", alignItems: "center" }}>
          <Stack direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
            <DescriptionOutlinedIcon sx={{ fontSize: 18, color: "text.secondary" }} />
            <Typography sx={{ color: "text.secondary", fontSize: "0.95rem" }}>Version 1.2</Typography>
          </Stack>
          <Stack direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
            <EventAvailableOutlinedIcon sx={{ fontSize: 18, color: "text.secondary" }} />
            <Typography sx={{ color: "text.secondary", fontSize: "0.95rem" }}>Last updated: 11.11.2025</Typography>
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
                    sx={{ display: "block", textDecoration: "none", color: isActive ? "#2F6FED" : "#5B6B8C", borderLeft: isActive ? "3px solid #2F6FED" : "3px solid transparent", pl: 1.5, fontSize: "0.98rem", fontWeight: isActive ? 700 : 400, lineHeight: 1.4, transition: "color 0.15s ease, border-color 0.15s ease", "&:hover": { color: "#2F6FED" } }}
                  >
                    {s.numbered === false ? s.label : `${number}. ${s.label}`}
                  </Box>
                );
              })}
            </Stack>
          </Box>

          <Box sx={{ flex: 1, minWidth: 0, color: "text.secondary", fontSize: "0.95rem" }}>
            <Section id="preamble" title="Preamble">
              <Typography sx={{ lineHeight: 1.7, color: "text.primary" }}>
                The Supplier and Business Partner Code of Conduct of “Next Logistics” Ltd. sets out the key principles, standards, and expectations that the company requires from its suppliers, subcontractors, and business partners. The purpose of this Code is to ensure that all parties working with “Next Logistics” Ltd. are aware of and comply with the ethical, legal, and sustainable business practices outlined herein.
              </Typography>
            </Section>

            <Section id="requirements" title="Requirements for suppliers">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Comply with all applicable national and international laws and standards, including labor and social rights, environmental protection, health and safety, competition, anti-corruption, personal data protection, and confidentiality.</Typography>
                <Typography component="li">Conduct business honestly and transparently; do not engage in bribery, fraud, or corruption. Offering, promising, or accepting improper advantages to influence business decisions is prohibited.</Typography>
                <Typography component="li">Ensure fair working conditions, a safe working environment, reasonable working hours, respect for collective bargaining rights, and non-discrimination. Forced, slave, or child labor is strictly prohibited.</Typography>
                <Typography component="li">Implement preventive measures to reduce accidents and provide appropriate training and protective equipment.</Typography>
                <Typography component="li">Minimize environmental pollution, manage waste and emissions responsibly, and promote sustainable practices.</Typography>
                <Typography component="li">Keep confidential any information obtained while working with “Next Logistics” Ltd. and use it only to fulfil contractual obligations.</Typography>
              </Box>
            </Section>

            <Section id="objectives" title="Objectives to be achieved by 31.12.2026">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Strengthened control over document flow.</Typography>
                <Typography component="li">Familiarization of suppliers and partners with the company’s policies.</Typography>
                <Typography component="li">Increase the share of suppliers with strong internal ethics, safety, and sustainability policies.</Typography>
                <Typography component="li">Implement annual monitoring regarding labor, environmental, ethical, and governance aspects.</Typography>
              </Box>
            </Section>

            <Section id="actions" title="Actions required from suppliers">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Provide information, documents, and evidence regarding compliance with requirements.</Typography>
                <Typography component="li">Implement internal procedures to prevent corruption, incidents, and labor rights violations.</Typography>
                <Typography component="li">Participate in trainings, audits, or communication initiatives when necessary.</Typography>
                <Typography component="li">Implement measures to reduce waste, optimize resource use, and improve safety.</Typography>
                <Typography component="li">Immediately report incidents, irregularities, or risks related to their work.</Typography>
              </Box>
            </Section>

            <Section id="outcomes" title="Expected outcomes">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Sustainable and transparent cooperation based on trust.</Typography>
                <Typography component="li">Improved safety and reduced number of incidents.</Typography>
                <Typography component="li">Better management of environmental risks.</Typography>
                <Typography component="li">Higher level of corporate responsibility among suppliers.</Typography>
                <Typography component="li">Documented traceability of compliance with all requirements.</Typography>
              </Box>
            </Section>

            <Section id="scope" title="Scope of the Code">
              <Box component="ul" sx={listSx}>
                <Typography component="li">All suppliers of goods and services.</Typography>
                <Typography component="li">Subcontractors, transport partners, and temporary contractors.</Typography>
                <Typography component="li">All legal or natural persons who have contractual relations with “Next Logistics” Ltd.</Typography>
              </Box>
            </Section>

            <Section id="relevance" title="Relevance">
              <Typography sx={{ lineHeight: 1.7, mb: 1 }}>The requirements apply according to the nature of the supplier’s activity, taking into account:</Typography>
              <Box component="ul" sx={listSx}>
                <Typography component="li">The type of services or materials provided.</Typography>
                <Typography component="li">Potential risks to safety, the environment, and society.</Typography>
                <Typography component="li">The scale and frequency of cooperation.</Typography>
              </Box>
            </Section>

            <Section id="traceability" title="Traceability and Monitoring">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Keeping registers and archives of audits and corrective actions.</Typography>
                <Typography component="li">Documenting incidents, improvements, and measures taken.</Typography>
                <Typography component="li">Possibility of additional audits in case of increased risk.</Typography>
              </Box>
            </Section>

            <Section id="sanctions" title="Sanctions for non-compliance">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Termination of the contractual relationship or removal from the list of approved suppliers.</Typography>
                <Typography component="li">Requirement for corrective actions within a specified timeframe.</Typography>
                <Typography component="li">Notification of competent authorities in case of legal violations.</Typography>
              </Box>
            </Section>

            <Divider sx={{ mt: 6 }} />
            <Box sx={{ mt: 3, display: "flex", alignItems: "center" }}>
              <Typography sx={{ mr: 2, fontWeight: 600, color: "#1A2340" }}>Share</Typography>
              <SocialIcons />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CodeOfConductForSuppliersPage;
