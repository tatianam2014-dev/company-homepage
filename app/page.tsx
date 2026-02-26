import Hero from "./components/Hero";
import USPStrip from "./components/USPStrip";
import CategoryCards from "./components/CategoryCards";
import ProductSection from "./components/ProductSection";
import WhyCompany from "./components/WhyCompany";
import TrustBar from "./components/TrustBar";
import Footer from "./components/Footer";


const recommendedProducts = [
  {
    id: 1,
    brand: "Apple",
    name: "iPhone 15",
    storage: "128 GB",
    price: "$849.00",
    oldPrice: "$949.00",
     badge: {
    label: "Bestseller",
    type: "bestseller" as const
  },
  },
  {
    id: 2,
    brand: "Samsung",
    name: "Galaxy S23",
    storage: "256 GB",
    price: "$749.00",
    oldPrice: "$899.00",
   badge: {
  label: "New",
  type: "new" as const
},
  },
  {
    id: 3,
    brand: "Apple",
    name: "iPhone 13 Pro",
    storage: "256 GB",
    price: "$799.00",
    oldPrice: "$899.00",
    badge: {
  label: "New",
  type: "new" as const
},
  },
  {
    id: 4,
    brand: "Samsung",
    name: "Galaxy Z Flip5",
    storage: "256 GB",
    price: "$949.00",
    oldPrice: "$1,099.00",
    badge: {
  label: "New",
  type: "new" as const
},
  },
];

const popularProducts = [
  {
    id: 5,
    brand: "Apple",
    name: "iPhone 15 Pro Max",
    storage: "256 GB",
    price: "$1,299.00",
    oldPrice: "$1,449.00",
     badge: {
    label: "Bestseller",
    type: "bestseller" as const
  },
  },
  {
    id: 6,
    brand: "Samsung",
    name: "Galaxy S24 Ultra",
    storage: "512 GB",
    price: "$1,189.00",
    oldPrice: "$1,399.00",
    badge: {
  label: "-15%",
  type: "discount" as const
},
  },
  {
    id: 7,
    brand: "Apple",
    name: "iPhone 14",
    storage: "128 GB",
    price: "$649.00",
    oldPrice: "$849.00",
    badge: {
  label: "New",
  type: "new" as const
},
  },
  {
    id: 8,
    brand: "Samsung",
    name: "Galaxy A55 5G",
    storage: "128 GB",
    price: "$399.00",
    oldPrice: "$479.00",
   badge: {
  label: "New",
  type: "new" as const
},
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <USPStrip />
      <CategoryCards />

      <ProductSection
        title="Recommended for you"
        subtitle="Handpicked popular models for you"
        products={recommendedProducts}
      />

      <ProductSection
        title="Popular Highlights"
        subtitle="Our bestsellers of the week"
        products={popularProducts}
      />

      <WhyCompany />
      <TrustBar />
      <Footer />
    </>
  );
}
