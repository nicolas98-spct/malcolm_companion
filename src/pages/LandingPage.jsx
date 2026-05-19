import { Link } from 'react-router-dom';
import { getClipImage, getEpisodeImage, getLogoImage, getProfileImage } from '../utils/localImages';

export default function LandingPage() {
  return (
    <section className="mobile-screen">
      <header className="section-header-red">
        <img src={getLogoImage()} alt="Malcolm Verse" className="landing-logo" />
        <div className="profile-user-row">
          <img src={getProfileImage()} alt="Juan Armando" className="profile-avatar-mobile" />
          <div><p>Bienvenido</p><h2>Juan Armando</h2></div>
        </div>
      </header>
      <div className="panel mobile-panel">
        <input className="pill-input" placeholder="Buscar capítulo, personaje o clip" />
        <h3>Continuar viendo</h3>
        <img src={getEpisodeImage('La Graduación', 'S01E05')} alt="Continuar viendo" className="image-thumbnail" />
        <h3>Accesos</h3>
        <div className="grid">
          <Link className="card" to="/personajes"><img src="/assets/images/malcolm.jpg" alt="Personajes" className="card-image" /><p>Personajes</p></Link>
          <Link className="card" to="/episodios"><img src="/assets/images/reese.jpg" alt="Episodios" className="card-image" /><p>Episodios</p></Link>
        </div>
        <h3>Clips destacados</h3>
        <div className="horizontal-media-row">
          <img src={getClipImage('Malcolm resuelve un problema imposible')} className="image-thumbnail" />
          <img src={getClipImage('Reese cocina por primera vez')} className="image-thumbnail" />
        </div>
        <h3>Progreso</h3>
        <div className="progress-track"><div className="progress-bar" style={{ width: '30%' }} /></div>
      </div>
    </section>
  );
}
