import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ListmaterielComponent } from './composants/accueil/informatique/listmateriel/listmateriel.component';
import { MaterielComponent } from './composants/accueil/informatique/materiel/materiel.component';
import { DetailmaterielComponent } from './composants/accueil/informatique/detailmateriel/detailmateriel.component';
import { CommentComponent } from './composants/accueil/commentaires/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListmaterielComponent,
    MaterielComponent,
    DetailmaterielComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
