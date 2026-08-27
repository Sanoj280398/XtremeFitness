import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ExclusiveExercises from "./components/ExclusiveExercises.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Pricing from "./components/Pricing.jsx";
import Trainers from "./components/Trainers.jsx";
import Contact from "./components/Contact.jsx";
import Blog from "./components/Blog.jsx";
import Footer from "./components/Footer.jsx";

// Hjemmesiden indeholder kun home-framen; de øvrige Figma-frames har egne routes
function App() {
  return (
    <>
      <Header />
      <Hero />
      <ExclusiveExercises />
      <About />
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
