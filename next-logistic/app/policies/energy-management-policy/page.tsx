import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SocialIcons from "@/components/socials/Socials";

function EnergyManagementPolicy() {
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
            Energy Management Policy
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
        <Typography sx={{ mt: 2 }}>
          As a leader in the logistics sector, “Next Logistics” Ltd. recognizes
          its contribution and responsibility to the entire logistics sector, as
          well as to all its contractors and employees. Energy efficiency is a
          key factor for the sustainable development of the company and for
          implementing green logistics, which contributes to a cleaner and safer
          environment for employees, partners, and society. Through optimized
          transport, intermodal solutions, and the implementation of
          energy-saving technologies, the company aims to achieve a significant
          reduction in energy consumption and carbon footprint.
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
            Sustainable reduction of energy consumption;
          </Typography>
          <Typography component="li">
            Optimization of energy processes;
          </Typography>
          <Typography component="li">
            Implementation of energy-efficient technologies;
          </Typography>
          <Typography component="li">
            Reduction of environmental impacts;
          </Typography>
          <Typography component="li">
            Transparency and accountability.
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
          <Typography component="li">All company employees;</Typography>
          <Typography component="li">
            All administrative, logistics, and operational activities.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
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
            listStyleType: "disc",
            listStylePosition: "outside",
            textAlign: "left",
            "&": { margin: 0 },
            "& li": {
              mb: 1,
              mt: 1,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            Energy efficiency – optimizing energy consumption through the
            introduction of energy-saving technologies and practices.
          </Typography>
          <Typography component="li">
            Continuous improvement – regular monitoring, measurement, and
            analysis of energy indicators for continuous improvement.
          </Typography>
          <Typography component="li">
            Eco-friendly combined transport – by optimizing maritime and land
            routes, we reduce the carbon footprint, using more efficient
            vehicles, shortening distances, and minimizing transit times.
          </Typography>
          <Typography component="li">
            Energy-efficient land transport – greener transport, cleaner future
            – organizing transportation with modern, energy-efficient vehicles
            that reduce fuel consumption and carbon emissions. By using
            low-energy trucks, hybrid, and LNG (liquefied natural gas)
            technologies, we optimize deliveries while protecting the
            environment.
          </Typography>
          <Typography component="li">
            Compliance with all applicable laws, regulations, and energy
            efficiency standards.
          </Typography>
          <Typography component="li">
            Employee training and engagement – preparing and motivating staff
            for active participation in energy efficiency initiatives.
          </Typography>
          <Typography component="li">
            Sustainability and environmental responsibility – reducing harmful
            emissions and minimizing environmental impact through the rational
            use of energy.
          </Typography>
          <Typography component="li">
            Encouraging the use of electronic documents, as well as maintaining
            a policy for reuse and recycling to reduce consumption and
            environmental impact.
          </Typography>
          <Typography component="li">
            Use of photovoltaic systems – the base of “Next Logistics” Ltd. is
            fully powered by photovoltaic batteries, reducing the carbon
            footprint and increasing energy efficiency.
          </Typography>
          <Typography component="li">
            Implementation of modern energy-saving technologies in all key
            processes and facilities.
          </Typography>
          <Typography component="li">
            Regular energy audits and optimization of energy usage.
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
              lineHeight: 1.1,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            Reduce overall electricity consumption through equipment
            optimization and introduction of energy-efficient practices;
          </Typography>
          <Typography component="li">
            Increase the share of self-produced energy from the photovoltaic
            system;
          </Typography>
          <Typography component="li">
            Implement lighting and climate control management systems;
          </Typography>
          <Typography component="li">
            Conduct annual training for all employees on energy efficiency and
            sustainable practices;
          </Typography>
          <Typography component="li">
            Introduce monitoring and analysis of energy consumption;
          </Typography>
          <Typography component="li">
            Establish strategic partnerships related to energy-saving or green
            solutions;
          </Typography>
          <Typography component="li">
            Increase the share of subcontractors applying energy- or
            environmentally-efficient practices;
          </Typography>
          <Typography component="li">
            Apply energy efficiency criteria when selecting and evaluating
            suppliers and partners.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
        >
          Sanctions:
        </Typography>
        <Typography sx={{ color: "text.secondary", mt: 1 }}>
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
          <Typography component="li">Termination of employment;</Typography>
          <Typography component="li">
            If necessary – notification of competent authorities.
          </Typography>
        </Box>
        <Typography sx={{ mt: 2 }}>
          The policy will be reviewed at least once a year and updated as needed
          to reflect changes in the regulatory framework, technologies, or the
          company’s internal objectives.
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

export default EnergyManagementPolicy;
