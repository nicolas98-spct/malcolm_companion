import { Link } from 'react-router-dom';
import { getCharacters, getUserProfile } from '../api/api';
import { getBehindScenesImage, getCharacterImage, getEpisodeImage, getMemeImage, getProfileImage } from '../utils/localImages';
import useApi from '../hooks/useApi';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import ImageFallback from '../components/ImageFallback';

function normalizeEpisode(item) {
  if (item && typeof item === 'object') {
    return {
      codigo: item.codigo || item.code || 'Episodio',
      titulo: item.titulo || item.nombre || item.title || 'Contenido',
      temporada: item.temporada ?? item.season ?? 'Temporada',
      imagen: item.imagen || item.thumbnail || item.avatar || '',
    };
  }
  return { codigo: 'Episodio', titulo: String(item || 'Contenido'), temporada: 'Temporada', imagen: '' };
}

function normalizeBehindScenes(item) {
  if (item && typeof item === 'object') {
    return {
      titulo: item.titulo || item.nombre || item.title || 'Contenido',
      imagen: item.imagen || item.thumbnail || '',
    };
  }
  return { titulo: String(item || 'Contenido'), imagen: '' };
}

export default function ProfilePage() {
  const profileApi = useApi(getUserProfile, []);
  const charactersApi = useApi(getCharacters, []);

  if (profileApi.loading) return <Loader text="Cargando perfil..." />;
  if (profileApi.error) return <ErrorMessage message={profileApi.error} />;

  const profile = profileApi.data || {};

  const episodesViewed = Array.isArray(profile.episodios_vistos)
    ? profile.episodios_vistos.map(normalizeEpisode)
    : [];
  const favorites = Array.isArray(profile.favoritos) ? profile.favoritos.map(normalizeEpisode) : [];
  const behindScenes = Array.isArray(profile.detras_de_camaras)
    ? profile.detras_de_camaras.map(normalizeBehindScenes)
    : [];

  const characterSource = Array.isArray(charactersApi.data) ? charactersApi.data.slice(0, 3) : [];

  return (
    <section className="profile-mobile-shell">
      <header className="profile-mobile-header">
        <Link to="/" className="profile-back">← Perfil</Link>
        <div className="profile-user-row">
          <ImageFallback src={getProfileImage()} alt="Juan Armando" label="Juan Armando" className="profile-avatar-mobile" variant="avatar" />
          <div>
            <p>Bienvenido</p>
            <h1>Juan Armando</h1>
          </div>
        </div>
      </header>

      <article className="panel">
        <div className="spoiler-row">
          <span>Gestión de spoilers</span>
          <span className={`spoiler-switch ${profile.gestion_spoilers ? 'is-on' : ''}`} aria-hidden="true" />
        </div>

        <section>
          <h2 className="profile-section-title">Resumen de actividad</h2>
          <p className="muted">Episodios vistos</p>
          <div className="activity-grid">
            <article className="activity-card-large media-card">
              <ImageFallback
                src={getEpisodeImage(episodesViewed[0]?.titulo, episodesViewed[0]?.codigo) || episodesViewed[0]?.imagen}
                alt={episodesViewed[0]?.titulo || 'Episodio'}
                label={episodesViewed[0]?.titulo || 'Episodio'}
                className="image-thumbnail" variant="thumbnail"
              />
              <div className="media-card-title">
                <strong>{episodesViewed[0]?.codigo || 'Episodio'}</strong>
                <span>{episodesViewed[0]?.titulo || 'Contenido'}</span>
                <small>Temporada {episodesViewed[0]?.temporada || 'Temporada'}</small>
              </div>
            </article>
            <div className="activity-card-small">
              {episodesViewed.slice(1, 3).map((item, idx) => (
                <article key={`small-ep-${idx}`} className="media-card">
                  <div className="media-card-title">
                    <strong>{item.codigo}</strong>
                    <span>{item.titulo}</span>
                    <small>Temporada {item.temporada}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="profile-section-title">Favoritos</h2>
          <div className="horizontal-media-row">
            {favorites.length ? favorites.map((item, idx) => (
              <article key={`fav-${idx}`} className="media-card">
                <ImageFallback src={getEpisodeImage(item.titulo, item.codigo) || item.imagen} alt={item.titulo} label={item.titulo} className="image-thumbnail" variant="thumbnail" />
                <div className="media-card-title">
                  <strong>{item.codigo}</strong>
                  <span>{item.titulo}</span>
                  <small>Temporada {item.temporada}</small>
                </div>
              </article>
            )) : <article className="media-card"><div className="media-card-title"><span>Sin favoritos</span></div></article>}
          </div>
        </section>

        <section>
          <h2 className="profile-section-title">Detrás de cámaras</h2>
          <div className="horizontal-media-row">
            {behindScenes.length ? behindScenes.map((item, idx) => (
              <article key={`bts-${idx}`} className="media-card">
                <ImageFallback src={getEpisodeImage(item.titulo, item.codigo) || item.imagen} alt={item.titulo} label={item.titulo} className="image-thumbnail" variant="thumbnail" />
                <div className="media-card-title"><span>{item.titulo}</span></div>
              </article>
            )) : <article className="media-card"><div className="media-card-title"><span>Contenido</span></div></article>}
          </div>
        </section>

        <section>
          <h2 className="profile-section-title">Vista de los personajes</h2>
          <div className="character-mini-row">
            {characterSource.length ? characterSource.map((character) => (
              <article key={character.id} className="character-mini-card profile-character-card">
                <ImageFallback src={getCharacterImage(character.nombre) || character.imagen} alt={character.nombre} label={character.nombre} className="profile-avatar-mobile" variant="avatar" />
                <span>{character.nombre}</span>
              </article>
            )) : (
              ['Malcolm', 'Reese', 'Dewey'].map((name) => (
                <article key={name} className="character-mini-card profile-character-card">
                  <ImageFallback src="" alt={name} label={name} className="profile-avatar-mobile" variant="avatar" />
                  <span>{name}</span>
                </article>
              ))
            )}
          </div>
        </section>
        <section>
          <h2 className="profile-section-title">Contenido extra</h2>
          <div className="horizontal-media-row">
            {[0, 1, 2].map((idx) => (
              <article key={`meme-${idx}`} className="media-card">
                <ImageFallback src={getMemeImage(idx)} alt={`Meme ${idx + 1}`} label={`Meme ${idx + 1}`} className="image-thumbnail" variant="thumbnail" />
                <div className="media-card-title"><span>Meme Dewey {idx + 1}</span></div>
              </article>
            ))}
          </div>
        </section>

      </article>
    </section>
  );
}
