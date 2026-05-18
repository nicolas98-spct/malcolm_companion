import { useMemo, useState } from 'react';
import { getEpisodes } from '../api/api';
import useApi from '../hooks/useApi';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import EmptyState from '../components/EmptyState';
import EpisodeCard from '../components/EpisodeCard';

const fallbackEpisodes = [
  { id: 1, codigo: 'S01E01', titulo: 'Home Alone', descripcion: 'Malcolm se enfrenta al caos familiar cuando se queda a cargo de sus hermanos.', temporada: 1, episodio: 1, calificacion: 8.4, favorito: true },
  { id: 2, codigo: 'S01E02', titulo: 'Halloween', descripcion: 'Disfraces, travesuras y una noche inolvidable en la casa de los Wilkerson.', temporada: 1, episodio: 2, calificacion: 8.1, favorito: false },
  { id: 3, codigo: 'S01E03', titulo: 'Flechazos', descripcion: 'Malcolm intenta gestionar sus emociones mientras todo sale mal en la escuela.', temporada: 1, episodio: 3, calificacion: 8.0, favorito: true },
  { id: 4, codigo: 'S01E04', titulo: 'Zoo', descripcion: 'Un paseo termina en desastre con animales, hermanos y decisiones impulsivas.', temporada: 1, episodio: 4, calificacion: 7.9, favorito: false },
  { id: 5, codigo: 'S01E05', titulo: 'La Graduación', descripcion: 'La familia se une para un evento importante con resultados inesperados.', temporada: 1, episodio: 5, calificacion: 8.6, favorito: true },
];

export default function EpisodesPage() {
  const { data, loading, error } = useApi(getEpisodes, []);
  const [search, setSearch] = useState('');
  const [activeChip, setActiveChip] = useState('Temporada');

  const apiEpisodes = useMemo(() => (Array.isArray(data) ? data : []), [data]);
  const sourceEpisodes = apiEpisodes.length ? apiEpisodes : fallbackEpisodes;

  const filtered = useMemo(() => {
    let results = sourceEpisodes.filter((item) =>
      (item?.titulo || '').toLowerCase().includes(search.toLowerCase()),
    );

    if (activeChip === 'Más vistos') {
      results = results.filter((item) => Boolean(item?.favorito));
    }
    if (activeChip === 'Con mejor calificación') {
      results = [...results].sort((a, b) => Number(b?.calificacion || 0) - Number(a?.calificacion || 0));
    }
    return results;
  }, [activeChip, search, sourceEpisodes]);

  if (loading) return <Loader text="Cargando episodios..." />;
  if (error && !sourceEpisodes.length) return <ErrorMessage message={error} />;
  if (!filtered.length) return <EmptyState message="No hay episodios que coincidan con tu búsqueda" />;

  const favorites = filtered.filter((item) => item?.favorito);

  return (
    <section className="mobile-screen">
      <header className="section-header-red">
        <h1>Episodios</h1>
        <p>{apiEpisodes.length ? 'Desde Apidog' : 'Mostrando fallback de emergencia'}</p>
      </header>

      <div className="panel mobile-panel">
        <input className="pill-input" placeholder="Buscar episodio" value={search} onChange={(e) => setSearch(e.target.value)} />

        <div className="chip-row">
          {['Temporada', 'Más vistos', 'Con mejor calificación'].map((chip) => (
            <button key={chip} type="button" className={`chip-button ${activeChip === chip ? 'is-active' : ''}`} onClick={() => setActiveChip(chip)}>
              {chip}
            </button>
          ))}
        </div>

        <h2 className="subsection-title">Favoritos</h2>
        {favorites.length ? (
          <div className="list-stack">{favorites.map((episode) => <EpisodeCard key={`fav-${episode.id}`} episode={episode} compact />)}</div>
        ) : (
          <p className="muted">Aún no hay episodios favoritos en este filtro.</p>
        )}

        <h2 className="subsection-title">Todos los episodios</h2>
        <div className="list-stack">{filtered.map((episode) => <EpisodeCard key={episode.id} episode={episode} compact />)}</div>
      </div>
    </section>
  );
}
