import { Link } from 'react-router-dom';
import ImageFallback from './ImageFallback';

export default function EpisodeCard({ episode }) {
  return (
    <article className="card">
      <ImageFallback src={episode?.imagen} alt={episode?.titulo} label={episode?.titulo} className="thumb" />
      <h3>{episode?.titulo || 'Episodio'}</h3>
      <p className="muted">{episode?.descripcion || 'Sin descripción disponible.'}</p>
      <p>{episode?.codigo ? `${episode.codigo} · ` : ''}Temporada {episode?.temporada ?? '-'} · Episodio {episode?.episodio ?? '-'}</p>
      <p>⭐ {episode?.calificacion ?? 'N/A'}</p>
      <Link className="btn" to={`/episodios/${episode?.id}`}>Ver episodio</Link>
    </article>
  );
}
