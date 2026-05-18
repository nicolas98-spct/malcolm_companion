import { Link, useParams } from 'react-router-dom';
import { getEpisodeById } from '../api/api';
import useApi from '../hooks/useApi';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import EmptyState from '../components/EmptyState';
import ImageFallback from '../components/ImageFallback';

export default function EpisodeDetailPage() {
  const { id } = useParams();
  const { data, loading, error } = useApi(() => getEpisodeById(id), [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!data) return <EmptyState message="Episodio no encontrado" />;

  return (
    <section className="panel detail-panel">
      <p className="section-kicker">Detalle de episodio</p>
      <ImageFallback src={data.imagen} alt={data.titulo} label={data.titulo} className="hero-img" />
      <h1>{data.codigo ? `${data.codigo} · ` : ''}{data.titulo}</h1>
      <p>{data.descripcion}</p>
      <p className="muted">
        Temporada {data.temporada} · Episodio {data.episodio} · ⭐ {data.calificacion}
        {data.duracion_minutos ? ` · ${data.duracion_minutos} min` : ''}
      </p>
      <p>
        Capítulos de temporada:{' '}
        {Array.isArray(data.capitulos_temporada) ? data.capitulos_temporada.join(', ') : 'No disponibles'}
      </p>
      <Link to="/episodios" className="btn">Volver a episodios</Link>
    </section>
  );
}
