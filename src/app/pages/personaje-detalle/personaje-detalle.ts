import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { CHARACTERS, type Character, type CharacterId } from '../../shared/bottom-nav/characters.data';

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

  tab = signal<TabKey>('perfil');

  id = computed(() => Number(this.route.snapshot.paramMap.get('id') ?? 1) as CharacterId);

  personaje = computed<Character>(() => {
    return CHARACTERS.find((c: Character) => c.id === this.id()) ?? CHARACTERS[0];
  });

  relaciones = computed(() => {
    const p = this.personaje();
    return p.relations.map((r) => ({
      ...r,
      character: CHARACTERS.find((c: Character) => c.id === r.id),
    }));
  });
}

