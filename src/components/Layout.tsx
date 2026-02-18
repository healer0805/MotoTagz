import { Outlet, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/features', label: 'Features' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/blog', label: 'Blog' },
];

export default function Layout() {
  return (
    <>
      <header className="site-header">
        <nav className="nav">
          <NavLink to="/" className="nav-brand">
            MotoTagz
          </NavLink>
          <ul className="nav-list">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer className="site-footer">
        <p>&copy; MotoTagz — Ride confident. Help arrives when you need it most.</p>
      </footer>
    </>
  );
}
