
import { MdStars } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { CiDiscount1 } from "react-icons/ci";
import { IoShieldCheckmark } from "react-icons/io5";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Link } from "react-router-dom";

const features = [
  {
    Icon: MdStars  ,
    name: "Best sellers",
    description: "Find the top rated products here",
    cta: "Click here",
    background: <img className="absolute -right-20 -top-20 opacity-60" src="https://www.creativefabrica.com/wp-content/uploads/2022/10/20/Best-seller-product-label-badge-design-Graphics-42494114-1.jpg" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: GiShoppingCart,
    name: "New arrivals",
    description: "Shop newly arrived products",
    cta: "Click here",
    background: <img className="absolute -right-20 -top-20 opacity-60" src="https://www.houseofsolutions.co.uk/wp-content/uploads/2020/02/New-arrivals.jpg" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: CiDiscount1,
    name: "Discounted products",
    description: "Checkout all discounted products",
    cta: "Click here",
    background: <img className="absolute -right-20 -top-20 opacity-60" src="https://static.vecteezy.com/system/resources/previews/009/335/924/original/glossy-red-and-white-discount-box-tag-any-position-3d-render-element-free-png.png" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: IoShieldCheckmark,
    name: "Check out all products",
    description: "Loot at every product we have",
    cta: <Link to="/allProducts">Check here</Link>,
    background: <img className="absolute -right-20 -top-20 opacity-60" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-gadgets-lead-1626467243.jpeg" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  }
];

export function Bento() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
