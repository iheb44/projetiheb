import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { DetailmaterielComponent } from './composants/accueil/informatique/detailmateriel/detailmateriel.component';
import { ListmaterielComponent } from './composants/accueil/informatique/listmateriel/listmateriel.component';
import { ContactComponent } from './composants/contact/contact.component';
import { Error404Component } from './composants/error404/error404.component';


const routes: Routes = [
  {path :'accueil'    , component:AccueilComponent},
  {path : 'informatique'     , component:ListmaterielComponent},
  {path : 'contact'   , component:ContactComponent},
  {path : 'informatique/:id' , component:DetailmaterielComponent},
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
