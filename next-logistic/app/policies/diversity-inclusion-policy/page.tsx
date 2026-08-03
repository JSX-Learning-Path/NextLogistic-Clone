import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SocialIcons from "@/components/socials/Socials";

function DiversityInclusionPolicy() {
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
            Diversity and Inclusion Policy
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
        <Typography variant="body1" sx={{ color: "text.secondary", mt: 3 }}>
          “Next Logistics” Ltd. adheres to the laws of the Republic of Bulgaria
          and international human rights legislation and requires their
          compliance in all aspects of its operations. We believe that every
          person has the right to dignity, equality, and fair treatment,
          regardless of gender, age, race, religion, nationality, sexual
          orientation, disability, or other status.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
        >
          Policy objectives:
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
            Ensure a safe and healthy working environment.
          </Typography>
          <Typography component="li">
            Guarantee equality and non-discrimination in all processes.
          </Typography>
          <Typography component="li">
            Increase social awareness and a culture of respect.
          </Typography>
          <Typography component="li">
            Support free expression of opinions and beliefs.
          </Typography>
          <Typography component="li">
            Counteract child labor, forced labor, and violations of employee
            rights.
          </Typography>
          <Typography component="li">
            Protect personal data and confidentiality of information.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
        >
          Main principles:
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
              mt: 1.3,
              lineHeight: 1,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            Safe and healthy working environment – ensuring working conditions
            that protect the health and safety of all employees.
          </Typography>
          <Typography component="li">
            Protection of rights and freedoms – guaranteeing civil, political,
            economic, social, and cultural rights.
          </Typography>
          <Typography component="li">
            Non-discrimination and equal treatment – regardless of gender, race,
            ethnic origin, religion, beliefs, disability, age, or sexual
            orientation.
          </Typography>
          <Typography component="li">
            Equality and rights of vulnerable groups – special care for persons
            with disabilities and minority groups.
          </Typography>
          <Typography component="li">
            Gender equality – equal access to work and fair pay for men and
            women.
          </Typography>
          <Typography component="li">
            Free expression of opinion – employees can freely express opinions
            and beliefs.
          </Typography>
          <Typography component="li">
            Right to collective action – employees can unionize and negotiate
            their labor rights.
          </Typography>
          <Typography component="li">
            Counteracting child labor and forced labor.
          </Typography>
          <Typography component="li">
            Protection of personal data and confidentiality – using information
            only for lawful purposes and in accordance with applicable
            regulations.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
        >
          Reporting violations:
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Employees are required to report human rights violations through
          internal reporting channels, ensuring confidentiality and protection
          of the reporter when the report is made in good faith.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
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
              mt: 1.3,
              lineHeight: 1,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            Improve control over the compliance with human rights across all
            departments.
          </Typography>
          <Typography component="li">
            Conduct annual training for employees on human rights and
            non-discrimination.
          </Typography>
          <Typography component="li">
            Increase the proportion of suppliers and partners with internal
            policies for human rights protection.
          </Typography>
          <Typography component="li">
            Implement annual monitoring of labor practices, safety, ethics, and
            equality.
          </Typography>
          <Typography component="li">
            Ensure equal access to training and career development for all
            employees.
          </Typography>
          <Typography component="li">
            Improve internal processes for the protection of personal data and
            confidential information.
          </Typography>
          <Typography component="li">
            Encourage initiatives for equality, social engagement, and support
            of vulnerable groups.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
        >
          Compliance with the law and internal rules:
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
              mt: 1.3,
              lineHeight: 1,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            All employees are required to comply with:
          </Typography>
          <Typography component="li">
            The applicable legislation of the Republic of Bulgaria and the EU.
          </Typography>
          <Typography component="li">
            The company’s internal policies and procedures.
          </Typography>
          <Typography component="li">
            Contractual relations with suppliers, clients, and partners.
          </Typography>
        </Box>
        <Typography sx={{ mt: 2, fontStyle: "italic" }}>
          *Violations of the law or this code are considered serious offenses
          and are subject to sanctions.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
        >
          Reporting: violations:
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
              mt: 1.3,
              lineHeight: 1,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            Every employee has the right and obligation to report:
          </Typography>
          <Typography component="li">Violations of this code</Typography>
          <Typography component="li">Corrupt practices</Typography>
          <Typography component="li">Health and safety hazards</Typography>
          <Typography component="li">
            Other irregularities they have witnessed
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
        >
          Sanctions:
        </Typography>
        <Typography sx={{ mt: 1 }}>
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
              mt: 1.3,
              lineHeight: 1,
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
          <Typography component="li">Termination of employment;</Typography>
          <Typography component="li">
            If necessary – notification of competent authorities.
          </Typography>
        </Box>
        <Divider sx={{ mt: 3 }} />
        <Box sx={{ mt: 3, display: "flex", alignItems: "center" }}>
          <Typography sx={{ mr: 2, fontWeight: 600 }}>Share</Typography>
          <SocialIcons />
        </Box>
      </Box>
    </Box>
  );
}

export default DiversityInclusionPolicy;
