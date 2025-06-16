import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent ,
    CharactersListComponent,
    CharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,  
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }