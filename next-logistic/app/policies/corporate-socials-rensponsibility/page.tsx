import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SocialIcons from "@/components/socials/Socials";

function CorporateSocialResponsibility() {
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
            Corporate Social Responsibility (CSR) Policy
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
          “Next Logistics” Ltd. recognizes the importance of sustainable
          development and social responsibility. We are committed to managing
          our business in a way that has a positive impact on society, the
          environment, and the economy, while maintaining high standards of
          ethics and transparency.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 1, fontWeight: 600 }}
        >
          Main principles :
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
            Ethics and transparency – adherence to high ethical standards in all
            processes.
          </Typography>
          <Typography component="li">
            Environment – responsible use of resources, minimizing the
            ecological footprint.
          </Typography>
          <Typography component="li">
            Social commitment – support for community projects and initiatives.
          </Typography>
          <Typography component="li">
            Workplace – safe, equitable, and professional environment.
          </Typography>
          <Typography component="li">
            Partnerships – selection of suppliers and partners who share our
            sustainability values.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 1, fontWeight: 600 }}
        >
          Practical measures:
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
            Trainings and campaigns to reduce waste and energy consumption.
          </Typography>
          <Typography component="li">
            Support for educational, health, and social initiatives.
          </Typography>
          <Typography component="li">
            Development and training of employees.
          </Typography>
          <Typography component="li">
            Encouragement of volunteer work.
          </Typography>
          <Typography component="li">
            Regular assessment of the social and environmental impact of
            activities.
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
              lineHeight: 1,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography sx={{ mb: 2 }}>Environmental sustainability:</Typography>
          <Typography component="li">
            Reduction of CO₂ emissions through optimization of transport routes.
          </Typography>
          <Typography component="li">
            Reduction of waste through recycling and process streamlining.
          </Typography>
        </Box>
        <Typography sx={{ mb: 2, mt: 2 }}>
          Healthy and safe working conditions:
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
            Zero workplace accidents and mandatory annual occupational safety
            training.
          </Typography>
          <Typography component="li">
            Employee mental health and well-being program.
          </Typography>
        </Box>
        <Typography sx={{ mt: 2, mb: 2 }}>Social engagement:</Typography>
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
            Support of at least 3 new social or educational initiatives.
          </Typography>
          <Typography component="li">
            Employee participation in volunteer initiatives.
          </Typography>
        </Box>
        <Typography sx={{ mt: 2, mb: 2 }}>Ethics and governance:</Typography>
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
            Internal audits and compliance control with ethical standards.
          </Typography>
          <Typography component="li">
            Maintenance of a feedback and violation reporting system.
          </Typography>
        </Box>
        <Typography sx={{ mt: 2, mb: 2 }}>
          Partnerships and supply chains:
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
            Evaluation of new suppliers based on social and environmental
            criteria.
          </Typography>
        </Box>
        <Typography sx={{ mt: 2, mb: 2 }}>Training and development:</Typography>
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
            Mandatory training for every employee.
          </Typography>
          <Typography component="li">
            Competency development program for all employees.
          </Typography>
        </Box>
        <Typography sx={{ mt: 2, mb: 2 }}>Control and monitoring:</Typography>
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
            Regular review of societal and environmental impact.
          </Typography>
          <Typography component="li">
            Audits and internal control to ensure compliance with CSR and
            ethical standards.
          </Typography>
          <Typography component="li">
            Documentation and accountability for inspections by external and
            internal authorities.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
        >
          Sanctions for non-compliance with the policy and/or the law:
        </Typography>
        <Typography sx={{ mt: 1 }}>
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
        <Typography sx={{ mt: 2 }}>
          “Next Logistics” Ltd. regularly monitors the implementation of CSR.
          Every logistics process is assessed regarding its social and
          environmental impact, aiming for continuous improvement.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          We create innovative systems, integrate artificial intelligence, and
          transform logistics management. With our technologies, we ensure
          efficiency, transparency, and innovation to maintain our leadership in
          logistics.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Corporate social responsibility is an integral part of the strategy
          and values of “Next Logistics” Ltd. By implementing this policy, we
          aim to be a sustainable and responsible business partner and a
          responsible member of society.
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
export default CorporateSocialResponsibility;
