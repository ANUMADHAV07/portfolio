import Hero from "@/components/Hero";
import About from "@/components/About";

import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Contact />
    </main>
  );
}
