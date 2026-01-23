import { Routes } from '@angular/router';
import { Shell } from './layout/shell/shell';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login').then((m: any) => m.LoginComponent ?? m.Login ?? m.default),
  },

  {
    path: '',
    component: Shell,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },

      {
        path: 'inicio',
        loadComponent: () =>
          import('./pages/inicio/inicio').then((m: any) => m.InicioComponent ?? m.Inicio ?? m.default),
      },
      {
        path: 'episodios',
        loadComponent: () =>
          import('./pages/episodios/episodios').then((m: any) => m.EpisodiosComponent ?? m.Episodios ?? m.default),
      },
      {
        path: 'reproductor',
        loadComponent: () =>
          import('./pages/reproductor/reproductor').then((m: any) =>
            m.ReproductorComponent ?? m.Reproductor ?? m.default
          ),
      },
      {
        path: 'personajes',
        loadComponent: () =>
          import('./pages/personajes/personajes').then((m: any) => m.PersonajesComponent ?? m.Personajes ?? m.default),
      },
      {
        path: 'personajes/:id',
        loadComponent: () =>
          import('./pages/personaje-detalle/personaje-detalle').then((m: any) =>
            m.PersonajeDetalleComponent ?? m.PersonajeDetalle ?? m.PersonajeDetallePage ?? m.default
          ),
      },
      {
        path: 'perfil',
        loadComponent: () =>
          import('./pages/perfil/perfil').then((m: any) => m.PerfilComponent ?? m.Perfil ?? m.default),
      },
    ],
  },

  { path: '**', redirectTo: 'login' },
];
