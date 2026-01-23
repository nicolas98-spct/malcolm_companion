import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.scss'],
})
export class Inicio {
  continuar = [
    { id: 's01e01', titulo: 'S01E01 – Pilot', meta: '22 min · Temporada 1', progreso: 12 },
    { id: 's01e05', titulo: 'S01E05 – Malcolm Babysits', meta: '22 min · Temporada 1', progreso: 38 },
  ];
}
