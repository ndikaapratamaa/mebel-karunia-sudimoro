import { Categories } from "@/components/home/Categories";
import { Faq } from "@/components/home/Faq";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";
import { Location } from "@/components/home/Location";
import { OurStory } from "@/components/home/OurStory";
import { Portfolio } from "@/components/home/Portfolio";
import { Promo } from "@/components/home/Promo";
import { Strengths } from "@/components/home/Strengths";
import { Testimonials } from "@/components/home/Testimonials";
import { WhatsAppCta } from "@/components/home/WhatsAppCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Promo />
      <Strengths />
      <Categories />
      <FeaturedProducts />
      <Portfolio />
      <Testimonials />
      <Faq />
      <WhatsAppCta />
      <OurStory />
      <Location />
    </>
  );
}
