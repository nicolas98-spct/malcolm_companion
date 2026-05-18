import { useState } from 'react';
import { getEpisodes } from '../api/api';
import useApi from '../hooks/useApi';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import EmptyState from '../components/EmptyState';
import EpisodeCard from '../components/EpisodeCard';

export default function EpisodesPage() {
  const { data, loading, error } = useApi(getEpisodes, []);
  const [search, setSearch] = useState('');
  const [favOnly, setFavOnly] = useState(false);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  const filtered = (data || []).filter(
    (item) => item.titulo?.toLowerCase().includes(search.toLowerCase()) && (!favOnly || item.favorito),
  );

  if (!filtered.length) return <EmptyState message="No hay episodios para mostrar" />;

  return (
    <section>
      <h1>Episodios favoritos</h1>
      <div className="row">
        <input placeholder="Buscar por título" value={search} onChange={(e) => setSearch(e.target.value)} />
        <label>
          <input type="checkbox" checked={favOnly} onChange={(e) => setFavOnly(e.target.checked)} /> Solo favoritos
        </label>
      </div>
      <div className="grid">{filtered.map((episode) => <EpisodeCard key={episode.id} episode={episode} />)}</div>
    </section>
  );
}
