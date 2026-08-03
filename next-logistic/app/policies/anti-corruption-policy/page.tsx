import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SocialIcons from "@/components/socials/Socials";

function AntiCorruptionPolicyPage() {
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
            Anti-Corruption and Anti-Bribery Policy
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
          its contribution and responsibility towards the entire logistics
          industry, as well as towards all its counterparties and employees. The
          company is fully committed to conducting ethical, transparent, and
          lawful business operations and maintains zero tolerance for all forms
          of bribery and corruption. This policy establishes the principles and
          rules that all employees, managers, partners, and suppliers must
          follow in order to prevent, recognize, and report cases of bribery and
          corrupt practices.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
        >
          Main principles and rules of “Next Logistics” Ltd.:
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
            Zero tolerance for bribery and corruption – “Next Logistics” Ltd.
            ensures that the company and all employees and counterparties are
            aware of the meaning and significance of these terms, in order to
            prevent, recognize, and report them.
          </Typography>
          <Typography component="li">
            “Next Logistics” Ltd. conducts verification and identification of
            all individuals and organizations it works with. In case of
            suspicion of abuse, bribery, or corruption, it is reported to the
            competent persons and/or authorities, according to the established
            procedure.
          </Typography>
          <Typography component="li">
            Participation in any form of bribery, whether directly or through
            intermediaries, is prohibited.
          </Typography>
          <Typography component="li">
            Prohibition of offering or accepting benefits – No employee has the
            right to offer, provide, receive, or request gifts, money, or
            services that could affect the objectivity of business decisions.
          </Typography>
          <Typography component="li">
            Counterparties we work with are not allowed to offer bribes to
            influence the company’s business decisions.
          </Typography>
          <Typography component="li">
            Only symbolic gifts or gestures of courtesy are allowed, which do
            not create obligations and are in accordance with good business
            practices.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
        >
          The policy aims to:
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
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            Ensure that all company activities are conducted honestly and in
            accordance with the law;
          </Typography>
          <Typography component="li">
            Prevent any form of bribery, fraud, abuse of influence, conflict of
            interest, money laundering, or corruption, emphasizing that these
            are illegal actions and crimes under the laws of the Republic of
            Bulgaria and international legislation;
          </Typography>
          <Typography component="li">
            Protect the reputation and trust in “Next Logistics” Ltd.
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
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            Establish a culture of ethics and transparency among employees and
            partners;
          </Typography>
          <Typography component="li">
            Improve procedures for recognizing and preventing bribery, fraud,
            abuse of influence, conflict of interest, money laundering, or
            corruption;
          </Typography>
          <Typography component="li">
            Increase awareness of suppliers and counterparties regarding company
            requirements;
          </Typography>
          <Typography component="li">
            Implement annual monitoring and checks regarding corruption risks.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
        >
          Definitions:
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
            Bribery – Giving, receiving, or requesting an unlawful benefit (such
            as money, gifts, services, or others) with the purpose of
            influencing the decisions or actions of a person holding a position
            of authority or responsibility.
          </Typography>
          <Typography component="li">
            Corruption – Using one’s official or professional position for
            personal gain or the benefit of third parties, in violation of the
            law or ethical norms.
          </Typography>
          <Typography component="li">
            Conflict of interest – A situation in which a person faces a choice
            between their duties to the organization and personal interests that
            may affect the objectivity of their decisions.
          </Typography>
          <Typography component="li">
            Fraud – Deliberately misleading others to illegally or unfairly
            obtain a benefit.
          </Typography>
          <Typography component="li">
            Money laundering – Actions taken to conceal the origin, ownership,
            or intended use of funds obtained illegally or unfairly.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
        >
          Actions required from employees and counterparties:
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
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            Comply with the principles of zero tolerance for bribery, fraud,
            abuse of influence, conflict of interest, money laundering, or
            corruption;
          </Typography>
          <Typography component="li">
            Report any suspected violations;
          </Typography>
          <Typography component="li">
            Participate in ethics and anti-corruption trainings and briefings;
          </Typography>
          <Typography component="li">
            Provide documents and evidence for compliance with the policy;
          </Typography>
          <Typography component="li">
            Implement internal procedures to prevent corruption and abuse
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
        >
          Transparency and accountability:
        </Typography>
        <Typography sx={{ mt: 2 }}>
          All financial and business operations must be accurately, correctly,
          and properly documented, in accordance with legal requirements.
        </Typography>
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
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            Transparent and ethical business relationships based on trust;
          </Typography>
          <Typography component="li">
            Reduction of corruption risks and incidents;
          </Typography>
          <Typography component="li">
            Improved accountability and business process management;
          </Typography>
          <Typography component="li">
            Documented traceability of actions and policy implementation.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
        >
          Scope of the policy:
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
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            All employees and managers of “Next Logistics” Ltd.;
          </Typography>
          <Typography component="li">
            All business partners, suppliers, subcontractors, and consultants
            working on behalf of or with the company.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
        >
          Relevance:
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>
          Requirements apply according to the nature of the employee’s or
          counterparty’s activity, taking into account:
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
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            Role and responsibilities within the company;
          </Typography>
          <Typography component="li">
            Potential risks of bribery, fraud, abuse of influence, conflict of
            interest, money laundering, or corruption;
          </Typography>
          <Typography component="li">
            Frequency and significance of interaction with the company.
          </Typography>
        </Box>
        <Typography sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}>
          Traceability and monitoring:
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
            Maintaining registers and archives of reported violations and
            actions taken;
          </Typography>
          <Typography component="li">
            Annual compliance assessment and risk analysis;
          </Typography>
          <Typography component="li">
            Documenting incidents, corrective measures taken, and results;
          </Typography>
          <Typography component="li">
            Possibility of extraordinary checks in case of suspicion or
            increased risk.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
        >
          Evidence:
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
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">
            Internal anti-bribery, fraud, abuse of influence, conflict of
            interest, money laundering, or corruption policies and procedures;
          </Typography>
          <Typography component="li">
            Training and briefing documents;
          </Typography>
          <Typography component="li">
            Registers of submitted reports and actions taken;
          </Typography>
          <Typography component="li">
            Declarations of understanding the meaning of terms and compliance
            with the principles of zero tolerance for bribery, fraud, abuse of
            influence, conflict of interest, money laundering, or corruption;
          </Typography>
          <Typography component="li">
            Audits or compliance checks, where available.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mt: 2, fontWeight: 600 }}
        >
          Reporting violations:
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Any employee who suspects bribery, corruption, or any other form of
          abuse is obliged to immediately report to:
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
              lineHeight: 1.2,
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
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li">Official written warning;</Typography>
          <Typography component="li">
            Requirement for corrective actions within 30 days;
          </Typography>
          <Typography component="li">
            Temporary suspension of access or participation in work;
          </Typography>
          <Typography component="li">
            Financial penalties provided in the contract/order;
          </Typography>
          <Typography component="li">
            Termination of the contract/cooperation and removal from the
            approved partner list;
          </Typography>
          <Typography component="li">
            Notification of competent state authorities in case of legal
            violations.
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

export default AntiCorruptionPolicyPage;
