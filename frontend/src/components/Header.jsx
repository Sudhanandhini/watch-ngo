import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo-watch.png';

const aboutSubmenu = [
  { label: 'PRESIDENT DESK', path: '/president-desk' },
  { label: 'VISION & MISSION', path: '/vision-mission' },
  { label: 'PROGRAM STRATEGY', path: '/program-strategy' },
];

const navItems = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about', submenu: aboutSubmenu },
  { label: 'IMPACT', path: '/impact' },
  { label: 'PROGRAM', path: '/program' },
  { label: 'WHAT WE DO', path: '/what-we-do' },
  { label: 'AWARDS', path: '/awards' },
  { label: 'RESOURCES', path: '/resources' },
  { label: 'GET INVOLVED', path: '/get-involved' },
  { label: 'CONTACT', path: '/contact' },
  { label: 'AUDIT REPORT', path: '/audit-report' },
  { label: 'ANNUAL REPORT', path: '/annual-report' },
  { label: 'BLOG', path: '/blog' },
];

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="WATCH Logo" className="w-[150px] h-auto" />
            </Link>
          </div>
          <div className="flex gap-2 flex-wrap">
            <div className="bg-primary text-white px-5 py-3 text-center min-w-[160px] rounded">
              <div className="text-md font-bold uppercase tracking-wider">GET IN TOUCH</div>
              <div className="text-xs mt-0.5 text-gray-200">info@watchngo.org</div>
            </div>
            <div className="bg-primary text-white px-5 py-3 text-center min-w-[200px] rounded">
              <div className="text-md font-bold uppercase tracking-wider">OFFICE ADDRESS</div>
              <div className="text-xs mt-0.5 text-gray-200">Bangarupalayam, Andhrapradesh, India</div>
            </div>
            <div className="bg-primary text-white px-5 py-3 text-center min-w-[160px] rounded">
              <div className="text-md font-bold uppercase tracking-wider">OPENING HOURS</div>
              <div className="text-xs mt-0.5 text-gray-200">10AM TO 6PM</div>
            </div>
          </div>
        </div>
      </div>

      {/* Nav bar */}
      <nav className="bg-primary w-full">
        <div className="max-w-7xl mx-auto">
          {/* Hamburger for mobile */}
          <div className="flex items-center justify-between px-4 md:hidden py-3">
            <span className="text-white font-bold text-lg">WATCH</span>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                }
              </svg>
            </button>
          </div>

          {/* Desktop nav */}
          <ul className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row flex-wrap`}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path ||
                (item.submenu && item.submenu.some(s => s.path === location.pathname));
              return (
                <li key={item.path} className="relative group">
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-1 text-white text-sm font-semibold uppercase tracking-wide px-3 py-4 whitespace-nowrap hover:bg-secondary transition-colors duration-200 ${
                      isActive ? 'bg-secondary' : ''
                    }`}
                  >
                    {item.label}
                    {item.submenu && (
                      <svg className="w-3 h-3 fill-white opacity-80" viewBox="0 0 20 20">
                        <path d="M5 8l5 5 5-5H5z"/>
                      </svg>
                    )}
                  </Link>
                  {/* Dropdown */}
                  {item.submenu && (
                    <ul className="absolute left-0 top-full z-50 bg-white shadow-lg min-w-[200px] hidden group-hover:block">
                      {item.submenu.map((sub) => (
                        <li key={sub.path}>
                          <Link
                            to={sub.path}
                            onClick={() => setMenuOpen(false)}
                            className={`block px-4 py-3 text-xs font-semibold uppercase tracking-wide border-b border-gray-100 transition-colors hover:bg-teal hover:text-white ${
                              location.pathname === sub.path ? 'text-teal' : 'text-gray-600'
                            }`}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
