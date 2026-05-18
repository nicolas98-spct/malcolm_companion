import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const links = [
  ['/', 'Inicio'],
  ['/personajes', 'Personajes'],
  ['/episodios', 'Episodios'],
  ['/clips', 'Clips'],
  ['/perfil', 'Perfil'],
];

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="nav">
      <Link to="/" className="brand">Malcolm Companion</Link>
      <nav>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to}>{label}</NavLink>
        ))}
      </nav>
      {isAuthenticated ? (
        <button className="btn" onClick={logout}>Logout</button>
      ) : (
        <Link to="/login" className="btn">Login</Link>
      )}
    </header>
  );
}
