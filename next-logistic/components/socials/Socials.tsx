import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function SocialIcons() {
  const sxCircle = {
    border: "1px solid #2b6de6",
    color: "#2b6de6",
    borderRadius: "50%",
    width: 38,
    height: 38,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  };

  return (
    <Stack
      component="div"
      direction="row"
      spacing={2}
      sx={{ alignItems: "center", justifyContent: "center" }}
    >
      <IconButton
        component="a"
        href="https://www.facebook.com/NextLogistic"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        sx={sxCircle}
      >
        <FacebookIcon />
      </IconButton>

      <IconButton
        component="a"
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
        sx={sxCircle}
      >
        <XIcon />
      </IconButton>

      <IconButton
        component="a"
        href="https://www.linkedin.com/company/nextlogistic/posts/?feedView=all"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        sx={sxCircle}
      >
        <LinkedInIcon />
      </IconButton>

      <IconButton
        component="a"
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        sx={sxCircle}
      >
        <WhatsAppIcon />
      </IconButton>
    </Stack>
  );
}
