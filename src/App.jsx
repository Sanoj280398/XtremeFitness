import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ExclusiveExercises from "./components/ExclusiveExercises.jsx";
import About from "./components/About.jsx";
import VideoShowcase from "./components/VideoShowcase.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Pricing from "./components/Pricing.jsx";
import Trainers from "./components/Trainers.jsx";
import Contact from "./components/Contact.jsx";
import Blog from "./components/Blog.jsx";
import Footer from "./components/Footer.jsx";

// Samler alle sektioner af siden i den rækkefølge de skal vises (matcher Figma)
function App() {
  return (
    <>
      <Header />
      <Hero />
      <ExclusiveExercises />
      <About />
      <VideoShowcase />
      <Services />
      <Testimonials />
      <Pricing />
      <Trainers />
      <Contact />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
