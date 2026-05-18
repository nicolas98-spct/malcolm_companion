import { useMemo, useState } from 'react';
import { getCharacters } from '../api/api';
import useApi from '../hooks/useApi';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import EmptyState from '../components/EmptyState';
import CharacterCard from '../components/CharacterCard';

export default function CharactersPage() {
  const { data, loading, error } = useApi(getCharacters, []);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todos');

  const characters = useMemo(() => (Array.isArray(data) ? data : []), [data]);

  if (loading) return <Loader text="Cargando personajes..." />;
  if (error) return <ErrorMessage message={error} />;

  const filtered = characters.filter(
    (character) => (character?.nombre || '').toLowerCase().includes(search.toLowerCase()) &&
      (category === 'Todos' || character?.categoria === category),
  );

  if (!filtered.length) return <EmptyState message="No hay personajes para mostrar" />;

  return (
    <section className="mobile-screen">
      <header className="section-header-red"><h1>Personajes</h1></header>
      <div className="panel mobile-panel">
        <div className="row">
          <input className="pill-input" placeholder="Buscar personaje" value={search} onChange={(e) => setSearch(e.target.value)} />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>Todos</option>
            <option>Familia</option>
            <option>Escuela</option>
            <option>Profesores</option>
          </select>
        </div>
        <div className="grid">{filtered.map((character) => <CharacterCard key={character.id} character={character} />)}</div>
      </div>
    </section>
  );
}
