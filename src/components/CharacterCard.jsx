import { Link } from 'react-router-dom';
import ImageFallback from './ImageFallback';
export default function CharacterCard({ character }) {return <article className="card"><ImageFallback src={character.imagen} alt={character.nombre} label={character.nombre} className="thumb"/><h3>{character.nombre}</h3><p>{character.descripcion}</p><p>{character.categoria} · {character.rol}</p><Link className="btn" to={`/personajes/${character.id}`}>Ver ficha</Link></article>;}
