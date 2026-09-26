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
  { id: "principles", label: "Main principles" },
  { id: "measures", label: "Practical measures" },
  { id: "objectives", label: "Objectives" },
  { id: "engagement", label: "Social engagement" },
  { id: "governance", label: "Ethics & governance" },
  { id: "partners", label: "Partnerships & supply chains" },
  { id: "monitoring", label: "Control & monitoring" },
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

export default function CorporateSocialResponsibility() {
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
            Corporate Social Responsibility (CSR) Policy
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
                “Next Logistics” Ltd. recognizes the importance of sustainable development and social responsibility. We are committed to managing our business in a way that has a positive impact on society, the environment, and the economy, while maintaining high standards of ethics and transparency.
              </Typography>
            </Section>

            <Section id="principles" title="Main principles">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Ethics and transparency – adherence to high ethical standards in all processes.</Typography>
                <Typography component="li">Environment – responsible use of resources, minimizing the ecological footprint.</Typography>
                <Typography component="li">Social commitment – support for community projects and initiatives.</Typography>
                <Typography component="li">Workplace – safe, equitable, and professional environment.</Typography>
                <Typography component="li">Partnerships – selection of suppliers and partners who share our sustainability values.</Typography>
              </Box>
            </Section>

            <Section id="measures" title="Practical measures">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Trainings and campaigns to reduce waste and energy consumption.</Typography>
                <Typography component="li">Support for educational, health, and social initiatives.</Typography>
                <Typography component="li">Development and training of employees.</Typography>
                <Typography component="li">Encouragement of volunteer work.</Typography>
                <Typography component="li">Regular assessment of the social and environmental impact of activities.</Typography>
              </Box>
            </Section>

            <Section id="objectives" title="Objectives to be achieved by 31.12.2026">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Reduction of CO₂ emissions through optimization of transport routes.</Typography>
                <Typography component="li">Reduction of waste through recycling and process streamlining.</Typography>
                <Typography component="li">Zero workplace accidents and mandatory annual occupational safety training.</Typography>
                <Typography component="li">Employee mental health and well-being program.</Typography>
              </Box>
            </Section>

            <Section id="engagement" title="Social engagement">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Support at least 3 new social or educational initiatives.</Typography>
                <Typography component="li">Employee participation in volunteer initiatives.</Typography>
              </Box>
            </Section>

            <Section id="governance" title="Ethics and governance">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Internal audits and compliance control with ethical standards.</Typography>
                <Typography component="li">Maintenance of a feedback and violation reporting system.</Typography>
              </Box>
            </Section>

            <Section id="partners" title="Partnerships and supply chains">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Evaluation of new suppliers based on social and environmental criteria.</Typography>
              </Box>
            </Section>

            <Section id="monitoring" title="Control and monitoring">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Regular review of societal and environmental impact.</Typography>
                <Typography component="li">Audits and internal control to ensure compliance with CSR and ethical standards.</Typography>
                <Typography component="li">Documentation and accountability for inspections by external and internal authorities.</Typography>
              </Box>
            </Section>

            <Section id="sanctions" title="Sanctions for non-compliance">
              <Typography sx={{ lineHeight: 1.7 }}>Upon receiving a report of violation, an internal investigation is conducted. If a violation is confirmed, depending on severity, measures may include verbal or written warning, temporary suspension, reduction/removal of bonuses, termination of employment, or notification of competent authorities.</Typography>
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

         