import { Component } from '@angular/core';
import { Character } from '../../models/character.interface';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent {
  characterId: number | null = null;
  character: Character | null = null;
  loading = false;
  error: string | null = null;

  constructor(private rickAndMortyService: RickAndMortyService) { }

  searchCharacter(): void {
    if (!this.characterId || this.characterId <= 0) {
      this.error = 'Veuillez entrer un ID valide (nombre positif)';
      return;
    }

    this.loading = true;
    this.error = null;
    this.character = null;

    this.rickAndMortyService.getCharacterById(this.characterId)
      .subscribe({
        next: (character) => {
          this.character = character;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Personnage non trouvé ou erreur de chargement';
          this.loading = false;
        }
      });
  }
}