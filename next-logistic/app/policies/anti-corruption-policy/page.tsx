"use client";

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import Divider from "@mui/material/Divider";
import SocialIcons from "@/components/socials/Socials";

// Sections that make up the policy. "preamble" is unnumbered.
const SECTIONS = [
  { id: "preamble", label: "Preamble", numbered: false },
  { id: "principles", label: "Main principles and rules" },
  { id: "aims", label: "The policy aims to" },
  { id: "objectives", label: "Objectives by 31.12.2026" },
  { id: "definitions", label: "Definitions" },
  { id: "actions", label: "Actions required" },
  { id: "transparency", label: "Transparency and accountability" },
  { id: "results", label: "Expected results" },
  { id: "scope", label: "Scope of the policy" },
  { id: "relevance", label: "Relevance" },
  { id: "traceability", label: "Traceability and monitoring" },
  { id: "evidence", label: "Evidence" },
  { id: "reporting", label: "Reporting violations" },
  { id: "sanctions", label: "Sanctions for non-compliance" },
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

export default function AntiCorruptionPolicyPage() {
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

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
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
    <Box
      component="section"
      sx={{
        bgcolor: "#FFFFFF",
        minHeight: "100vh",
        py: { xs: 5, md: 8 },
        px: { xs: 2, md: 6 },
      }}
    >
      <Box sx={{ maxWidth: 1000, mx: "auto" }}>
        {/* Title block */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ color: "#1A2340", fontWeight: 700, fontSize: { xs: "1.5rem", md: "1.9rem" } }}
          >
            Anti-Corruption and Anti-Bribery Policy
          </Typography>
          <Typography sx={{ color: "text.secondary", mt: 0.5 }}>of</Typography>
          <Typography sx={{ color: "#1A2340", fontWeight: 700, fontSize: "1.2rem", mt: 0.5 }}>
            Next Logistic
          </Typography>
          <Typography sx={{ color: "text.secondary", mt: 0.5 }}>Plovdiv, 36 Rogoshko Shose St.</Typography>
        </Box>

        <Typography sx={{ textAlign: "center", color: "#2F6FED", fontWeight: 600, mt: 2 }}>
          Internal Company Policy
        </Typography>

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
          {/* Sidebar */}
          <Box component="nav" sx={{ width: { xs: "100%", md: 280 }, flexShrink: 0, bgcolor: "#EEF2FC", borderRadius: 4, px: 3.5, py: 4, position: { md: "sticky" }, top: { md: 96 } }}>
            <Typography sx={{ color: "#1A2340", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.02em", textTransform: "uppercase", mb: 2.5 }}>
              Contents
            </Typography>

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

          {/* Main content */}
          <Box sx={{ flex: 1, minWidth: 0, color: "text.secondary", fontSize: "0.95rem" }}>
            <Section id="preamble" title="Preamble">
              <Typography sx={{ lineHeight: 1.7, color: 'text.primary' }}>
                As a leader in the logistics sector, &quot;Next Logistics&quot; Ltd. recognizes its contribution and responsibility towards the entire logistics industry, as well as towards all its counterparties and employees. The company is fully committed to conducting ethical, transparent, and lawful business operations and maintains zero tolerance for all forms of bribery and corruption. This policy establishes the principles and rules that all employees, managers, partners, and suppliers must follow in order to prevent, recognize, and report cases of bribery and corrupt practices.
              </Typography>
            </Section>

            <Section id="principles" title="Main principles and rules of “Next Logistics” Ltd.">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Zero tolerance for bribery and corruption – “Next Logistics” Ltd. ensures that the company and all employees and counterparties are aware of the meaning and significance of these terms, in order to prevent, recognize, and report them.</Typography>
                <Typography component="li">“Next Logistics” Ltd. conducts verification and identification of all individuals and organizations it works with. In case of suspicion of abuse, bribery, or corruption, it is reported to the competent persons and/or authorities, according to the established procedure.</Typography>
                <Typography component="li">Participation in any form of bribery, whether directly or through intermediaries, is prohibited.</Typography>
                <Typography component="li">Prohibition of offering or accepting benefits – No employee has the right to offer, provide, receive, or request gifts, money, or services that could affect the objectivity of business decisions.</Typography>
                <Typography component="li">Counterparties we work with are not allowed to offer bribes to influence the company’s business decisions.</Typography>
                <Typography component="li">Only symbolic gifts or gestures of courtesy are allowed, which do not create obligations and are in accordance with good business practices.</Typography>
              </Box>
            </Section>

            <Section id="aims" title="The policy aims to">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Ensure that all company activities are conducted honestly and in accordance with the law;</Typography>
                <Typography component="li">Prevent any form of bribery, fraud, abuse of influence, conflict of interest, money laundering, or corruption, emphasizing that these are illegal actions and crimes under the laws of the Republic of Bulgaria and international legislation;</Typography>
                <Typography component="li">Protect the reputation and trust in “Next Logistics” Ltd.</Typography>
              </Box>
            </Section>

            <Section id="objectives" title="Objectives to be achieved by 31.12.2026">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Establish a culture of ethics and transparency among employees and partners;</Typography>
                <Typography component="li">Improve procedures for recognizing and preventing bribery, fraud, abuse of influence, conflict of interest, money laundering, or corruption;</Typography>
                <Typography component="li">Increase awareness of suppliers and counterparties regarding company requirements;</Typography>
                <Typography component="li">Implement annual monitoring and checks regarding corruption risks.</Typography>
              </Box>
            </Section>

            <Section id="definitions" title="Definitions">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Bribery – Giving, receiving, or requesting an unlawful benefit (such as money, gifts, services, or others) with the purpose of influencing the decisions or actions of a person holding a position of authority or responsibility.</Typography>
                <Typography component="li">Corruption – Using one’s official or professional position for personal gain or the benefit of third parties, in violation of the law or ethical norms.</Typography>
                <Typography component="li">Conflict of interest – A situation in which a person faces a choice between their duties to the organization and personal interests that may affect the objectivity of their decisions.</Typography>
                <Typography component="li">Fraud – Deliberately misleading others to illegally or unfairly obtain a benefit.</Typography>
                <Typography component="li">Money laundering – Actions taken to conceal the origin, ownership, or intended use of funds obtained illegally or unfairly.</Typography>
              </Box>
            </Section>

            <Section id="actions" title="Actions required from employees and counterparties">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Comply with the principles of zero tolerance for bribery, fraud, abuse of influence, conflict of interest, money laundering, or corruption;</Typography>
                <Typography component="li">Report any suspected violations;</Typography>
                <Typography component="li">Participate in ethics and anti-corruption trainings and briefings;</Typography>
                <Typography component="li">Provide documents and evidence for compliance with the policy;</Typography>
                <Typography component="li">Implement internal procedures to prevent corruption and abuse.</Typography>
              </Box>
            </Section>

            <Section id="transparency" title="Transparency and accountability">
              <Typography sx={{ lineHeight: 1.7 }}>All financial and business operations must be accurately, correctly, and properly documented, in accordance with legal requirements.</Typography>
            </Section>

            <Section id="results" title="Expected results">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Transparent and ethical business relationships based on trust;</Typography>
                <Typography component="li">Reduction of corruption risks and incidents;</Typography>
                <Typography component="li">Improved accountability and business process management;</Typography>
                <Typography component="li">Documented traceability of actions and policy implementation.</Typography>
              </Box>
            </Section>

            <Section id="scope" title="Scope of the policy">
              <Box component="ul" sx={listSx}>
                <Typography component="li">All employees and managers of “Next Logistics” Ltd.;</Typography>
                <Typography component="li">All business partners, suppliers, subcontractors, and consultants working on behalf of or with the company.</Typography>
              </Box>
            </Section>

            <Section id="relevance" title="Relevance">
              <Typography sx={{ lineHeight: 1.7, mb: 1 }}>Requirements apply according to the nature of the employee’s or counterparty’s activity, taking into account:</Typography>
              <Box component="ul" sx={listSx}>
                <Typography component="li">Role and responsibilities within the company;</Typography>
                <Typography component="li">Potential risks of bribery, fraud, abuse of influence, conflict of interest, money laundering, or corruption;</Typography>
                <Typography component="li">Frequency and significance of interaction with the company.</Typography>
              </Box>
            </Section>

            <Section id="traceability" title="Traceability and monitoring">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Maintaining registers and archives of reported violations and actions taken;</Typography>
                <Typography component="li">Annual compliance assessment and risk analysis;</Typography>
                <Typography component="li">Documenting incidents, corrective measures taken, and results;</Typography>
                <Typography component="li">Possibility of extraordinary checks in case of suspicion or increased risk.</Typography>
              </Box>
            </Section>

            <Section id="evidence" title="Evidence">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Internal anti-bribery, fraud, abuse of influence, conflict of interest, money laundering, or corruption policies and procedures;</Typography>
                <Typography component="li">Training and briefing documents;</Typography>
                <Typography component="li">Registers of submitted reports and actions taken;</Typography>
                <Typography component="li">Declarations of understanding the meaning of terms and compliance with the principles of zero tolerance for bribery, fraud, abuse of influence, conflict of interest, money laundering, or corruption;</Typography>
                <Typography component="li">Audits or compliance checks, where available.</Typography>
              </Box>
            </Section>

            <Section id="reporting" title="Reporting violations">
              <Typography sx={{ lineHeight: 1.7, mb: 1 }}>Any employee who suspects bribery, corruption, or any other form of abuse is obliged to immediately report to:</Typography>
              <Box component="ul" sx={listSx}>
                <Typography component="li">Their direct supervisor;</Typography>
                <Typography component="li">The Legal Department;</Typography>
                <Typography component="li">Through the internal reporting channels of “Next Logistics” Ltd.</Typography>
              </Box>
              <Typography sx={{ lineHeight: 1.7, mt: 2 }}>If necessary and after verification, the company reports to the relevant competent authorities. All reports are treated confidentially, and good-faith reporters are protected from retaliation.</Typography>
            </Section>

            <Section id="sanctions" title="Sanctions for non-compliance with the policy and/or the law">
              <Box component="ul" sx={listSx}>
                <Typography component="li">Official written warning;</Typography>
                <Typography component="li">Requirement for corrective actions within 30 days;</Typography>
                <Typography component="li">Temporary suspension of access or participation in work;</Typography>
                <Typography component="li">Financial penalties provided in the contract/order;</Typography>
                <Typography component="li">Termination of the contract/cooperation and removal from the approved partner list;</Typography>
                <Typography component="li">Notification of competent state authorities in case of legal violations.</Typography>
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
