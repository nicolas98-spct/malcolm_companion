import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reproductor.html',
  styleUrl: './reproductor.scss',
})
export class Reproductor {
  readonly episodio = {
    titulo: 'S01E05 · Malcolm Babysits',
    descripcion: 'Malcolm intenta cuidar a un niño y todo termina en caos familiar.',
    duracion: '22:14',
    progreso: 35,
    poster: '/assets/hal.jpg',
  };

  readonly sugeridos = [
    { id: 's01e06', titulo: 'Sleepover', duracion: '22:14', thumb: '/assets/dewey.jpg' },
    { id: 's01e07', titulo: 'Francis Escapes', duracion: '22:14', thumb: '/assets/francis.jpg' },
  ];
}
