import ImageFallback from './ImageFallback';

export default function ClipCard({ clip }) {
  return (
    <article className="card episode-card episode-card--compact">
      <ImageFallback src={clip?.thumbnail} alt={clip?.titulo} label={clip?.titulo} className="image-thumbnail episode-thumb" variant="thumbnail" />
      <div className="episode-content">
        <h3>{clip?.titulo || 'Clip'}</h3>
        <p className="muted clamp-2">{clip?.descripcion || 'Sin descripción disponible.'}</p>
        <p className="meta-line">Temporada {clip?.temporada ?? '-'} · Episodio {clip?.episodio ?? '-'} · {clip?.duracion_segundos ?? 0}s</p>
        {clip?.url_clip ? <a className="btn small" href={clip.url_clip} target="_blank" rel="noreferrer">Ver clip</a> : <span className="muted">Clip no disponible</span>}
      </div>
    </article>
  );
}
