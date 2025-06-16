import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character, CharacterResponse } from '../models/character.interface';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private baseUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  // Récupère la première page de personnages
  getAllCharacters(): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>(this.baseUrl);
  }

  // Récupère un personnage par son ID
  getCharacterById(id: number): Observable<Character> {
    if (id <= 0) {
      throw new Error('L\'ID doit être un nombre positif');
    }
    return this.http.get<Character>(`${this.baseUrl}/${id}`);
  }
}