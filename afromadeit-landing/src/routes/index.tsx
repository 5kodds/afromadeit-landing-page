import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AfroMadeIt Global — Strategic HR Consulting for Small Business & Nonprofits" },
      {
        name: "description",
        content:
          "HR consulting for small businesses and nonprofits: employee handbooks, compliance, recruiting, and people-first guidance from Peggy Joseph, MS-HRM.",
      },
      { property: "og:title", content: "AfroMadeIt Global — Strategic HR Consulting" },
      {
        property: "og:description",
        content:
          "Helping small businesses and nonprofits build strong, compliant, and people-centered workplaces.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
