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
  { id: "compliance", label: "Goals & principles" },
  { id: "efficiency", label: "Energy efficiency" },
  { id: "targets", label: "Objectives (by 31.12.2026)" },
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

export default function EnvironmentalPolicyPage() {
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
            Environmental Policy
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
                As a leader in the logistics sector, “Next Logistics” Ltd. recognizes its contribution and responsibility toward environmental protection and human health.
              </Typography>
            </Section>

            <Section id="objectives" title="Policy objectives">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Promote environmental protection and responsible use of resources;</Typography>
                <Typography component="li">Minimize the environmental impacts arising from logistics, transport, and administrative activities;</Typography>
                <Typography component="li">Implement sustainable, innovative, and energy-efficient solutions;</Typography>
                <Typography component="li">Foster a culture of environmental responsibility among employees, partners, and suppliers.</Typography>
              </Box>
            </Section>

            <Section id="scope" title="Scope of the policy">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Transport and logistics;</Typography>
                <Typography component="li">Warehouse operations;</Typography>
                <Typography component="li">Administrative processes;</Typography>
                <Typography component="li">Interaction with clients, partners, suppliers, and carriers.</Typography>
              </Box>
            </Section>

            <Section id="compliance" title="Goals & principles">
              <Typography sx={{ mt: 1 }}>Compliance with legislation:</Typography>
              <Box component="ul" sx={listSx}>
                <Typography component="li">We comply with all applicable national and European environmental laws, regulations, and standards.</Typography>
                <Typography component="li">We monitor current changes in environmental legislation and adapt our internal practices accordingly.</Typography>
              </Box>

              <Typography sx={{ mt: 2, mb: 1 }}>Pollution prevention and resource efficiency:</Typography>
              <Box component="ul" sx={listSx}>
                <Typography component="li">We reduce emissions from vehicles through regular maintenance requirements and the use of energy-efficient technologies.</Typography>
                <Typography component="li">We do not use vehicles that fail to meet environmental standards or cause pollution.</Typography>
                <Typography component="li">We ensure the technical fitness of vehicles to limit harmful emissions.</Typography>
              </Box>
            </Section>

            <Section id="efficiency" title="Combined & energy-efficient transport">
              <Box component="ul" sx={listSx}>
                <Typography component="li">We optimize routes, using maritime and land transport to reduce the carbon footprint.</Typography>
                <Typography component="li">We use modern, energy-efficient trucks, including hybrid and LNG technologies.</Typography>
                <Typography component="li">We organize shipments with minimal mileage and optimal load capacity.</Typography>
                <Typography component="li">Combined transport is a key part of our green logistics strategy.</Typography>
              </Box>

              <Typography sx={{ mt: 2, mb: 1 }}>Energy efficiency and sustainable practices:</Typography>
              <Box component="ul" sx={listSx}>
                <Typography component="li">The base of “Next Logistics” Ltd. is powered by photovoltaic batteries, reducing the carbon footprint and increasing energy independence.</Typography>
                <Typography component="li">We encourage policies for reuse and recycling to reduce waste.</Typography>
                <Typography component="li">We ensure proper collection, separation, and disposal of waste at the company’s base.</Typography>
                <Typography component="li">We collect data on electricity, water, and consumables usage to optimize consumption and reduce environmental impact.</Typography>
              </Box>
            </Section>

            <Section id="targets" title="Objectives to be achieved by 31.12.2026">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Reduce electricity consumption in administrative buildings through optimization and implementation of efficient systems;</Typography>
                <Typography component="li">Increase the proportion of recycled waste in total waste generated at the base;</Typography>
                <Typography component="li">Conduct at least one annual training for employees related to environmental practices and protection;</Typography>
                <Typography component="li">Increase the share of shipments carried out via combined transport;</Typography>
                <Typography component="li">Maintain 100% technical fitness of transport vehicles;</Typography>
                <Typography component="li">Establish at least one partnership with an organization or supplier offering innovative ecological solutions;</Typography>
                <Typography component="li">Conduct at least one annual internal environmental survey to assess employee engagement and awareness.</Typography>
              </Box>
            </Section>

            <Section id="sanctions" title="Sanctions">
              <Typography sx={{ mt: 1 }}>Violations of this policy and the law are considered serious offenses and are subject to sanctions. Upon receiving a report of violation, an internal investigation is conducted. If a violation is confirmed, depending on the severity of the case, measures may include verbal or written warning, temporary suspension from work, reduction or removal of bonuses, termination of employment, or notification of competent authorities.</Typography>
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
