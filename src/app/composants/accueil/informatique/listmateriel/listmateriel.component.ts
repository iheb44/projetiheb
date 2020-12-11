import { Component, OnInit } from '@angular/core';
import { MaterielService } from 'src/app/services/materiel.service';
import { Materiel } from '../../../../models/materiel';

@Component({
  selector: 'ihe-listmateriel',
  templateUrl: './listmateriel.component.html',
  styleUrls: ['./listmateriel.component.css']
})
export class ListmaterielComponent implements OnInit {
  lesMateriel:Materiel[];
  constructor(private materielServices : MaterielService) { }

  ngOnInit(): void {
    this.lesMateriel =  this.materielServices.getMateriels() ; 

  }

}
