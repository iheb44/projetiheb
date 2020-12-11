import { Component, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'ihe-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  det:Materiel;
    showing:boolean = true;
    constructor(private materielServices : MaterielService) { }
    onshow()
  {
    this.showing = !this.showing; 
  }

  ngOnInit(): void {
    this.det = this.materielServices.getMaterielById("2") ; 

  }

}
