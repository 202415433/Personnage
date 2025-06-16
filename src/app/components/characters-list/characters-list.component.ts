import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../models/character.interface';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CharactersListComponent implements OnInit {
  characters: Character[] = [];
  loading = false;
  error: string | null = null;

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.loading = true;
    this.error = null;
    
    this.rickAndMortyService.getAllCharacters()
      .subscribe({
        next: (response) => {
          this.characters = response.results;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Erreur lors du chargement des personnages';
          this.loading = false;
        }
      });
  }
}