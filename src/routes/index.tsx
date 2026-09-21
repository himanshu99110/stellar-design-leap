import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/home/Hero";
import { Welcome } from "@/components/home/Welcome";
import { Motto } from "@/components/home/Motto";
import { GalleryMarquee } from "@/components/home/GalleryMarquee";
import { Pillars } from "@/components/home/Pillars";
import { Leader } from "@/components/home/Leader";
import { FunFacts } from "@/components/home/FunFacts";
import { Videos } from "@/components/home/Videos";
import { NewsFeedbackContact } from "@/components/home/NewsFeedbackContact";

const TITLE = "Silverline Prestige School Ghaziabad | Best Pre Primary & Primary School since 1987";
const DESC =
  "Silverline Prestige School (SLPS), Ghaziabad — creating global citizens since 1987. Playgroup to Class VIII across Nehru Nagar, Kavi Nagar and Bulandshahr Road. Admissions open 2027-28.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Motto />
        <GalleryMarquee />
        <Pillars />
        <Leader />
        <FunFacts />
        <Videos />
        <NewsFeedbackContact />
      </main>
      <Footer />
    </>
  );
}
