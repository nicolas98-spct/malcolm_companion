import { Link } from 'react-router-dom';
import { getUserProfile } from '../api/api';
import useApi from '../hooks/useApi';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import ImageFallback from '../components/ImageFallback';

function formatEpisodeLike(item) {
  if (typeof item === 'string') return item;
  if (!item || typeof item !== 'object') return 'Dato no disponible';
  const code = item.codigo || item.code || 'Sin código';
  const title = item.titulo || item.nombre || item.title || 'Sin título';
  const season = item.temporada ?? item.season;
  return `${code} · ${title}${season ? ` · Temporada ${season}` : ''}`;
}

function formatBehindScenes(item) {
  if (typeof item === 'string') return item;
  if (!item || typeof item !== 'object') return 'Sin título';
  return item.titulo || item.nombre || item.title || 'Sin título';
}

export default function ProfilePage() {
  const { data, loading, error } = useApi(getUserProfile, []);

  if (loading) return <Loader text="Cargando perfil..." />;
  if (error) return <ErrorMessage message={error} />;

  const episodesViewed = Array.isArray(data?.episodios_vistos) ? data.episodios_vistos.map(formatEpisodeLike) : [];
  const favorites = Array.isArray(data?.favoritos) ? data.favoritos.map(formatEpisodeLike) : [];
  const behindScenes = Array.isArray(data?.detras_de_camaras) ? data.detras_de_camaras.map(formatBehindScenes) : [];

  return (
    <section className="mobile-screen">
      <header className="section-header-red">
        <div className="row">
          <Link to="/" className="back-link">← Volver</Link>
          <h1>Perfil</h1>
        </div>
      </header>

      <article className="panel mobile-panel profile-shell">
        <div className="profile-top">
          <ImageFallback src={data?.avatar} alt={data?.nombre} label="Juan Armando" className="avatar" />
          <div>
            <p className="section-kicker">Perfil Companion</p>
            <h2>Juan Armando</h2>
          </div>
        </div>

        <div className="spoiler-toggle">
          <span>Gestión de spoilers</span>
          <span className={`toggle-badge ${data?.gestion_spoilers ? 'on' : 'off'}`}>{data?.gestion_spoilers ? 'Activado' : 'Desactivado'}</span>
        </div>

        <section className="panel compact">
          <h3>Resumen de actividad</h3>
          <p><strong>Progreso:</strong> {data?.progreso?.porcentaje ?? 0}%</p>
          <p className="muted">Capítulos vistos: {data?.progreso?.vistos ?? 0}/{data?.progreso?.total ?? 0}</p>
        </section>

        <section className="detail-block">
          <h3>Episodios vistos</h3>
          {episodesViewed.length ? <ul>{episodesViewed.map((item, idx) => <li key={`${item}-${idx}`}>{item}</li>)}</ul> : <p className="muted">Sin datos</p>}
        </section>

        <section className="detail-block">
          <h3>Favoritos</h3>
          {favorites.length ? <ul>{favorites.map((item, idx) => <li key={`${item}-${idx}`}>{item}</li>)}</ul> : <p className="muted">Sin datos</p>}
        </section>

        <section className="detail-block">
          <h3>Detrás de cámaras</h3>
          {behindScenes.length ? <ul>{behindScenes.map((item, idx) => <li key={`${item}-${idx}`}>{item}</li>)}</ul> : <p className="muted">Sin datos</p>}
        </section>

        <section className="detail-block">
          <h3>Vista de los personajes</h3>
          <div className="mini-cards">
            {(data?.favoritos || []).slice(0, 3).map((item, idx) => (
              <article key={`mini-${idx}`} className="mini-card">{formatEpisodeLike(item)}</article>
            ))}
          </div>
        </section>
      </article>
    </section>
  );
}
