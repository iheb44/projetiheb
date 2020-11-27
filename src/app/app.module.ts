import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListmaterielComponent } from './informatique\\materiel/listmateriel/listmateriel.component';
import { MaterielComponent } from './informatique/materiel/materiel.component';
import { DetailmaterielComponent } from './informatique/detailmateriel/detailmateriel.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListmaterielComponent,
    MaterielComponent,
    DetailmaterielComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
