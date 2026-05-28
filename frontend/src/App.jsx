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
import WhatWeDo from './pages/WhatWeDo';
import { Awards, Resources, GetInvolved, AuditReport, AnnualReport, Blog } from './pages/OtherPages';

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
            <Route path="/impact" element={<Impact />} />
            <Route path="/program" element={<Program />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/get-involved" element={<GetInvolved />} />
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
