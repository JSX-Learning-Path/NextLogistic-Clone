import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CakeIcon from "@mui/icons-material/Cake";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CelebrationIcon from "@mui/icons-material/Celebration";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ApartmentIcon from "@mui/icons-material/Apartment";

interface FaqIcons {
  id: number;
  icon: React.ElementType;
  title: string;
}

export const faqIcons: FaqIcons[] = [
  {
    id: 1,
    icon: ShieldOutlinedIcon,
    title: "Security,fairness",
  },
  {
    id: 2,
    icon: SchoolIcon,
    title: "Training and courses",
  },
  {
    id: 3,
    icon: TrendingUpIcon,
    title: "Career development",
  },
  {
    id: 4,
    icon: Diversity3Icon,
    title: "Friendly team",
  },
  {
    id: 5,
    icon: CakeIcon,
    title: "Birthday bonus",
  },
  {
    id: 6,
    icon: AttachMoneyIcon,
    title: "Montly / annual bonus",
  },
  {
    id: 7,
    icon: CelebrationIcon,
    title: "Parties and team building",
  },
  {
    id: 8,
    icon: CardGiftcardIcon,
    title: "Holiday gifts",
  },
  {
    id: 9,
    icon: ApartmentIcon,
    title: "Modern workplace",
  },
];
