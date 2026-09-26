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
  { id: "objectives", label: "Policy objectives" },
  { id: "scope", label: "Scope" },
  { id: "principles", label: "Principles" },
  { id: "suppliers", label: "Supplier requirements" },
  { id: "selection", label: "Selection & evaluation" },
  { id: "targets", label: "Objectives (by 31.12.2026)" },
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

export default function LogisticSustainability() {
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
            Logistic Sustainability Policy
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
                At “Next Logistics” Ltd., we are committed to providing high-quality logistics services while reducing negative environmental impact and promoting social responsibility. Our goal is to minimize the negative environmental impact, promote social responsibility, and ensure long-term economic sustainability through collaboration with partners and suppliers who share our values. Through strategic combination of road, rail, sea, and river transport, we ensure flexibility and reliability for all types of cargo.
              </Typography>
            </Section>

            <Section id="objectives" title="Policy objectives">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Providing sustainable and efficient logistics solutions.</Typography>
                <Typography component="li">Minimizing carbon footprint and resource consumption.</Typography>
                <Typography component="li">Supporting ethical practices and social responsibility among suppliers.</Typography>
                <Typography component="li">Optimizing costs without compromising quality and sustainability.</Typography>
                <Typography component="li">Improving transparency, accountability, and risk management in supply chains.</Typography>
              </Box>
            </Section>

            <Section id="scope" title="Scope">
              <Box component="ul" sx={listSx}>
                <Typography component="li">All employees.</Typography>
                <Typography component="li">All suppliers, subcontractors, and partners who provide services to the company or receive services from it.</Typography>
              </Box>
            </Section>

            <Section id="principles" title="Principles">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Environmental responsibility – preferring suppliers with proven environmental practices and certifications.</Typography>
                <Typography component="li">Energy efficiency – optimizing transport routes, using modern and less polluting vehicles, and applying energy-efficient technologies in warehouse facilities.</Typography>
                <Typography component="li">Intermodal transport and sustainable materials – use of eco-friendly packaging, reuse, and recycling of resources.</Typography>
                <Typography component="li">Social responsibility – cooperation with suppliers who provide fair working conditions and support local and small businesses.</Typography>
                <Typography component="li">Ethics and transparency – compliance with all applicable laws and international standards on ethics, human rights, and labor practices.</Typography>
                <Typography component="li">Innovation and technology – implementation of digital solutions for process optimization, traceability, and control.</Typography>
                <Typography component="li">Training and engagement – employees are trained and encouraged to apply sustainable practices in their daily work.</Typography>
                <Typography component="li">Continuous improvement – corrective actions for non-compliance with sustainability principles and adoption of industry best practices.</Typography>
              </Box>
            </Section>

            <Section id="suppliers" title="Supplier requirements">
              <Typography sx={{ mt: 1 }}>All suppliers of “Next Logistics” must:</Typography>
              <Box component="ul" sx={listSx}>
                <Typography component="li">Comply with applicable environmental, social, and labor regulations.</Typography>
                <Typography component="li">Comply with company requirements and policies.</Typography>
                <Typography component="li">Support transparency regarding the process for accurate and proper delivery of goods.</Typography>
              </Box>
            </Section>

            <Section id="selection" title="Selection & evaluation">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Sustainability is a key criterion when selecting suppliers.</Typography>
                <Typography component="li">Evaluation includes reviewing environmental indicators, social standards, and corporate governance.</Typography>
                <Typography component="li">Requirement for CMR insurance to cover carrier liability.</Typography>
                <Typography component="li">Verification of the compliance of vehicles used for assigned transport services.</Typography>
                <Typography component="li">Research on each supplier and continuous monitoring for improvement.</Typography>
              </Box>
            </Section>

            <Section id="targets" title="Objectives (by 31.12.2026)">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Strengthened control over documentation and accountability.</Typography>
                <Typography component="li">Familiarization of suppliers and partners with company policies.</Typography>
                <Typography component="li">Increase the share of suppliers with robust internal policies on ethics, safety, and sustainability.</Typography>
                <Typography component="li">Introduction of annual monitoring regarding labor, environmental, ethical, and governance aspects.</Typography>
                <Typography component="li">Reduction of the carbon footprint of transport operations compared to 2024.</Typography>
                <Typography component="li">Increase the share of intermodal (combined) transport.</Typography>
              </Box>
              <Typography sx={{ mt: 2 }}>“Next Logistics” continuously monitors and reviews suppliers to ensure continuous improvement of work processes and better logistics solutions.</Typography>
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
// export default LogisticSustainability;