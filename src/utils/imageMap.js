const characterImageMap = {
  malcolm: '',
  reese: '',
  dewey: '',
  francis: '',
  lois: '',
  hal: '',
  'stevie kenarban': '',
  'sr. herkabe': '',
  'herkabe': '',
};

const episodeImageMap = {};

const normalize = (value = '') =>
  String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .trim();

export function getCharacterLocalImage(name) {
  const key = normalize(name);
  return characterImageMap[key] || '';
}

export function getEpisodeLocalImage({ titulo, codigo } = {}) {
  const titleKey = normalize(titulo);
  const codeKey = normalize(codigo);
  return episodeImageMap[codeKey] || episodeImageMap[titleKey] || '';
}
