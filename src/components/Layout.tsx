import { Outlet, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/about', label: 'About Us' },
  { to: '/features', label: 'Features' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/blog', label: 'Blog' },
];

export default function Layout() {
  return (
    <>
      <header className="bg-white border-b border-black/10">
        <nav className="flex justify-between items-center max-w-7xl mx-auto gap-6 h-28 px-8">
          <NavLink
            to="/"
            className="flex flex-col items-start no-underline text-inherit"
          >
            <img
              src="logo.jfif"
              alt="MotoTagz"
              className="block h-24 w-auto object-contain"
            />
          </NavLink>
          <div className='flex items-center gap-6 '>
            <ul className="flex list-none m-0 p-0 gap-7 flex-wrap text-[16.5px]">
              {navItems.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `no-underline text-[var(--dark-text-color)] hover:text-[var(--primary-color)] transition-colors font-medium ${isActive ? '!text-[var(--primary-color)]' : ''
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <a
              href="#download"
              className="bg-[var(--primary-color)] text-[var(--primary-button-text-color)] px-6 py-3 rounded-lg hover:bg-[var(--primary-button-hover-bg-color)] transition-all font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Download MotoTagz App
            </a>
          </div>
        </nav>
      </header>
      <Outlet />
      <footer className="border-t border-black/10 py-6 text-center mt-auto bg-white">
        <p className="m-0 opacity-80 text-sm">
          &copy; MotoTagz — Ride confident. Help arrives when you need it most.
        </p>
      </footer>
    </>
  );
}
