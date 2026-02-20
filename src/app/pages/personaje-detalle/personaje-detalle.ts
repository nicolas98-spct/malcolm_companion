import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import type { Character, CharacterId } from '../../shared/bottom-nav/characters.data';
import { CharacterService } from '../../services/character.service';

type TabKey = 'perfil' | 'momentos' | 'relaciones';

@Component({
  selector: 'app-personaje-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './personaje-detalle.html',
  styleUrls: ['./personaje-detalle.scss'],
})
export class PersonajeDetalleComponent {
  private route = inject(ActivatedRoute);
  private characterService = inject(CharacterService);

  tab = signal<TabKey>('perfil');

  id = computed(() => Number(this.route.snapshot.paramMap.get('id') ?? 1) as CharacterId);

  personaje = computed<Character>(() => this.characterService.getCharacterById(this.id()));

  relaciones = computed(() => this.characterService.getRelationsForCharacter(this.id()));
}

