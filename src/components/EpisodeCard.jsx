import { Link } from 'react-router-dom';
import ImageFallback from './ImageFallback';
import { getEpisodeLocalImage } from '../utils/imageMap';

export default function EpisodeCard({ episode, compact = false }) {
  const localImage = getEpisodeLocalImage({ titulo: episode?.titulo, codigo: episode?.codigo });

  return (
    <article className={`card episode-card ${compact ? 'episode-card--compact' : ''}`}>
      <ImageFallback src={localImage || episode?.imagen} alt={episode?.titulo} label={episode?.titulo} className="episode-thumb" variant="episode" />
      <div className="episode-content">
        <h3>{episode?.titulo || 'Episodio'}</h3>
        <p className="muted clamp-2">{episode?.descripcion || 'Sin descripción disponible.'}</p>
        <p className="meta-line">{episode?.codigo ? `${episode.codigo} · ` : ''}Temporada {episode?.temporada ?? '-'} · Episodio {episode?.episodio ?? '-'}</p>
        <p className="rating">⭐ {episode?.calificacion ?? 'N/A'}</p>
        <Link className="btn small" to={`/episodios/${episode?.id}`}>Ver episodio</Link>
      </div>
    </article>
  );
}
