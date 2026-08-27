import PageLayout from "./PageLayout.jsx";
import About from "../components/About.jsx";
import VideoShowcase from "../components/VideoShowcase.jsx";

function AboutPage() {
  return (
    <PageLayout>
      <About />
      <VideoShowcase />
    </PageLayout>
  );
}

export default AboutPage;
