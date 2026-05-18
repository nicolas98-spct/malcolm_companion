const BASE_URL = 'https://mock.apidog.com/m1/1262810-1260527-default';

async function fetchJson(path, options = {}) {
  const url = `${BASE_URL}${path}`;
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Error ${response.status}: no se pudo obtener ${path}`);
  }
  return response.json();
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
  return fetchJson('/episodios');
}

export async function getEpisodeById(id) {
  const detail = await fetchJson(`/episodios/${id}`);
  if (detail && normalizeId(detail.id) === normalizeId(id)) return detail;
  const list = await getEpisodes();
  return list.find((item) => normalizeId(item.id) === normalizeId(id)) ?? null;
}

export async function getClips() {
  return fetchJson('/clips');
}

export async function getUserProfile() {
  try {
    return await fetchJson('/usuario');
  } catch {
    return fetchJson('/usuario/');
  }
}
