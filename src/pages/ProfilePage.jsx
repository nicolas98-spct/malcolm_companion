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

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  const episodesViewed = Array.isArray(data?.episodios_vistos) ? data.episodios_vistos.map(formatEpisodeLike) : [];
  const favorites = Array.isArray(data?.favoritos) ? data.favoritos.map(formatEpisodeLike) : [];
  const behindScenes = Array.isArray(data?.detras_de_camaras) ? data.detras_de_camaras.map(formatBehindScenes) : [];

  return (
    <section className="panel detail-panel">
      <p className="section-kicker">Perfil Companion</p>
      <ImageFallback src={data.avatar} alt={data.nombre} label={data.nombre} className="avatar" />
      <h1>{data.nombre}</h1>
      <div className="grid two-col">
        <article className="panel compact">
          <h3>Progreso</h3>
          <p>{data.progreso?.porcentaje}% completado</p>
          <p className="muted">Capítulos vistos: {data.progreso?.vistos}/{data.progreso?.total}</p>
        </article>
        <article className="panel compact">
          <h3>Preferencias</h3>
          <p>Gestión spoilers: {data.gestion_spoilers}</p>
        </article>
      </div>

      <div className="detail-block">
        <h3>Episodios vistos</h3>
        {episodesViewed.length ? <ul>{episodesViewed.map((item, idx) => <li key={`${item}-${idx}`}>{item}</li>)}</ul> : <p className="muted">Sin datos</p>}
      </div>

      <div className="detail-block">
        <h3>Favoritos</h3>
        {favorites.length ? <ul>{favorites.map((item, idx) => <li key={`${item}-${idx}`}>{item}</li>)}</ul> : <p className="muted">Sin datos</p>}
      </div>

      <div className="detail-block">
        <h3>Detrás de cámaras</h3>
        {behindScenes.length ? <ul>{behindScenes.map((item, idx) => <li key={`${item}-${idx}`}>{item}</li>)}</ul> : <p className="muted">Sin datos</p>}
      </div>
    </section>
  );
}
