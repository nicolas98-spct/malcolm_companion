import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './personajes.html',
  styleUrl: './personajes.scss',
})
export class Personajes {
  private characterService = inject(CharacterService);

  readonly personajes = this.characterService.getAllCharacters();
}

