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
  { id: "scope", label: "Scope & objectives" },
  { id: "values", label: "Core values" },
  { id: "workplace", label: "Workplace relations" },
  { id: "sustainability", label: "Sustainability" },
  { id: "suppliers", label: "Relations with suppliers" },
  { id: "conflict", label: "Conflict of interest" },
  { id: "info", label: "Information protection" },
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

export default function CodeOfEthics() {
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
            Code of Ethics
          </Typography>
          <Typography sx={{ color: "text.secondary", mt: 0.5 }}>of</Typography>
          <Typography sx={{ color: "#1A2340", fontWeight: 700, fontSize: "1.2rem", mt: 0.5 }}>Next Logistics Ltd.</Typography>
          <Typography sx={{ color: "text.secondary", mt: 0.5 }}>Plovdiv, 36 Rogoshko Shose Street</Typography>
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
                This Code of Ethics defines the core principles, values, and rules of conduct that all employees, managers, partners, and suppliers of “Next Logistics” Ltd. are expected to follow. Its purpose is to ensure integrity, respect, legality, and sustainability in all aspects of our operations.
              </Typography>
            </Section>

            <Section id="scope" title="Scope & objectives">
              <Typography sx={{ lineHeight: 1.7, mb: 1 }}>This section outlines the scope and objectives to be achieved by 31.12.2026.</Typography>
              <Box component="ul" sx={listSx}>
                <Typography component="li">All employees must be fully informed about the Code of Ethics and adhere to it in their daily work.</Typography>
                <Typography component="li">Recruitment, training, and development processes must ensure equality and ethical behavior.</Typography>
                <Typography component="li">Reduce negative environmental impact through more efficient use of resources and process optimization.</Typography>
                <Typography component="li">Ensure transparency in relationships with partners and suppliers, including compliance with human rights and ethical standards.</Typography>
              </Box>
            </Section>

            <Section id="values" title="Core values">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Honesty and Integrity – Act transparently, responsibly, and in good faith.</Typography>
                <Typography component="li">Respect – Treat every individual with dignity and respect.</Typography>
                <Typography component="li">Responsibility – Assume personal and professional responsibility for actions.</Typography>
                <Typography component="li">Sustainability – Operate with care for the environment and society.</Typography>
                <Typography component="li">Collaboration – Strive for open communication and teamwork.</Typography>
              </Box>
            </Section>

            <Section id="workplace" title="Workplace relations">
              <Box component="ul" sx={listSx}>
                <Typography component="li">All forms of discrimination, harassment, threats, or disrespectful behavior are strictly prohibited.</Typography>
                <Typography component="li">Encourage open and respectful communication at all levels in the organization.</Typography>
                <Typography component="li">Decisions regarding recruitment, training, remuneration, and development are based on competence and merit.</Typography>
              </Box>
            </Section>

            <Section id="sustainability" title="Sustainability and Environmental Protection">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Commit to minimizing negative environmental impact.</Typography>
                <Typography component="li">Encourage energy efficiency, recycling, and responsible use of resources.</Typography>
              </Box>
            </Section>

            <Section id="suppliers" title="Relations with Suppliers and Partners">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Work only with verified partners who share our ethical standards.</Typography>
                <Typography component="li">Require suppliers to respect human rights, labor standards, and applicable legislation.</Typography>
              </Box>
            </Section>

            <Section id="conflict" title="Conflict of Interest">
              <Typography sx={{ lineHeight: 1.7 }}>A conflict of interest arises when personal interests may conflict with duties and responsibilities. Employees must avoid such situations and report suspicions to the Legal Department or via the whistleblowing system.</Typography>
            </Section>

            <Section id="info" title="Information Protection">
              <Typography sx={{ lineHeight: 1.7 }}>Information protection refers to any non-public information about the company, clients, partners, or employees whose disclosure may harm the company or third parties.</Typography>
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

     