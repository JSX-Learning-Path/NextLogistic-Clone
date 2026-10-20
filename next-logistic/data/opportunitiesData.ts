import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HandshakeIcon from "@mui/icons-material/Handshake";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CachedIcon from "@mui/icons-material/Cached";

interface Opportunity {
  id: number;
  title: string;
  heading: string;
  description: string;
  icon: string;
}

export const opportunitiesData = [
  {
    id: 1,
    title: "TEAMWORK",
    heading: "The strength of unity leads us to success together",
    description:
      "Collaboration and mutual support are central to our corporate principles. We believe that together we can achieve greater success.",
    icon: PeopleAltIcon,
  },
  {
    id: 2,
    title: "INNOVATION",
    heading: "Bold ideas become reality",
    description:
      "Every success starts with an idea. We pursue new opportunities, embrace challenges, and work hard to make them happen.",
    icon: LightbulbIcon,
  },
  {
    id: 3,
    title: "COMMITMENT",
    heading: "A drive that builds trust",
    description:
      "Our commitment defines us as a leader. We act with a clear vision, take responsibility, and deliver sustainable results.",
    icon: HandshakeIcon,
  },
  {
    id: 4,
    title: "ADAPTABILITY",
    heading: "Ready for every challenge",
    description:
      "We anticipate change, adapt with ease, and turn it into a competitive advantage for our clients.",
    icon: CachedIcon,
  },
  {
    id: 5,
    title: "SOCIAL RESPONSIBILITY",
    heading: "Helping today to change tomorrow",
    description:
      "Success matters when it's shared. We support initiatives that grow the communities we live in.",
    icon: VolunteerActivismIcon,
  },
  {
    id: 6,
    title: "RECOGNITION",
    heading: "Every contribution matters to us",
    description:
      "A career is built through effort and a drive to grow. We value every talent, idea, and skill that moves our team forward.",
    icon: EmojiEventsIcon,
  },
];
