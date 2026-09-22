import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/logo.svg';

const getInitialDarkTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  return savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
};

const menuItems = [
  { icon: 'home', label: 'Home', path: '/' },
  { icon: 'calendar_today', label: 'Calendar', path: '/calendar' },
  { icon: 'photo_camera', label: 'Photo Gallery', path: '/photo-gallery' },
  { icon: 'event', label: 'Upcoming Events', path: '/upcoming-events' },
  { icon: 'view_agenda', label: 'Meeting Agenda', path: '/meeting-agenda' },
  { icon: 'assignment', label: 'Projects', path: '/projects' },
  { icon: 'groups', label: 'Roles', path: '/roles' },
  { icon: 'psychiatry', label: 'New Members', path: '/new-members' },
  { icon: 'wallet', label: 'Fundraising Page', path: '/fundraising' },
  { icon: 'school', label: 'Alumni', path: '/alumni' },
  { icon: 'link_2', label: 'Resources', path: '/resources' },
  { icon: 'schema', label: 'Team Structure', path: '/team-structure' },
  { icon: 'help', label: 'Help', path: '/help' },
];

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [darkTheme, setDarkTheme] = useState(getInitialDarkTheme);
  const location = useLocation();

  // Keep <body> class and localStorage in sync whenever darkTheme changes
  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkTheme);
    localStorage.setItem('theme', darkTheme ? 'dark' : 'light');
  }, [darkTheme]);

  // Same icon logic as the original updateThemeIcon(), just derived instead
  // of imperatively set
  const themeIconText = collapsed
    ? darkTheme
      ? 'light_mode'
      : 'dark_mode'
    : 'dark_mode';

  const toggleSidebar = () => setCollapsed((prev) => !prev);
  const toggleTheme = () => setDarkTheme((prev) => !prev);

  return (
    <>
      {/* Site Navbar (mobile) */}
      <nav className="site-nav">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>

      <aside className={`sidebar${collapsed ? ' collapsed' : ''}`}>
        <header className="sidebar-header">
          <img src={logo} alt="logo" className="header-logo" />
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
        </header>

        <div className="sidebar-content">
          <ul className="menu-list">
            {menuItems.map(({ icon, label, path }) => (
              <li className="menu-item" key={label}>
                <Link
                  to={path}
                  className={`menu-link${
                    location.pathname === path ? ' active' : ''
                  }`}
                >
                  <span className="material-symbols-outlined">{icon}</span>
                  <span className="menu-label">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-footer">
          <button className="theme-toggle" onClick={toggleTheme}>
            <div className="theme-label">
              <span className="material-symbols-outlined theme-icon">
                {themeIconText}
              </span>
              <span className="theme-text">Dark Mode</span>
            </div>
            <div className="theme-toggle-track">
              <div className="theme-toggle-indicator"></div>
            </div>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;