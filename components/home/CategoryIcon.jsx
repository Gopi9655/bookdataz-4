import {
  Banknote,
  Building2,
  Car,
  Factory,
  Film,
  GraduationCap,
  HandHeart,
  HardHat,
  HeartPulse,
  Hotel,
  Landmark,
  RadioTower,
  Scale,
  ShoppingBag,
  Truck,
  Utensils,
  Zap,
  Cpu,
} from "lucide-react";

const icons = {
  Healthcare: HeartPulse,
  Technology: Cpu,
  Finance: Banknote,
  Education: GraduationCap,
  Retail: ShoppingBag,
  Manufacturing: Factory,
  Energy: Zap,
  Hospitality: Hotel,
  "Real Estate": Building2,
  Government: Landmark,
  Automotive: Car,
  Telecommunications: RadioTower,
  Logistics: Truck,
  "Legal Services": Scale,
  "Media and Entertainment": Film,
  "Non-Profit": HandHeart,
  Construction: HardHat,
  "Food and Beverage": Utensils,
};

const CategoryIcon = ({ title, size = 22, className }) => {
  const Icon = icons[title] ?? Building2;

  return <Icon size={size} className={className} aria-hidden="true" />;
};

export default CategoryIcon;
