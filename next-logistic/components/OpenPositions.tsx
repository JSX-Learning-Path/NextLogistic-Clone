import {
  Box,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";

import { jobsData } from "../data/jobsData";

function OpenPositions() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#FFFFFF",
        width: "100%",
        boxSizing: "border-box",
        py: 5,
      }}
    >
      {/* Section Header */}
      <Box
        sx={{
          maxWidth: "1500px",
          margin: "0 auto",
          px: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            letterSpacing: "1px",
            fontWeight: 700,
            color: "#2962FF",
            mb: 2,
            textTransform: "uppercase",
          }}
        >
          Open Positions
        </Typography>

        <Box
          component="span"
          sx={{
            display: "block",
            width: "43px",
            backgroundColor: "#2962FF",
            height: "2px",
          }}
        />

        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: 700,
            mt: 2,
            color: "#2962FF",
          }}
        >
          Join{" "}
          <Box component="span" sx={{ color: "black" }}>
            our team
          </Box>
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            mt: 2,
            color: "#333333",
            lineHeight: 1.7,
          }}
        >
          A company's success depends on the people who build it. That's why we
          look for motivated, ambitious professionals ready to grow in a dynamic
          environment and be part of a strong team. We believe opportunities to
          grow and improve are the key to sustainable development, so we offer a
          modern work environment, challenging projects, and real career
          prospects. If you're looking for a place to reach your potential and
          contribute to shared success, explore our open positions and become
          part of our team.
        </Typography>
      </Box>

      {/* Jobs Table */}
      <Box
        sx={{
          maxWidth: "1500px",
          margin: "40px auto 0",
          px: 2,
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>Position</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Department</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Location</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Working Hours</TableCell>
                <TableCell align="right" />
              </TableRow>
            </TableHead>
            <TableBody>
              {jobsData.map((job) => (
                <TableRow
                  key={job.id}
                  sx={{
                    "&:hover": { backgroundColor: "#F8FAFF" },
                    transition: "background-color 0.4s",
                  }}
                >
                  <TableCell sx={{ fontWeight: 600 }}>{job.position}</TableCell>
                  <TableCell>{job.department}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>{job.workingHours || "N/A"}</TableCell>
                  <TableCell align="right">
                    <Button
                      LinkComponent="a"
                      href={`/jobs/${job.id}`}
                      variant="outlined"
                      size="small"
                      sx={{
                        color: "#2962FF",
                        borderColor: "#E2E8F0",
                        borderRadius: "30px",
                        textTransform: "none",
                        fontWeight: 600,
                        px: 2,
                        whiteSpace: "nowrap",
                        "&:hover": {
                          borderColor: "#2962FF",
                          backgroundColor: "#F8FAFF",
                        },
                      }}
                    >
                      View details ›
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default OpenPositions;
