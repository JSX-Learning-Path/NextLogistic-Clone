import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
// import { Description } from "@mui/icons-material";

const technicalIconAndTitle = [
  {
    id: 1,
    icon: "/technical-icons/php.png",
    title: "PHP",
    description: "Server-side scripting language for dynamic web apps.",
    iconStyle: {
      width: "40px",
      height: "40px",
      objectFit: "contain",
    },
  },
  {
    id: 2,
    icon: "/technical-icons/laravel.png",
    title: "Laravel",
    description:
      "PHP framework for building web apps with a clean architecture.",
    iconStyle: {
      width: "40px",
      height: "40px",
      objectFit: "contain",
    },
  },
  {
    id: 3,
    icon: "/technical-icons/herd.png",
    title: "Herd",
    description: "Local PHP development environment with fast project setup.",
    iconStyle: {
      width: "40px",
      height: "40px",
      objectFit: "contain",
    },
  },
  {
    id: 4,
    icon: "/technical-icons/mySql.png",
    title: "MySQL",
    description: "Relational database management system for structured data.",
    iconStyle: {
      width: "40px",
      height: "40px",
      objectFit: "contain",
    },
  },
  {
    id: 5,
    icon: "/technical-icons/react.png",
    title: "React",
    description: "JavaScript library for building component-based UIs.",
    iconStyle: {
      width: "40px",
      height: "40px",
      objectFit: "contain",
    },
  },
  {
    id: 6,
    icon: "/technical-icons/type-script.png",
    title: "TypeScript",
    description:
      "The foundation of the web - content structure and interface styling.",
    iconStyle: {
      width: "40px",
      height: "40px",
      objectFit: "contain",
    },
  },
  {
    id: 7,
    icon: "/technical-icons/html.png",
    title: "HTML/CSS",
    description:
      "The foundation of the web - content structure and interface styling.",
    iconStyle: {
      width: "40px",
      height: "40px",
      objectFit: "contain",
    },
  },
  {
    id: 8,
    icon: "/technical-icons/jQuery.png",
    title: "jQuery",
    description: "JavaScript library for DOM manipulation and event handling.",
    iconStyle: {
      width: "40px",
      height: "40px",
      objectFit: "contain",
    },
  },
];
const creativeIconAndTitle = [
  {
    id: 1,
    icon: "/creative-icons/cursor.png",
    title: "Cursor",
    description:
      "AI code editor with context-aware completion and refactoring.",
    iconStyle: {
      width: "40px",
      height: "40px",
      objectFit: "contain",
    },
  },
  {
    id: 2,
    icon: "/creative-icons/claude.png",
    title: "Claude",
    description:
      "AI assistant for writing, analysis and everyday problem-solving.",
    iconStyle: {
      width: "40px",
      height: "40px",
      objectFit: "contain",
    },
  },
  {
    id: 3,
    icon: "/creative-icons/claude-design.png",
    title: "Claude Design",
    description: "AI tool for design and rapid prototyping.",
    iconStyle: {
      width: "40px",
      height: "40px",
      objectFit: "contain",
    },
  },
  {
    id: 4,
    icon: "/creative-icons/chat-gpt.png",
    title: "CodeEx",
    description: "AI coding agent for generating and editing code.",
    iconStyle: {
      width: "40px",
      height: "40px",
      objectFit: "contain",
    },
  },
  {
    id: 5,
    icon: "/creative-icons/figma.png",
    title: "Figma",
    description: "Collaborative tool for UI/UX design and prototyping.",
    iconStyle: {
      width: "40px",
      height: "40px",
      objectFit: "contain",
    },
  },
  {
    id: 6,
    icon: "/creative-icons/photoshop-ai.png",
    title: "Illustrator",
    description: "Vector graphics software for logos, icons and illustrations.",
    iconStyle: {
      width: "40px",
      height: "40px",
      objectFit: "contain",
    },
  },
  {
    id: 7,
    icon: "/creative-icons/photoshop.png",
    title: "Photoshop",
    description: "Editing and retouching of raster images and photos.",
    iconStyle: {
      width: "40px",
      height: "40px",
      objectFit: "contain",
    },
  },
  {
    id: 8,
    icon: "/creative-icons/analytics.png",
    title: "Google Analytics",
    description: "Analytics for site traffic and user behaviour.",
    iconStyle: {
      width: "40px",
      height: "40px",
      objectFit: "contain",
    },
  },
];

function TechnicalAndCreative() {
  return (
    <Box
      component="section"
      sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#FFFFFF" }}
    >
      {/*  Main*/}
      <Box sx={{ maxWidth: "1500px", margin: "0 auto", padding: "30px 20px" }}>
        {/* Top*/}
        <Box>
          <Typography
            gutterBottom
            sx={{ color: "#2962FF", fontWeight: "bold" }}
          >
            Technical
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2,minmax(0,1fr))",
              lg: "repeat(4,minmax(0,1fr))",
            },
            gap: "16px",
            padding: { xs: "8px", md: "16px", lg: "24px" },
          }}
        >
          {technicalIconAndTitle.map((item) => (
            <Card
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "16px",
                border: "1px solid #E0E7FF",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
              }}
            >
              <Box
                component="img"
                src={item.icon}
                alt={item.title}
                sx={item.iconStyle}
              />
              <Box>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">{item.description}</Typography>
              </Box>
            </Card>
          ))}
        </Box>
        {/*  Bottom of Technical Section */}
        <Box component="div" sx={{ marginTop: "140px" }}>
          <Box>
            <Typography
              gutterBottom
              sx={{ color: "#2962FF", fontWeight: "bold" }}
            >
              Creative
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2,minmax(0,1fr))",
                lg: "repeat(4,minmax(0,1fr))",
              },
              gap: "16px",
              padding: { xs: "8px", md: "16px", lg: "24px" },
            }}
          >
            {creativeIconAndTitle.map((item) => (
              <Card
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px",
                  border: "1px solid #E0E7FF",
                  borderRadius: "16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                }}
              >
                <Box
                  component="img"
                  src={item.icon}
                  alt={item.title}
                  sx={item.iconStyle}
                />
                <Box>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TechnicalAndCreative;
