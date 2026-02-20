import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-laboratorio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './laboratorio.html',
  styleUrl: './laboratorio.scss',
})
export class Laboratorio {
  private characterService = inject(CharacterService);

  readonly stats = this.characterService.getCharacterStats();
  readonly characters = this.characterService.getAllCharacters();
}
