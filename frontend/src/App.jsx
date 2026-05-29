import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Impact from './pages/Impact';
import Program from './pages/Program';
import Contact from './pages/Contact';
import OurFocusArea from './pages/OurFocusArea';
import WhatsUnique from './pages/WhatsUnique';
import { Resources, GetInvolved, AuditReport, AnnualReport, Blog } from './pages/OtherPages';
import Awards from './pages/Awards';
import Donors from './pages/Donors';
import SuccessStories from './pages/SuccessStories';
import StoryLasya from './pages/stories/StoryLasya';
import StoryFloodRelief from './pages/stories/StoryFloodRelief';
import StoryCoaching from './pages/stories/StoryCoaching';
import StoryWheelchairs from './pages/stories/StoryWheelchairs';
import StoryKerala from './pages/stories/StoryKerala';
import StorySewing from './pages/stories/StorySewing';
import StoryCyclone from './pages/stories/StoryCyclone';
import Gallery from './pages/Gallery';
import PresidentDesk from './pages/PresidentDesk';
import VisionMission from './pages/VisionMission';
import ProgramStrategy from './pages/ProgramStrategy';
import ChildRightsProtection from './pages/ChildRightsProtection';
import EducationPage from './pages/EducationPage';
import WomenChildHealth from './pages/WomenChildHealth';
import WomenEmpowerment from './pages/WomenEmpowerment';
import KarunyaChildrensHome from './pages/KarunyaChildrensHome';
import OtherInitiatives from './pages/OtherInitiatives';

function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollReset />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/president-desk" element={<PresidentDesk />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/program-strategy" element={<ProgramStrategy />} />
            <Route path="/child-rights-protection" element={<ChildRightsProtection />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/women-child-health" element={<WomenChildHealth />} />
            <Route path="/women-empowerment" element={<WomenEmpowerment />} />
            <Route path="/karunya-childrens-home" element={<KarunyaChildrensHome />} />
            <Route path="/other-initiatives" element={<OtherInitiatives />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/program" element={<Program />} />
            <Route path="/our-focus-area" element={<OurFocusArea />} />
            <Route path="/whats-unique" element={<WhatsUnique />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/resources" element={<Gallery />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/donors" element={<Donors />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/inspiring-story-of-lasya-and-revathi" element={<StoryLasya />} />
            <Route path="/east-and-west-godavari-emergency-flood-relief-2019" element={<StoryFloodRelief />} />
            <Route path="/watch-organized-special-coaching-program" element={<StoryCoaching />} />
            <Route path="/30-free-wheelchairs" element={<StoryWheelchairs />} />
            <Route path="/kerela-cyclone-relief-2018" element={<StoryKerala />} />
            <Route path="/sewing-success" element={<StorySewing />} />
            <Route path="/emergency-flood-relief-tamil-nadu" element={<StoryCyclone />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/audit-report" element={<AuditReport />} />
            <Route path="/annual-report" element={<AnnualReport />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}
