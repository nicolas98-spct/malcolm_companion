import { Injectable } from '@angular/core';
import { CHARACTERS, type Character, type CharacterId, type Relation } from '../shared/bottom-nav/characters.data';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  getAllCharacters(): Character[] {
    return CHARACTERS;
  }

  getCharacterById(id: CharacterId): Character {
    return CHARACTERS.find((character) => character.id === id) ?? CHARACTERS[0];
  }

  getRelationsForCharacter(id: CharacterId): Array<Relation & { character?: Character }> {
    const selected = this.getCharacterById(id);

    return selected.relations.map((relation) => ({
      ...relation,
      character: CHARACTERS.find((character) => character.id === relation.id),
    }));
  }

  getCharacterStats() {
    const total = CHARACTERS.length;
    const withMostRelations = [...CHARACTERS].sort((a, b) => b.relations.length - a.relations.length)[0];

    return {
      total,
      withMostRelations,
    };
  }
}
