import { Link } from 'react-router-dom';
import ImageFallback from './ImageFallback';
import { getEpisodeImage } from '../utils/localImages';

export default function EpisodeCard({ episode, compact = false }) {
  const imageSrc = getEpisodeImage(episode?.titulo, episode?.codigo) || episode?.imagen;

  return (
    <article className={`card episode-card ${compact ? 'episode-card--compact' : ''}`}>
      <ImageFallback src={imageSrc} alt={episode?.titulo} label={episode?.titulo} className="episode-thumb" variant="episode" />
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
