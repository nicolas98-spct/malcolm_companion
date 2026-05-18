import { getClips } from '../api/api';
import useApi from '../hooks/useApi';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import EmptyState from '../components/EmptyState';
import ClipCard from '../components/ClipCard';

export default function ClipsPage() {
  const { data, loading, error } = useApi(getClips, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!data?.length) return <EmptyState message="No hay clips destacados" />;

  return (
    <section>
      <h1>Clips destacados</h1>
      <div className="grid">{data.map((clip) => <ClipCard key={clip.id} clip={clip} />)}</div>
    </section>
  );
}
