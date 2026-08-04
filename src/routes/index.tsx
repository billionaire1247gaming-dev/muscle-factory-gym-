import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/gym/SmoothScroll";
import { Nav } from "@/components/gym/Nav";
import { Hero } from "@/components/gym/Hero";
import { ThreeSection } from "@/components/gym/ThreeSection";
import { About } from "@/components/gym/About";
import { Stats } from "@/components/gym/Stats";
import { Services } from "@/components/gym/Services";
import { Membership } from "@/components/gym/Membership";
import { Contact } from "@/components/gym/Contact";
import { Footer } from "@/components/gym/Footer";

const title = "Muscle Factory Gym | Premium Fitness in Liluah, Howrah";
const description =
  "Muscle Factory Gym in Liluah, Howrah — expert trainers, modern equipment, strength training, fat loss, CrossFit and personal coaching. Join now.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthClub",
          name: "Muscle Factory Gym",
          description,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Liluah",
            addressRegion: "Howrah, West Bengal",
            addressCountry: "IN",
          },
          telephone: "+91 98000 00000",
          openingHours: "Mo-Su 06:00-22:00",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main className="relative">
        <Hero />
        <ThreeSection />
        <About />
        <Stats />
        <Services />
        <Membership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
