import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SocialIcons from "@/components/socials/Socials";

function HumanRightPolicy() {
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
            Human Rights Policy
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
        <Typography sx={{ mt: 3 }}>
          “Next Logistics” Ltd. adheres to the laws of the Republic of Bulgaria
          and international legislation in the field of human rights protection,
          requiring compliance in all aspects of its operations. We believe that
          every person has the right to dignity, equality, and fair treatment,
          regardless of gender, age, race, religion, nationality, sexual
          orientation, disability, or any other status.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: "bold" }}
        >
          Purpose of the Human Rights Policy of “Next Logistics” Ltd.:
        </Typography>
        <Typography sx={{ mt: 2 }}>
          The purpose of this policy is to provide clear rules and principles to
          which all employees, partners, and suppliers must adhere, creating:
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
              mt: 2,
              lineHeight: 1,
              fontSize: { xs: "0.9rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            A safe and pleasant working environment.
          </Typography>
          <Typography component="li">
            Increased social awareness and consciousness.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
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
            listStyleType: "circle",
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
          <Typography component="li" sx={{ listStyleType: "disc" }}>
            The policy applies to:
          </Typography>
          <Typography component="li">
            All employees of “Next Logistics” Ltd.;
          </Typography>
          <Typography component="li">
            All partners, suppliers, and subcontractors;
          </Typography>
          <Typography component="li">
            All processes and activities of the company related to labor,
            recruitment,training, and work with clients and partners.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
        >
          Key principles adhered to by “Next Logistics” Ltd.:
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
              lineHeight: 1.3,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            Safe and healthy working environment – working conditions that
            protect the health and safety of all employees are ensured.
          </Typography>
          <Typography component="li">
            {" "}
            Protection of rights and freedoms – protection of civil, political,
            economic, social, and cultural rights and freedoms.
          </Typography>
          <Typography component="li">
            Non-discrimination and equal treatment of employees, regardless of
            gender, race, ethnic origin, religion, beliefs, disability, age, or
            sexual orientation.
          </Typography>
          <Typography component="li">
            {" "}
            Equality and rights of vulnerable groups – people with disabilities
            and minorities.
          </Typography>
          <Typography component="li">
            {" "}
            Gender equality – at “Next Logistics” Ltd., we do not differentiate
            people by gender – women and men have equal rights and access to
            work and fair pay.
          </Typography>
          <Typography component="li">
            Promotion of free expression of opinions and beliefs – every
            employee may freely express their opinion, beliefs, and position.
          </Typography>
          <Typography component="li">
            Right to collective action by employees – to unite and negotiate
            their labor rights.
          </Typography>
          <Typography component="li">
            {" "}
            Combating child labor and forced labor.
          </Typography>
          <Typography component="li">
            Protection of personal data and confidentiality – personal data of
            employees, clients, and partners are treated confidentially and used
            only for lawful purposes.
          </Typography>
        </Box>
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
              mt: 1,
              lineHeight: 1.3,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            Introduction of annual monitoring of labor, ethical, social, and
            management practices among employees and suppliers.
          </Typography>
          <Typography component="li">
            Conduct at least one annual training for all employees on human
            rights, non-discrimination, and fair treatment.
          </Typography>
          <Typography component="li">
            Increase the share of suppliers with established internal policies
            on human rights, labor standards, and safety.
          </Typography>
          <Typography component="li">
            Improve control over documentation related to human rights and labor
            practices through standardized procedures and annual review.
          </Typography>
          <Typography component="li">
            Ensure equal access to learning and development opportunities for
            all employees, including vulnerable groups.
          </Typography>
          <Typography component="li">
            Conduct an annual assessment of the working environment focusing on
            safety, equality, and working conditions.
          </Typography>
          <Typography component="li">
            Strengthen personal data protection mechanisms through updated
            procedures and additional security measures.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
        >
          Expected results:
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
            Increased employee satisfaction and motivation.
          </Typography>
          <Typography component="li">
            Improved application of ethical and labor standards among partners
            and suppliers.
          </Typography>
          <Typography component="li">
            Better transparency and accountability of processes related to human
            rights.
          </Typography>
          <Typography component="li">
            Reduction of risks of labor and social rights violations.
          </Typography>
          <Typography component="li">
            Sustainable improvement of the working environment and corporate
            culture.
          </Typography>
        </Box>
        <Typography sx={{ mt: 2, color: "text.primary", fontWeight: 600 }}>
          Reporting violations:
        </Typography>
        <Typography sx={{ mt: 1, color: "text.secondary" }}>
          In case of suspected human rights violations, every employee is
          obliged to report it.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
        >
          Reporting procedure:
        </Typography>
        <Typography sx={{ mt: 1, color: "text.secondary" }}>
          Any employee who suspects abuse or violation of human rights must
          immediately report to:
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
          <Typography component="li">Their direct supervisor;</Typography>
          <Typography component="li">The Legal Department;</Typography>
          <Typography component="li">
            Through the internal reporting channels of “Next Logistics” Ltd.
          </Typography>
        </Box>
        <Typography sx={{ mt: 2 }}>
          If necessary and after verification, the company reports to the
          relevant competent authorities. All reports are treated
          confidentially, and good-faith reporters are protected from
          retaliation.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
        >
          Sanctions for non-compliance with the policy and/or the law:
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Upon receiving a report of violation, an internal investigation is
          conducted. If a violation is confirmed, depending on the severity of
          the case, the following measures may be applied:
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
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
        >
          Monitoring and accountability:
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
          Regular reporting of progress to management and stakeholders.
          <Typography component="li">
            Annual review of the human rights policy and practices.
          </Typography>
          <Typography component="li">
            Internal audit of labor and social processes.
          </Typography>
          <Typography component="li">
            Regular reporting of progress to management and stakeholders.
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

export default HumanRightPolicy;
