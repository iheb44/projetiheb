import { Component, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';

@Component({
  selector: 'ihe-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  det :Materiel ={
    id: '2',
    libelle: 'PC',
    photo:'assets/Images/Informatique/pcFixe.jpg',
    marque: 'HP',
    prix: 1780.6,
    description: 'PC Portable très pratique',
    hautGamme: false,
    quantite: 5,
    commentaires:[
    {contenu:' satisfaisant', note:3, auteur:'Sami MRAD', date:new Date(2020,11,4)},
    {contenu:'Bon rapport qualité prix', note:4, auteur:'Samar Salah', date:new Date(2020,10,4)}]
    };
    showing:boolean = true;
  constructor() { }
  onshow()
  {
    this.showing = !this.showing; 
  }

  ngOnInit(): void {
  }

}
