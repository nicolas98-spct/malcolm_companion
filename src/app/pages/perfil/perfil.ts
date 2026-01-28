import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss',
})
export class Perfil {
  readonly stats = [
    { label: 'Episodios vistos', value: '24' },
    { label: 'Horas', value: '9.8' },
    { label: 'Favoritos', value: '6' },
  ];

  readonly ajustes = [
    { label: 'Notificaciones', value: 'Activas' },
    { label: 'Calidad', value: 'HD' },
    { label: 'Idioma', value: 'Español' },
  ];
}
