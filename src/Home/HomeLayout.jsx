import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import SkillTrends from "./components/SkillTrends.jsx";
import ProjectExplorer from "./components/ProjectExplorer.jsx";
import RoadmapSection from "./components/RoadmapSection.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import CTASection from "./components/CTASection.jsx";
import Footer from "./components/Footer.jsx";

export default function HomeLayout() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#080d1b] text-slate-100">
      <Navbar />
      <main>
        <Header />
        <SkillTrends />
        <ProjectExplorer />
        <RoadmapSection />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
