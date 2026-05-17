import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  return <header className="nav"><Link to="/" className="brand">Malcolm Companion</Link><nav>{['/','/personajes','/episodios','/clips','/perfil'].map((r,i)=><NavLink key={r} to={r}>{['Inicio','Personajes','Episodios','Clips','Perfil'][i]}</NavLink>)}</nav>{isAuthenticated?<button onClick={logout}>Logout</button>:<Link to="/login" className="btn">Login</Link>}</header>;
}
