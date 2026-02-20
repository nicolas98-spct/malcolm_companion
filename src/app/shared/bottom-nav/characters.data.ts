// src/app/shared/bottom-nav/characters.data.ts
export type CharacterId = 1 | 2 | 3 | 4 | 5 | 6;

export type TabKey = 'perfil' | 'momentos' | 'relaciones';

export interface Moment {
  id: string;
  title: string;
  thumb: string; // IMPORTANT: start with "/assets/..."
}

export interface Relation {
  id: CharacterId;
  note: string;
}

export interface Character {
  id: CharacterId;
  name: string;
  tagline: string;
  meta1: string;
  meta2: string;
  profileTitle: string;
  profileText: string;
  image: string; // IMPORTANT: start with "/assets/..."
  moments: Moment[];
  relations: Relation[];
}

export const CHARACTERS: Character[] = [
  {
    id: 1,
    name: 'Malcolm',
    tagline: 'Un genio atrapado en una familia caótica.',
    meta1: 'Familia caótica.',
    meta2: 'Hijo del medio. Estudiante superdotado',
    profileTitle: 'Perfil',
    profileText:
      'Malcolm es el hijo del medio y el protagonista de la serie. Tiene un coeficiente intelectual altísimo y, gracias a eso, asiste a un programa para alumnos superdotados, aunque muchas veces preferiría ser “normal”.\n\nEs analítico, sarcástico y cuestiona todo, vive frustrado entre las expectativas académicas y su vida familiar. A pesar de sus quejas, suele terminar ayudando a los demás y tratando de salir de los problemas como pueda.',
    image: '/assets/malcolm.jpg',
    moments: [
      { id: 'm1', title: 'Momento', thumb: '/assets/malcolm.jpg' },
      { id: 'm2', title: 'Momento', thumb: '/assets/malcolm.jpg' },
      { id: 'm3', title: 'Momento', thumb: '/assets/malcolm.jpg' },
    ],
    relations: [
      { id: 2, note: 'Hermano mayor rebelde.' },
      { id: 3, note: 'Hermano violento y caótico.' },
      { id: 4, note: 'Hermano menor creativo.' },
    ],
  },

  {
    id: 2,
    name: 'Francis',
    tagline: 'El hermano mayor: rebelde e independiente.',
    meta1: 'Rebelde.',
    meta2: 'Mayor. Aventurero',
    profileTitle: 'Perfil',
    profileText:
      'Francis es el hijo mayor. Vive escapando de las reglas de Lois y busca su propio camino. Aunque parezca irresponsable, tiene un gran corazón y aprende a golpe de experiencias.',
    image: '/assets/francis.jpg',
    moments: [
      { id: 'm1', title: 'Momento', thumb: '/assets/francis.jpg' },
      { id: 'm2', title: 'Momento', thumb: '/assets/francis.jpg' },
      { id: 'm3', title: 'Momento', thumb: '/assets/francis.jpg' },
    ],
    relations: [
      { id: 1, note: 'Hermano menor brillante.' },
      { id: 5, note: 'Mamá estricta.' },
    ],
  },

  {
    id: 3,
    name: 'Reese',
    tagline: 'Impulsivo, fuerte… y sorprendentemente capaz.',
    meta1: 'Caos.',
    meta2: 'Hijo del medio',
    profileTitle: 'Perfil',
    profileText:
      'Reese es el hermano que resuelve todo con fuerza y cero filtro. Aunque parece simple, tiene talentos ocultos (por ejemplo, cocina) y momentos de inesperada lucidez.',
    image: '/assets/reese.jpg',
    moments: [
      { id: 'm1', title: 'Momento', thumb: '/assets/reese.jpg' },
      { id: 'm2', title: 'Momento', thumb: '/assets/reese.jpg' },
      { id: 'm3', title: 'Momento', thumb: '/assets/reese.jpg' },
    ],
    relations: [
      { id: 1, note: 'Rivalidad constante.' },
      { id: 4, note: 'A veces lo protege.' },
    ],
  },

  {
    id: 4,
    name: 'Dewey',
    tagline: 'El menor: creativo, sensible y súper inteligente.',
    meta1: 'Creativo.',
    meta2: 'Hermano menor',
    profileTitle: 'Perfil',
    profileText:
      'Dewey parece “el pequeño”, pero entiende más de lo que todos creen. Es artístico, observador y suele tener la última palabra sin levantar la voz.',
    image: '/assets/dewey.jpg',
    moments: [
      { id: 'm1', title: 'Momento', thumb: '/assets/dewey.jpg' },
      { id: 'm2', title: 'Momento', thumb: '/assets/dewey.jpg' },
      { id: 'm3', title: 'Momento', thumb: '/assets/dewey.jpg' },
    ],
    relations: [
      { id: 1, note: 'Conexión silenciosa.' },
      { id: 3, note: 'Lo molesta… pero lo quiere.' },
    ],
  },

  {
    id: 5,
    name: 'Lois',
    tagline: 'La mamá: estricta, intensa y con razón.',
    meta1: 'Disciplina.',
    meta2: 'Mamá',
    profileTitle: 'Perfil',
    profileText:
      'Lois es la fuerza de la casa. Controla el caos como puede. Puede parecer dura, pero su amor se nota en cómo sostiene a su familia cuando todo explota.',
    image: '/assets/lois.jpg',
    moments: [
      { id: 'm1', title: 'Momento', thumb: '/assets/lois.jpg' },
      { id: 'm2', title: 'Momento', thumb: '/assets/lois.jpg' },
      { id: 'm3', title: 'Momento', thumb: '/assets/lois.jpg' },
    ],
    relations: [
      { id: 6, note: 'Su pareja.' },
      { id: 1, note: 'Lo exige al máximo.' },
    ],
  },

  {
    id: 6,
    name: 'Hal',
    tagline: 'El papá: divertido, nervioso y entrañable.',
    meta1: 'Corazón.',
    meta2: 'Papá',
    profileTitle: 'Perfil',
    profileText:
      'Hal es el adulto niño del hogar. Ama a su familia con intensidad, a veces exagera todo, pero siempre está ahí cuando lo necesitan.',
    image: '/assets/hal.jpg',
    moments: [
      { id: 'm1', title: 'Momento', thumb: '/assets/hal.jpg' },
      { id: 'm2', title: 'Momento', thumb: '/assets/hal.jpg' },
      { id: 'm3', title: 'Momento', thumb: '/assets/hal.jpg' },
    ],
    relations: [
      { id: 5, note: 'Su pareja.' },
      { id: 4, note: 'Lo inspira.' },
    ],
  },
];
