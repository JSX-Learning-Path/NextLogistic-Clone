import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import SocialIcons from "@/components/socials/Socials";
// import Footer from "@/components/Footer";
import Link from "next/link";

function CodeOfEthics() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "rgb(242, 247, 255)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 10,
      }}
    >
      <Box
        sx={{
          bgcolor: "common.white",
          color: "text.secondary",
          px: { xs: 3, md: 6 },
          py: { xs: 4, md: 6 },
          width: { xs: "100%", sm: "80%", md: "60%", lg: "40%" },
          borderRadius: 1,
        }}
      >
        <Typography
          variant="h6"
          component="h1"
          sx={{ fontWeight: 500, textAlign: "center" }}
        >
          Code of Ethics
        </Typography>

        <Typography variant="h6" sx={{ textAlign: "center" }}>
          of
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            color: "text-secondary ",
            fontSize: "medium",
            textAlign: "center",
          }}
        >
          Next Logistics Ltd.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", textAlign: "center" }}
        >
          Plovdiv, 36 Rogoshko Shose Street
        </Typography>

        <Box
          sx={{
            width: "100%",
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mt: 2, fontStyle: "italic" }}
          >
            Version 1.2
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", mt: 1 }}>
            Last updated: 11.11.2025
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              mt: 1,
              fontWeight: 600,
              color: "text.primary",
            }}
          >
            Scope and Objectives:
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mt: 1 }}>
            This Code of Ethics defines the core principles, values, and rules
            of conduct that all employees, managers, partners, and suppliers of
            “Next Logistics” Ltd. are expected to follow. Its purpose is to
            ensure integrity, respect, legality, and sustainability in all
            aspects of our operations.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="body1"
            sx={{ mt: 1, fontWeight: 600, color: "text.primary" }}
          >
            Objectives to be achieved by 31.12.2026:
          </Typography>
          <Box
            component="ul"
            sx={{
              color: "text.secondary",
              mt: 1,
              pl: { xs: 3, md: 4 },
              pr: 1,
              listStyleType: "disc",
              listStylePosition: "outside",
              textAlign: "left",
              "&": { margin: 0 },
              "& li": {
                mb: 1,
                lineHeight: 1.2,
                fontSize: { xs: "1rem", md: "1.125rem" },
                display: "list-item",
              },
            }}
          >
            <Typography component="li">
              All employees must be fully informed about the Code of Ethics and
              adhere to it in their daily work.
            </Typography>
            <Typography component="li">
              Recruitment, training, and development processes must ensure
              equality and ethical behavior.
            </Typography>
            <Typography component="li">
              Reduce negative environmental impact through more efficient use of
              resources and process optimization.
            </Typography>
            <Typography component="li">
              Ensure transparency in relationships with partners and suppliers,
              including compliance with human rights and ethical standards.
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="body1"
          sx={{
            mt: 1,
            fontWeight: 600,
            color: "text.primary",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          Core values
        </Typography>
        <Box
          component="ul"
          sx={{
            color: "text.secondary",
            mt: 1,
            pl: { xs: 3, md: 4 },
            pr: 1,
            listStyleType: "disc",
            listStylePosition: "outside",
            textAlign: "left",
            "&": { margin: 0 },
            "& li": {
              mb: 1,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1.125rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            Honesty and Integrity – We always act transparently, responsibly,
            and in good faith.
          </Typography>
          <Typography component="li">
            Respect – We treat every individual with dignity and respect,
            regardless of position, gender, age, ethnicity, religion, beliefs,
            or other characteristics.
          </Typography>
          <Typography component="li">
            Responsibility – We assume personal and professional responsibility
            for our actions.
          </Typography>
          <Typography component="li">
            Sustainability – We operate with care for the environment, society,
            and future generations.
          </Typography>
          <Typography component="li">
            Collaboration – We strive for open communication and teamwork.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            fontWeight: 600,
            color: "text.primary",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          Ethics in Workplace Relations:
        </Typography>
        <Box
          component="ul"
          sx={{
            color: "text.secondary",
            mt: 1,
            pl: { xs: 3, md: 4 },
            pr: 1,
            listStyleType: "disc",
            listStylePosition: "outside",
            textAlign: "left",
            "&": { margin: 0 },
            "& li": {
              mb: 1,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1.125rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            All forms of discrimination, harassment, threats, or disrespectful
            behavior are strictly prohibited.
          </Typography>
          <Typography component="li">
            We encourage open and respectful communication at all levels in the
            organization.
          </Typography>
          <Typography component="li">
            All decisions regarding recruitment, training, remuneration, and
            development are based on competence and merit.
          </Typography>
        </Box>
        <Typography
          sx={{
            mt: 1,
            fontWeight: 600,
            color: "text.primary",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          Sustainability and Environmental Protection:
        </Typography>
        <Box
          component="ul"
          sx={{
            color: "text.secondary",
            mt: 1,
            pl: { xs: 3, md: 4 },
            pr: 1,
            listStyleType: "disc",
            listStylePosition: "outside",
            textAlign: "left",
            "&": { margin: 0 },
            "& li": {
              mb: 1,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1.125rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            The company and its employees commit to minimizing negative
            environmental impact.
          </Typography>
          <Typography component="li">
            We encourage energy efficiency, recycling, and responsible use of
            resources.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            fontWeight: 600,
            color: "text.primary",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          Relations with Suppliers and Partners:
        </Typography>
        <Box
          component="ul"
          sx={{
            color: "text-secondary ",
            mt: 1,
            pl: { sx: 3, md: 4 },
            pr: 1,
            listStyleType: "disc",
            listStylePosition: "outside",
            textAlign: "left",
            "&": { margin: 0 },
            "& li": {
              mb: 1,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1.125rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            We work only with verified partners who share our ethical standards.
          </Typography>
          <Typography component="li">
            We require suppliers to respect human rights, labor standards,
            Bulgarian legislation, and EU regulations.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            fontWeight: 600,
            color: "text.primary",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          Conflict of Interest:
        </Typography>
        <Typography sx={{ color: "text.secondary", mt: 2 }}>
          A conflict of interest arises when an employee or representative finds
          themselves in a situation where their personal interests may conflict
          with their duties and responsibilities related to their position.
        </Typography>
        <Box
          component="ul"
          sx={{
            color: "text-secondary ",
            mt: 1,
            pl: { sx: 3, md: 4 },
            pr: 1,
            listStyleType: "disc",
            listStylePosition: "outside",
            textAlign: "left",
            "&": { margin: 0 },
            "& li": {
              mb: 1,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1.125rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li" sx={{ mt: 1 }}>
            Employees and representatives of “Next Logistics” Ltd. must avoid
            any situations that may lead to a conflict of interest.
          </Typography>
          <Typography component="li" sx={{ mt: 1 }}>
            Any suspicion of a conflict of interest must be promptly reported to
            the Legal Department or anonymously, in accordance with the internal
            whistleblowing system.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            fontWeight: 600,
            color: "text.primary",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          Information Protection:
        </Typography>
        <Typography sx={{ color: "text.secondary", mt: 2 }}>
          Information protection refers to any non-public information about the
          company, clients, partners, or employees whose disclosure may harm the
          company or third parties.
        </Typography>
        <Box
          component="ul"
          sx={{
            color: "text-secondary ",
            mt: 1,
            pl: { sx: 3, md: 4 },
            pr: 1,
            listStyleType: "disc",
            listStylePosition: "outside",
            textAlign: "left",
            "&": { margin: 0 },
            "& li": {
              mb: 2,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1.125rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li" sx={{ mt: 1 }}>
            Confidential information about the company, its clients, and
            partners must be protected and not shared without authorization.
          </Typography>
          <Typography component="li" sx={{ mt: 1 }}>
            Personal data must be processed and stored in compliance with
            Regulation (EU) 2016/679 (GDPR), the Bulgarian Personal Data
            Protection Act (PDPA), and the Internal Personal Data Protection
            Policy of “Next Logistics” Ltd.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            fontWeight: 600,
            color: "text.primary",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          Anti-Corruption and Gifts:
        </Typography>
        <Box
          component="ul"
          sx={{
            color: "text-secondary ",
            mt: 1,
            pl: { sx: 3, md: 4 },
            pr: 1,
            listStyleType: "disc",
            listStylePosition: "outside",
            textAlign: "left",
            "&": { margin: 0 },
            "& li": {
              mb: 1,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1.125rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            All forms of bribery, corruption, or improper influence are strictly
            prohibited.
          </Typography>
          <Typography component="li">
            Gifts, services, or benefits may be accepted only if they are of
            minimal value and do not create obligations.
          </Typography>
          <Typography component="li">
            Any suspicion of irregularities must be reported immediately.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            fontWeight: 600,
            color: "text.primary",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          Compliance with Law, International Regulations, and Internal Policies:
        </Typography>
        <Typography sx={{ mt: 2 }}>
          All employees are required to comply with:
        </Typography>
        <Box
          component="ul"
          sx={{
            color: "text-secondary ",
            mt: 1,
            pl: { sx: 3, md: 4 },
            pr: 1,
            listStyleType: "disc",
            listStylePosition: "outside",
            textAlign: "left",
            "&": { margin: 0 },
            "& li": {
              mb: 0,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1.125rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            applicable Bulgarian and EU legislation;
          </Typography>
          <Typography component="li">
            the company’s internal policies and procedures;
          </Typography>
          <Typography component="li">
            the principles of the UN Global Compact, including human rights,
            labor standards, environmental protection, and anti-corruption;
          </Typography>
          <Typography component="li">
            applicable international regulations and sector best practices;
          </Typography>
          <Typography component="li">
            contractual obligations with suppliers, clients, and partners.
          </Typography>
        </Box>
        <Typography sx={{ mt: 2 }}>
          Violations of the law or this Code are considered a serious breach and
          are subject to sanctions.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            fontWeight: 600,
            color: "text.primary",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          Sanctions:
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Violations of this Code of Ethics and the law are considered serious
          breaches and are subject to sanctions.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Upon receiving a report, an internal investigation is conducted.
          Depending on the severity of the violation, the following measures may
          be applied:
        </Typography>
        <Box
          component="ul"
          sx={{
            color: "text-secondary ",
            mt: 1,
            pl: { sx: 3, md: 4 },
            pr: 1,
            listStyleType: "disc",
            listStylePosition: "outside",
            textAlign: "left",
            "&": { margin: 0 },
            "& li": {
              mb: 0,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1.125rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">verbal or written warning;</Typography>
          <Typography component="li">
            temporary suspension from work;
          </Typography>
          <Typography component="li">
            reduction or revocation of bonuses;
          </Typography>
          <Typography component="li">termination of employment.</Typography>
          <Typography component="li">
            notification of competent authorities, where necessary.
          </Typography>
        </Box>
        <Typography sx={{ mt: 2 }}>
          This Code of Ethics enters into force immediately upon its drafting.
        </Typography>
        <Divider sx={{ mt: 3 }} />
        <Box sx={{ mt: 3, display: "flex", alignItems: "center" }}>
          <Typography sx={{ mr: 2, fontWeight: 600 }}>Share</Typography>
          <SocialIcons />
        </Box>
      </Box>
    </Box>
  );
}

export default CodeOfEthics;
