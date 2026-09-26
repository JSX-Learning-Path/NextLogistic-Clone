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
  { id: "purpose", label: "Purpose & Scope" },
  { id: "principles", label: "Key principles" },
  { id: "targets", label: "Objectives (by 31.12.2026)" },
  { id: "reporting", label: "Reporting" },
  { id: "compliance", label: "Compliance & sanctions" },
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

export default function HumanRightPolicy() {
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
            Human Rights Policy
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
                “Next Logistics” Ltd. adheres to the laws of the Republic of Bulgaria and international legislation in the field of human rights protection, requiring compliance in all aspects of its operations. We believe that every person has the right to dignity, equality, and fair treatment, regardless of gender, age, race, religion, nationality, sexual orientation, disability, or any other status.
              </Typography>
            </Section>

            <Section id="purpose" title="Purpose & Scope">
              <Typography sx={{ mt: 1 }}>The purpose of this policy is to provide clear rules and principles to which all employees, partners, and suppliers must adhere, creating:</Typography>
              <Box component="ul" sx={listSx}>
                <Typography component="li">A safe and pleasant working environment.</Typography>
                <Typography component="li">Increased social awareness and consciousness.</Typography>
                <Typography component="li">Applies to all employees, partners, suppliers and company processes related to labor, recruitment, training, and work with clients and partners.</Typography>
              </Box>
            </Section>

            <Section id="principles" title="Key principles">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Safe and healthy working environment – ensure conditions that protect the health and safety of all employees.</Typography>
                <Typography component="li">Protection of rights and freedoms – protect civil, political, economic, social, and cultural rights.</Typography>
                <Typography component="li">Non-discrimination and equal treatment regardless of gender, race, ethnic origin, religion, beliefs, disability, age, or sexual orientation.</Typography>
                <Typography component="li">Equality and rights of vulnerable groups – special care for persons with disabilities and minority groups.</Typography>
                <Typography component="li">Gender equality – equal rights, access to work, and fair pay.</Typography>
                <Typography component="li">Promotion of free expression of opinions and beliefs.</Typography>
                <Typography component="li">Right to collective action and combating child and forced labor.</Typography>
                <Typography component="li">Protection of personal data and confidentiality – treat personal data lawfully and confidentially.</Typography>
              </Box>
            </Section>

            <Section id="targets" title="Objectives (by 31.12.2026)">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Introduction of annual monitoring of labor, ethical, social, and management practices among employees and suppliers.</Typography>
                <Typography component="li">Conduct at least one annual training for all employees on human rights, non-discrimination, and fair treatment.</Typography>
                <Typography component="li">Increase the share of suppliers with established internal policies on human rights, labor standards, and safety.</Typography>
                <Typography component="li">Improve control over documentation related to human rights and labor practices through standardized procedures and annual review.</Typography>
                <Typography component="li">Ensure equal access to learning and development opportunities for all employees, including vulnerable groups.</Typography>
                <Typography component="li">Conduct an annual assessment of the working environment focusing on safety, equality, and working conditions.</Typography>
                <Typography component="li">Strengthen personal data protection mechanisms through updated procedures and additional security measures.</Typography>
              </Box>
            </Section>

            <Section id="reporting" title="Reporting">
              <Typography sx={{ mt: 1, color: "text.secondary" }}>In case of suspected human rights violations, every employee is obliged to report it. Any employee who suspects abuse or violation of human rights must immediately report to their direct supervisor, the Legal Department, or through the internal reporting channels of “Next Logistics” Ltd. If necessary and after verification, the company reports to the relevant competent authorities. All reports are treated confidentially, and good-faith reporters are protected from retaliation.</Typography>
            </Section>

            <Section id="compliance" title="Compliance & sanctions">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Upon receiving a report of violation, an internal investigation is conducted.</Typography>
                <Typography component="li">If a violation is confirmed, measures may include verbal or written warning, temporary suspension from work, reduction or removal of bonuses, termination of employment, or notification of competent authorities.</Typography>
                <Typography component="li">Monitoring and accountability: annual review of the policy, internal audits, and regular reporting of progress to management and stakeholders.</Typography>
              </Box>
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
