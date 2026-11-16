import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const closeMenu = () => setIsOpen(false);
  const handleLogout = () => {
    logout();
    closeMenu();
    navigate('/login', { replace: true });
  };
  const links = [['Home', '/home'], ['Gallery', '/gallery'], ['Contact', '/contact'], ['Blog', '/blog'], ['Support', '/support']];

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="site-brand" to="/home" onClick={closeMenu}>Animal <span>Spirit</span></Link>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>{isOpen ? '✕' : '☰'}</button>
        <div className={`nav-content ${isOpen ? 'nav-content-open' : ''}`}>
          <div className="nav-links">
            {links.map(([label, path]) => <NavLink key={path} to={path} onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{label}</NavLink>)}
          </div>
          <div className="nav-account">
            <span className="nav-user">Hi, {user?.name?.split(' ')[0]}</span>
            <button type="button" className="logout-button" onClick={handleLogout}>Log out</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
