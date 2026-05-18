import { Link, useParams } from 'react-router-dom';
import { getCharacterById } from '../api/api';
import useApi from '../hooks/useApi';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import EmptyState from '../components/EmptyState';
import ImageFallback from '../components/ImageFallback';

function formatRelation(item) {
  if (typeof item === 'string') return item;
  if (!item || typeof item !== 'object') return 'Relación no disponible';
  const name = item.nombre || item.personaje || item.name || 'Personaje';
  const type = item.tipo || item.descripcion || item.relacion || 'Sin detalle';
  return `${name} · ${type}`;
}

function formatMoment(item) {
  if (typeof item === 'string') return item;
  if (!item || typeof item !== 'object') return 'Momento no disponible';
  const title = item.titulo || item.nombre || item.momento || 'Momento destacado';
  const season = item.temporada ?? item.season;
  const episode = item.episodio ?? item.episode;
  if (season && episode) return `${title} · Temporada ${season}, episodio ${episode}`;
  return title;
}

export default function CharacterDetailPage() {
  const { id } = useParams();
  const { data, loading, error } = useApi(() => getCharacterById(id), [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!data) return <EmptyState message="Personaje no encontrado" />;

  const relations = Array.isArray(data.relaciones) ? data.relaciones.map(formatRelation) : [];
  const moments = Array.isArray(data.momentos_destacados) ? data.momentos_destacados.map(formatMoment) : [];

  return (
    <section className="panel detail-panel">
      <p className="section-kicker">Ficha de personaje</p>
      <ImageFallback src={data.imagen} alt={data.nombre} label={data.nombre} className="hero-img" />
      <h1>{data.nombre}</h1>
      <p>{data.descripcion}</p>
      <p className="muted">
        {data.categoria} · {data.rol} {data.edad ? `· ${data.edad} años` : ''}
      </p>

      <div className="detail-block">
        <h3>Relaciones</h3>
        {relations.length ? <ul>{relations.map((item) => <li key={item}>{item}</li>)}</ul> : <p className="muted">No disponibles</p>}
      </div>

      <div className="detail-block">
        <h3>Momentos destacados</h3>
        {moments.length ? <ul>{moments.map((item) => <li key={item}>{item}</li>)}</ul> : <p className="muted">No disponibles</p>}
      </div>

      <Link to="/personajes" className="btn">Volver a personajes</Link>
    </section>
  );
}
