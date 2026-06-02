import Features from "@/Components/Features";
import HeroBanner from "@/Components/HeroBanner";
import { HowItWorks, Testimonials } from "@/Components/WorkAndTestimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Features></Features>
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>
    </div>
  );
}
