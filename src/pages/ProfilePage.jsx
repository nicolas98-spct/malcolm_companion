import { getUserProfile } from '../api/api';
import useApi from '../hooks/useApi';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import ImageFallback from '../components/ImageFallback';

export default function ProfilePage() {
  const { data, loading, error } = useApi(getUserProfile, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="panel detail-panel">
      <p className="section-kicker">Perfil Companion · Ruta protegida</p>
      <ImageFallback src={data.avatar} alt={data.nombre} label={data.nombre} className="avatar" />
      <h1>{data.nombre}</h1>
      <div className="grid two-col">
        <article className="panel compact">
          <h3>Progreso</h3>
          <p>{data.progreso?.porcentaje}% completado</p>
          <p className="muted">Capítulos vistos: {data.progreso?.vistos}/{data.progreso?.total}</p>
        </article>
        <article className="panel compact">
          <h3>Preferencias</h3>
          <p>Gestión spoilers: {data.gestion_spoilers}</p>
        </article>
      </div>
      <div className="detail-block">
        <h3>Episodios vistos</h3>
        <p>{(data.episodios_vistos || []).join(', ') || 'Sin datos'}</p>
      </div>
      <div className="detail-block">
        <h3>Favoritos</h3>
        <p>{(data.favoritos || []).join(', ') || 'Sin datos'}</p>
      </div>
      <div className="detail-block">
        <h3>Detrás de cámaras</h3>
        <p>{(data.detras_de_camaras || []).join(', ') || 'Sin datos'}</p>
      </div>
    </section>
  );
}
