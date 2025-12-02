import Hero from "@/components/landing/Hero";
import SingleProduct from "@/components/shopping/SingleProduct";
import Testimonial from "@/components/landing/Testimonial";
import Image from "next/image";
import LandingProduct from "@/components/landing/LandingProduct";

export default function Home() {
  return (
    <div>
      <Hero />
      <LandingProduct />
      <Testimonial />
    </div>
  );
}
