import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LandingPage() {
  const { isAuthenticated } = useAuth();

  return (
    <section className="landing">
      <div className="hero hero-red">
        <p className="section-kicker">Companion App</p>
        <h1>Malcolm Companion</h1>
        <p>Tu espacio para seguir personajes, episodios favoritos y clips destacados de Malcolm in the Middle.</p>
        <div className="row">
          <Link className="btn" to="/personajes">Explorar personajes</Link>
          <Link className="btn secondary" to="/episodios">Ver episodios</Link>
          <Link className="btn ghost" to={isAuthenticated ? '/perfil' : '/login'}>{isAuthenticated ? 'Ir a perfil' : 'Iniciar sesión'}</Link>
        </div>
      </div>

      <div className="grid two-col">
        <article className="card quick"><h3>Personajes</h3><p>Familia, escuela y profesores en fichas rápidas.</p><Link to="/personajes" className="btn small">Abrir</Link></article>
        <article className="card quick"><h3>Episodios</h3><p>Filtra por título y favoritos para revisar la serie.</p><Link to="/episodios" className="btn small">Abrir</Link></article>
      </div>

      <div className="grid two-col">
        <article className="panel compact">
          <h3>Progreso Companion</h3>
          <div className="progress-track"><div className="progress-bar" style={{ width: '68%' }} /></div>
          <p className="muted">68% de progreso visual de temporada</p>
        </article>
        <article className="panel compact">
          <h3>Accesos rápidos</h3>
          <div className="row">
            <Link className="chip" to="/clips">Clips destacados</Link>
            <Link className="chip" to="/perfil">Perfil Companion</Link>
          </div>
        </article>
      </div>
    </section>
  );
}
