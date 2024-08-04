import { About, Benefits, ClassDetails, Classes, Hero, Testimonials } from "./components";

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <About />
      <Benefits/>
      <Testimonials/>
      <Classes/>
    </main>
  );
}
