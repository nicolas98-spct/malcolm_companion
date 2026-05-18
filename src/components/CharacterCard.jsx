import { Link } from 'react-router-dom';
import ImageFallback from './ImageFallback';
import { getCharacterLocalImage } from '../utils/imageMap';

export default function CharacterCard({ character }) {
  const localImage = getCharacterLocalImage(character?.nombre);
  return (
    <article className="card">
      <ImageFallback src={localImage || character?.imagen} alt={character?.nombre} label={character?.nombre} className="card-image" variant="card" />
      <h3>{character?.nombre}</h3>
      <p>{character?.descripcion}</p>
      <p>{character?.categoria} · {character?.rol}</p>
      <Link className="btn" to={`/personajes/${character?.id}`}>Ver ficha</Link>
    </article>
  );
}
