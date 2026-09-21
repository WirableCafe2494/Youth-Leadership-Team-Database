import { useEffect } from 'react';

function NotFound() {
  // Apply saved theme (or system preference) on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const shouldUseDarkTheme =
      savedTheme === 'dark' || (!savedTheme && systemPrefersDark);

    document.body.classList.toggle('dark-theme', shouldUseDarkTheme);
  }, []);

  return (
    <div className="error404">
      <h1>404 Page not found</h1>
      <p>
        The page you are looking for doesn't exist. Click{' '}
        <a href="/">here</a> to return to the home page. If you got to this
        page by clicking a link, please notify us so we can fix the error.
      </p>
    </div>
  );
}

export default NotFound;
