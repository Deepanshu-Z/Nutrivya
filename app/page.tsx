import Hero from "@/components/landing/Hero";
import SingleProduct from "@/components/shopping/SingleProduct";
import Testimonial from "@/components/landing/Testimonial";
import Image from "next/image";
import LandingProduct from "@/components/landing/LandingProduct";
import Products from "@/components/landing/Products";
import Integrations from "@/components/landing/Integrations";

export default function Home() {
  return (
    <div>
      <Hero />
      <Integrations />
      <Products />
      <Testimonial />
    </div>
  );
}
