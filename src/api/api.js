const BASE_URL = 'https://mock.apidog.com/m1/1262810-1260527-default';

async function fetchJson(path, options = {}) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${BASE_URL}${normalizedPath}`;
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Error ${response.status}: no se pudo obtener ${normalizedPath}`);
  }
  return response.json();
}

async function fetchFirstAvailable(paths) {
  let lastError = null;
  for (const path of paths) {
    try {
      return await fetchJson(path);
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error('No se pudo obtener el recurso solicitado.');
}

const normalizeId = (value) => String(value);

export async function getCharacters() {
  return fetchJson('/personajes');
}

export async function getCharacterById(id) {
  const detail = await fetchJson(`/personajes/${id}`);
  if (detail && normalizeId(detail.id) === normalizeId(id)) return detail;
  const list = await getCharacters();
  return list.find((item) => normalizeId(item.id) === normalizeId(id)) ?? null;
}

export async function getEpisodes() {
  return fetchFirstAvailable(['/episodios', '/episodios/']);
}

export async function getEpisodeById(id) {
  try {
    const detail = await fetchFirstAvailable([`/episodios/${id}`, `/episodios/${id}/`]);
    if (detail && normalizeId(detail.id) === normalizeId(id)) return detail;
  } catch {
    // fallback a listado
  }

  const list = await getEpisodes();
  return list.find((item) => normalizeId(item.id) === normalizeId(id)) ?? null;
}

export async function getClips() {
  return fetchJson('/clips');
}

export async function getUserProfile() {
  return fetchFirstAvailable(['/usuario', '/usuario/']);
}
