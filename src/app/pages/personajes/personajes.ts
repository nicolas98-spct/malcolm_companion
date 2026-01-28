import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CHARACTERS } from '../../shared/bottom-nav/characters.data';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './personajes.html',
  styleUrl: './personajes.scss',
})
export class Personajes {
  readonly personajes = CHARACTERS;
}
