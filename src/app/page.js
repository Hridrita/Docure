import Features from "@/Components/Features";
import HeroBanner from "@/Components/HeroBanner";
import OurMission from "@/Components/OurMission";
import { HowItWorks, Testimonials } from "@/Components/WorkAndTestimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Features></Features>
      <HowItWorks></HowItWorks>
      <OurMission></OurMission>
      <Testimonials></Testimonials>
    </div>
  );
}
