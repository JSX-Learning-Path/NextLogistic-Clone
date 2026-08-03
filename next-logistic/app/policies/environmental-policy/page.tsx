import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SocialIcons from "@/components/socials/Socials";

function EnvironmentalPolicyPage() {
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
            Environmental Policy
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
          its contribution and responsibility toward environmental protection
          and human health.
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
            listStylePosition: "outside",
            listStyleType: "disc",
            "&": { margin: 0 },
            "& li": {
              mt: 1,
              mb: 1,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            Promote environmental protection and responsible use of resources;
          </Typography>
          <Typography component="li">
            Minimize the environmental impacts arising from logistics,
            transport, and administrative activities;
          </Typography>
          <Typography component="li">
            Implement sustainable, innovative, and energy-efficient solutions;
          </Typography>
          <Typography component="li">
            Foster a culture of environmental responsibility among employees,
            partners, and suppliers.
          </Typography>
        </Box>
        <Typography sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}>
          Scope of the policy:
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
              mb: 1,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">Transport and logistics;</Typography>
          <Typography component="li">Warehouse operations;</Typography>
          <Typography component="li">Administrative processes;</Typography>
          <Typography component="li">
            Interaction with clients, partners, suppliers, and carriers.
          </Typography>
        </Box>
        <Typography sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}>
          Goals and principles:
        </Typography>
        <Typography sx={{ mt: 1 }}>Compliance with legislation:</Typography>
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
              mt: 0,
              mb: 1,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            We comply with all applicable national and European environmental
            laws, regulations, and standards.
          </Typography>
          <Typography component="li">
            We monitor current changes in environmental legislation and adapt
            our internal practices accordingly.
          </Typography>
        </Box>
        <Typography sx={{ mt: 2, mb: 1 }}>
          Pollution prevention and resource efficiency:
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
              mt: 0.5,
              mb: 1,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            We reduce emissions from vehicles through regular maintenance
            requirements and the use of energy-efficient technologies.
          </Typography>
          <Typography component="li">
            We do not use vehicles that fail to meet environmental standards or
            cause pollution.
          </Typography>
          <Typography component="li">
            We ensure the technical fitness of vehicles to limit harmful
            emissions.
          </Typography>
        </Box>
        <Typography sx={{ mt: 2, mb: 1 }}>
          Combined and energy-efficient transport:
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
              mt: 0.5,
              mb: 1,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            We optimize routes, using maritime and land transport to reduce the
            carbon footprint.
          </Typography>
          <Typography component="li">
            We use modern, energy-efficient trucks, including hybrid and LNG
            (liquefied natural gas) technologies.
          </Typography>
          <Typography component="li">
            We organize shipments with minimal mileage and optimal load
            capacity.
          </Typography>
          <Typography component="li">
            Combined transport is a key part of our green logistics, combining
            maritime and land transport for lower energy consumption and fewer
            emissions.
          </Typography>
        </Box>
        <Typography sx={{ mt: 2, mb: 1 }}>
          Energy efficiency and sustainable practices:
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
              mt: 0.5,
              mb: 1,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            {" "}
            The base of “Next Logistics” Ltd. is fully powered by photovoltaic
            batteries, reducing the carbon footprint and increasing energy
            independence.
          </Typography>
          <Typography component="li">
            We encourage policies for reuse and recycling to reduce waste.
          </Typography>
          <Typography component="li">
            {" "}
            We ensure proper collection, separation, and disposal of waste at
            the company’s base.
          </Typography>
          <Typography component="li">
            {" "}
            We collect data on electricity, water, and consumables usage to
            optimize consumption and reduce environmental impact.
          </Typography>
        </Box>
        <Typography
          sx={{ color: "text.secondary", mt: 2, fontStyle: "italic" }}
        >
          *In 2023, our logistics group saved over 140,000 tons of CO₂ emissions
          through rail, intermodal, and river transport solutions, reaffirming
          our commitment to sustainable development.
        </Typography>
        <Typography sx={{ mt: 2, fontWeight: 600, color: "text.primary" }}>
          Raising employee awareness:
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
              mt: 0.5,
              mb: 1,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            We conduct trainings and internal campaigns on environmental
            protection topics.
          </Typography>
          <Typography component="li">
            We encourage employees to propose ideas and solutions for ecological
            improvements in daily work.
          </Typography>
        </Box>
        <Typography sx={{ mt: 2, fontWeight: 600, color: "text.primary" }}>
          Continuous improvement:
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
              mt: 0.5,
              mb: 1,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            We regularly assess environmental risks and impacts of our
            activities.
          </Typography>
          <Typography component="li">
            We define key performance indicators (KPI) to measure environmental
            performance.
          </Typography>
          <Typography component="li">
            We review the policy annually and update it as needed.
          </Typography>
        </Box>
        <Typography sx={{ mt: 2, fontWeight: 600, color: "text.primary" }}>
          Objectives to be achieved by 31.12.2026:
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
              mt: 0.5,
              mb: 1,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            Reduce electricity consumption in administrative buildings through
            optimization and implementation of efficient systems;
          </Typography>
          <Typography component="li">
            Increase the proportion of recycled waste in total waste generated
            at the base;
          </Typography>
          <Typography component="li">
            Conduct at least one annual training for employees related to
            environmental practices and protection;
          </Typography>
          <Typography component="li">
            Increase the share of shipments carried out via combined transport;
          </Typography>
          <Typography component="li">
            Maintain 100% technical fitness of transport vehicles;
          </Typography>
          <Typography component="li">
            Establish at least one partnership with an organization or supplier
            offering innovative ecological solutions;
          </Typography>
          <Typography component="li">
            Conduct at least one annual internal environmental survey to assess
            employee engagement and awareness.
          </Typography>
        </Box>
        <Typography sx={{ mt: 2, fontWeight: 600, color: "text.primary" }}>
          Sanctions:
        </Typography>
        <Typography sx={{ mt: 2, mb: 1 }}>
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
            listStylePosition: "outside",
            listStyleType: "disc",
            "&": { margin: 0 },
            "& li": {
              mt: 0.5,
              mb: 1,
              lineHeight: 1.2,
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
        <Typography sx={{ mt: 2, fontWeight: 600, color: "text.primary" }}>
          Implementation and accessibility:
        </Typography>
        <Typography sx={{ mt: 1 }}>
          This Environmental Protection Policy is publicly accessible and takes
          effect immediately upon its approval. It serves as the basis for all
          subsequent environmental programs, reports, and initiatives of the
          company.
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

export default EnvironmentalPolicyPage;
