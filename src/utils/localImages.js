const IMG = '/assets/images';

const normalize = (value = '') =>
  String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .trim();

const characterMap = {
  malcolm: `${IMG}/malcolm.jpg`,
  reese: `${IMG}/reese.jpg`,
  dewey: `${IMG}/dewey.jpg`,
  francis: `${IMG}/francis.jpg`,
  lois: `${IMG}/lois.jpg`,
  hal: `${IMG}/hal.jpg`,
  'stevie kenarban': `${IMG}/stevie.jpg`,
  stevie: `${IMG}/stevie.jpg`,
  'sr. herkabe': `${IMG}/herkabe.jpg`,
  herkabe: `${IMG}/herkabe.jpg`,
};

const episodeMap = {
  's01e01': `${IMG}/ep-home-alone.jpg`,
  's01e02': `${IMG}/ep-halloween.jpg`,
  's01e03': `${IMG}/ep-flechazos.jpg`,
  's01e04': `${IMG}/ep-zoo.jpg`,
  's01e05': `${IMG}/ep-graduacion.jpg`,
  'home alone': `${IMG}/ep-home-alone.jpg`,
  halloween: `${IMG}/ep-halloween.jpg`,
  flechazos: `${IMG}/ep-flechazos.jpg`,
  zoo: `${IMG}/ep-zoo.jpg`,
  'la graduacion': `${IMG}/ep-graduacion.jpg`,
};

const clipMap = {
  'malcolm resuelve un problema imposible': `${IMG}/clip-malcolm-math.jpg`,
  'reese cocina por primera vez': `${IMG}/clip-reese-cocina.jpg`,
  'hal y su coleccion de coches': `${IMG}/clip-hal-coches.jpg`,
  'el discurso de graduacion de malcolm': `${IMG}/ep-graduacion.jpg`,
};

const btsMap = {
  rodaje: `${IMG}/bts-rodaje.jpg`,
  entrevista: `${IMG}/bts-entrevista.jpg`,
  bloopers: `${IMG}/bts-bloopers.jpg`,
};

export const getCharacterImage = (nombre) => characterMap[normalize(nombre)] || '';
export const getEpisodeImage = (titulo, codigo) => episodeMap[normalize(codigo)] || episodeMap[normalize(titulo)] || '';
export const getClipImage = (titulo) => clipMap[normalize(titulo)] || '';
export const getProfileImage = () => `${IMG}/avatar-juan.jpg`;
export const getLoginBackground = () => `${IMG}/login-bg.jpg`;
export const getLogoImage = () => `${IMG}/logo-malcolm-verse.png`;
export const getBehindScenesImage = (titulo = '') => {
  const key = normalize(titulo);
  if (key.includes('rodaje')) return btsMap.rodaje;
  if (key.includes('entrevista')) return btsMap.entrevista;
  if (key.includes('blooper')) return btsMap.bloopers;
  return '';
};
export const getMemeImage = (index = 0) => `${IMG}/meme-dewey-${(index % 3) + 1}.jpg`;
