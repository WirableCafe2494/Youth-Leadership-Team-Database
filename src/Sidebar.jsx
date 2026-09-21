import { useState, useEffect } from 'react';

const getInitialDarkTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  return savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
};

const menuItems = [
  { icon: 'home', label: 'Home' },
  { icon: 'calendar_today', label: 'Calendar' },
  { icon: 'photo_camera', label: 'Photo Gallery' },
  { icon: 'event', label: 'Upcoming Events' },
  { icon: 'view_agenda', label: 'Meeting Agenda' },
  { icon: 'assignment', label: 'Projects' },
  { icon: 'groups', label: 'Roles' },
  { icon: 'Psychiatry', label: 'New Members' },
  { icon: 'wallet', label: 'Fundraising Page' },
  { icon: 'school', label: 'Alumni' },
  { icon: 'link_2', label: 'Resources' },
  { icon: 'schema', label: 'Team Structure' },
  { icon: 'help', label: 'Help' },
];

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [darkTheme, setDarkTheme] = useState(getInitialDarkTheme);
  const [activeLabel, setActiveLabel] = useState('Home');

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

      <div className="container">
        <aside className={`sidebar${collapsed ? ' collapsed' : ''}`}>
          <header className="sidebar-header">
            <img src="public/favicon.png" alt="logo" className="header-logo" />
            <button className="sidebar-toggle" onClick={toggleSidebar}>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
          </header>

          <div className="sidebar-content">
            <ul className="menu-list">
              {menuItems.map(({ icon, label }) => (
                <li className="menu-item" key={label}>
                  {/* href intentionally omitted — wire up routing (e.g. React Router Link) when ready */}
                  <a
                    className={`menu-link${activeLabel === label ? ' active' : ''}`}
                    onClick={() => setActiveLabel(label)}
                  >
                    <span className="material-symbols-outlined">{icon}</span>
                    <span className="menu-label">{label}</span>
                  </a>
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
      </div>
    </>
  );
}

export default Sidebar;