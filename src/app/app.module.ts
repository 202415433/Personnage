import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

@NgModule({
  declarations: [
    AppComponent ,
    CharactersListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // Pour les appels HTTP
    FormsModule,      // Pour les formulaires (nécessaire pour le composant details plus tard)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }