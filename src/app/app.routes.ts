import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'characters', 
    loadComponent: () => import('./components/characters-list/characters-list.component').then(m => m.CharactersListComponent)
  },
  { 
    path: 'details', 
    loadComponent: () => import('./components/character-details/character-details.component').then(m => m.CharacterDetailsComponent)
  },
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: '**', redirectTo: '/characters' }
];