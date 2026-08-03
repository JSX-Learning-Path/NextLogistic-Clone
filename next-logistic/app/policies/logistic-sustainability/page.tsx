import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SocialIcons from "@/components/socials/Socials";

function LogisticSustainability() {
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
        <Box sx={{ textAlign: "center", mb: 1 }}>
          <Typography variant="h6" component="h1">
            Logistic Sustainability Policy
          </Typography>
          <Typography variant="body1" component="p">
            of
          </Typography>
          <Typography variant="h6" component="p">
            Next Logistic
          </Typography>
          <Typography variant="body1" component="p">
            Plovdiv, 36 Rogoshko Shose St.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", mt: 2, fontStyle: "italic" }}
        >
          Version 1.2
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Last updated: 11.11.2025
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mt: 1 }}>
          At “Next Logistics” Ltd., we are committed to providing high-quality
          logistics services while reducing negative environmental impact and
          promoting social responsibility. Our goal is to minimize the negative
          environmental impact, promote social responsibility, and ensure
          long-term economic sustainability through collaboration with partners
          and suppliers who share our values. Through strategic combination of
          road, rail, sea, and river transport, we ensure flexibility and
          reliability for all types of cargo.
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            mt: 3,
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "text.primary", mt: 1, fontWeight: 600 }}
          >
            Objectives:
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
                mb: 0.5,
                mt: 1,
                lineHeight: 1,
                fontSize: { xs: "1rem", md: "1rem" },
                display: "list-item",
              },
            }}
          >
            <Typography component="li">
              Providing sustainable and efficient logistics solutions.
            </Typography>
            <Typography component="li">
              Minimizing carbon footprint and resource consumption.
            </Typography>
            <Typography component="li">
              Supporting ethical practices and social responsibility among
              suppliers.
            </Typography>
            <Typography component="li">
              Optimizing costs without compromising quality and sustainability.
            </Typography>
            <Typography component="li">
              Improving transparency, accountability, and risk management in
              supply chains.
            </Typography>
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
            Scope:
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
                fontSize: { xs: "1rem", md: "1rem" },
                display: "list-item",
              },
            }}
          >
            <Typography component="li">All employees;</Typography>
            <Typography component="li">
              All suppliers, subcontractors, and partners who provide services
              to the company or receive services from it.
            </Typography>
          </Box>
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
          Principles:
        </Typography>
        <Box
          component="ul"
          sx={{
            color: "text.secondary",
            mt: 1,
            pl: { xs: 3, md: 4 },
            pr: 1,
            listStylePosition: "outside",
            listStyleType: "disc",
            "&": { margin: 0 },
            "& li": {
              mt: 1,
              mb: 1.3,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            Environmental responsibility – preferring suppliers with proven
            environmental practices and certifications.
          </Typography>
          <Typography component="li">
            Energy efficiency – optimizing transport routes, using modern and
            less polluting vehicles, and applying energy-efficient technologies
            in warehouse facilities.
          </Typography>
          <Typography component="li">Intermodal transport</Typography>
          <Typography component="li">
            Sustainable materials – use of eco-friendly packaging, reuse, and
            recycling of resources.
          </Typography>
          <Typography component="li">
            Social responsibility – cooperation with suppliers (subcontractors,
            carriers) who provide fair working conditions and support local and
            small businesses.
          </Typography>
          <Typography component="li">
            Ethics and transparency – compliance with all applicable laws and
            international standards on ethics, human rights, and labor
            practices.
          </Typography>
          <Typography component="li">
            Innovation and technology – implementation of digital solutions for
            process optimization, traceability, and control.
          </Typography>
          <Typography component="li">
            Transparency and accountability – clearly defined criteria for the
            selection of suppliers and partners, regular monitoring, and public
            reporting.
          </Typography>
          <Typography component="li">
            Training and engagement – employees are trained and encouraged to
            apply sustainable practices in their daily work.
          </Typography>
          <Typography component="li">
            Support for local and small suppliers wherever possible.
          </Typography>
          <Typography component="li">
            Reducing waste and promoting reuse and recycling.
          </Typography>
          <Typography component="li">
            Avoiding practices that lead to unsustainable costs or unethical
            behavior.
          </Typography>
          <Typography component="li">
            Continuous improvement – corrective actions for non-compliance with
            sustainability principles and adoption of industry best practices.
          </Typography>
          <Typography component="li">
            “Next Logistics” Ltd. follows a green policy, placing ecology at the
            center of its decisions. (In 2023, the company saved over 140,000
            tons of CO₂ emissions through rail, intermodal, combined, and river
            transport solutions, reinforcing its commitment to sustainable
            development.)
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
          Supplier requirements:
        </Typography>
        <Typography sx={{ mt: 2 }}>
          All suppliers of “Next Logistics” must:
        </Typography>
        <Box
          component="ul"
          sx={{
            color: "text.secondary  ",
            mt: 1,
            pl: { xs: 3, md: 4 },
            pr: 1,
            listStyleType: "disc",
            listStylePosition: "outside",
            textAlign: "left",
            "&": { margin: 0 },
            "& li": {
              mt: 1,
              mb: 0.4,
              lineHeight: 1,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            Comply with applicable environmental, social, and labor regulations.
          </Typography>
          <Typography component="li">
            Comply with company requirements and policies.
          </Typography>
          <Typography component="li">
            Support transparency regarding the process for accurate and proper
            delivery of goods.
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
          Selection and evaluation process:
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
              mb: 0.5,
              mt: 1,
              lineHeight: 1,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            Sustainability is a key criterion when selecting suppliers.
          </Typography>
          <Typography component="li">
            Evaluation includes reviewing environmental indicators, social
            standards, and corporate governance.
          </Typography>
          <Typography component="li">
            Requirement for CMR insurance, which is intended to cover carrier
            liability.
          </Typography>
          <Typography component="li">
            Verification of the compliance of vehicles used for assigned
            transport services.
          </Typography>
          <Typography component="li">Research on each supplier.</Typography>
        </Box>
        <Typography sx={{ mt: 2 }}>
          “Next Logistics” continuously monitors and reviews suppliers to ensure
          continuous improvement of work processes and better logistics
          solutions.
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
              mb: 0.5,
              mt: 1,
              lineHeight: 1.1,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            Strengthened control over documentation and accountability.
          </Typography>
          <Typography component="li">
            Familiarization of suppliers and partners with company policies.
          </Typography>
          <Typography component="li">
            Increase the share of suppliers with robust internal policies on
            ethics, safety, and sustainability.
          </Typography>
          <Typography component="li">
            Introduction of annual monitoring regarding labor, environmental,
            ethical, and governance aspects.
          </Typography>
          <Typography component="li">
            Reduction of the carbon footprint of transport operations compared
            to 2024.
          </Typography>
          <Typography component="li">
            Increase the share of intermodal (combined) transport.
          </Typography>
          <Typography component="li">
            Use of low-emission transport vehicles.
          </Typography>
          <Typography component="li">
            Conduct annual training for employees on sustainability and safety.
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
          Sanctions:
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Violations of this policy and the law are considered serious offenses
          and are subject to sanctions. Upon receiving a report of violation, an
          internal investigation is conducted. If a violation is confirmed,
          depending on the severity of the case, the following measures may be
          applied:
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
              mb: 0.5,
              mt: 1,
              lineHeight: 1.1,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">Verbal or written warning;</Typography>
          <Typography component="li">
            Temporary suspension from work;
          </Typography>
          <Typography component="li">
            Reduction or removal of bonuses;
          </Typography>
          <Typography component="li">
            Termination of employment/contract;
          </Typography>
          <Typography component="li">
            If necessary – notification of competent authorities.
          </Typography>
        </Box>
        <Typography sx={{ mt: 2 }}>
          By adopting and implementing this Logistics Sustainability Policy,
          “Next Logistics” Ltd. strives to be an example of a responsible and
          sustainable business.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Our mission is to provide reliable logistics solutions that support
          economic development, protect nature, and contribute to the well-being
          of society.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          *“Next Logistics” Ltd. commits to reviewing and updating this policy
          annually to reflect new requirements, standards, and best practices in
          sustainable development.
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
export default LogisticSustainability;
