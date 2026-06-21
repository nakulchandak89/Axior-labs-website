import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const IntelligenceHub = dynamic(
  () =>
    import("@/components/visualizations/IntelligenceHub").then(
      (m) => m.IntelligenceHub
    ),
  { ssr: true }
);
const Problem = dynamic(
  () => import("@/components/sections/Problem").then((m) => m.Problem),
  { ssr: true }
);
const HowItWorks = dynamic(
  () => import("@/components/sections/HowItWorks").then((m) => m.HowItWorks),
  { ssr: true }
);
const Platform = dynamic(
  () => import("@/components/sections/Platform").then((m) => m.Platform),
  { ssr: true }
);
const LiveDeployment = dynamic(
  () =>
    import("@/components/sections/LiveDeployment").then(
      (m) => m.LiveDeployment
    ),
  { ssr: true }
);
const Industries = dynamic(
  () => import("@/components/sections/Industries").then((m) => m.Industries),
  { ssr: true }
);
const TechFoundation = dynamic(
  () =>
    import("@/components/sections/TechFoundation").then(
      (m) => m.TechFoundation
    ),
  { ssr: true }
);
const Vision = dynamic(
  () => import("@/components/sections/Vision").then((m) => m.Vision),
  { ssr: true }
);
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials").then((m) => m.Testimonials),
  { ssr: true }
);
const Contact = dynamic(
  () => import("@/components/sections/Contact").then((m) => m.Contact),
  { ssr: true }
);
const CTA = dynamic(
  () => import("@/components/sections/CTA").then((m) => m.CTA),
  { ssr: true }
);
const Footer = dynamic(
  () => import("@/components/sections/Footer").then((m) => m.Footer),
  { ssr: true }
);

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntelligenceHub />
        <Problem />
        <HowItWorks />
        <Platform />
        <LiveDeployment />
        <Industries />
        <TechFoundation />
        <Vision />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
