import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-episodios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './episodios.html',
  styleUrl: './episodios.scss',
})
export class Episodios {
  readonly filtros = ['Todos', 'Temporada 1', 'Temporada 2', 'Temporada 3'];

  readonly episodios = [
    {
      id: 's01e01',
      titulo: 'Pilot',
      temporada: 'Temporada 1',
      duracion: '22 min',
      descripcion: 'Malcolm descubre el programa para superdotados y todo se desordena.',
      thumb: '/assets/malcolm.jpg',
      progreso: 12,
    },
    {
      id: 's01e05',
      titulo: 'Malcolm Babysits',
      temporada: 'Temporada 1',
      duracion: '22 min',
      descripcion: 'Caos total cuando Malcolm cuida a un niño hiperactivo.',
      thumb: '/assets/lois.jpg',
      progreso: 62,
    },
    {
      id: 's01e10',
      titulo: 'Stock Car Races',
      temporada: 'Temporada 1',
      duracion: '22 min',
      descripcion: 'La familia corre en el circuito mientras Malcolm intenta encajar.',
      thumb: '/assets/reese.jpg',
      progreso: 0,
    },
  ];
}
