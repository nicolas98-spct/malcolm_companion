import { Link } from 'react-router-dom';
import ImageFallback from './ImageFallback';
export default function EpisodeCard({ episode }) {return <article className="card"><ImageFallback src={episode.imagen} alt={episode.titulo} label={episode.titulo} className="thumb"/><h3>{episode.codigo} - {episode.titulo}</h3><p>{episode.descripcion}</p><p>T{episode.temporada} E{episode.episodio} · ⭐ {episode.calificacion}</p><p>{episode.favorito ? 'Favorito' : 'No favorito'}</p><Link className="btn" to={`/episodios/${episode.id}`}>Ver episodio</Link></article>;}
