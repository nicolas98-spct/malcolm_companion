import ImageFallback from './ImageFallback';

export default function ClipCard({ clip }) {
  return (
    <article className="card">
      <ImageFallback src={clip?.thumbnail} alt={clip?.titulo} label={clip?.titulo} className="thumb" />
      <h3>{clip?.titulo || 'Clip'}</h3>
      <p className="muted">{clip?.descripcion || 'Sin descripción disponible.'}</p>
      <p>Temporada {clip?.temporada ?? '-'} · Episodio {clip?.episodio ?? '-'} · {clip?.duracion_segundos ?? 0}s</p>
      {clip?.url_clip ? <a className="btn" href={clip.url_clip} target="_blank" rel="noreferrer">Ver clip</a> : <span className="muted">Clip no disponible</span>}
    </article>
  );
}
