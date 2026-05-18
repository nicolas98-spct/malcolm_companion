import { Link } from 'react-router-dom';
import ImageFallback from './ImageFallback';

export default function EpisodeCard({ episode, compact = false }) {
  return (
    <article className={`card episode-card ${compact ? 'episode-card--compact' : ''}`}>
      <ImageFallback src={episode?.imagen} alt={episode?.titulo} label={episode?.titulo} className="thumb episode-thumb" />
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
