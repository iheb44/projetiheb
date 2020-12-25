import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'ihe-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  det:Materiel;
    iden:string="";
    showing:boolean = true;
    constructor(private router:Router,private activatedRoute:ActivatedRoute,private materielServices : MaterielService) { }
    onshow()
  {
    this.showing = !this.showing; 
  }
  onRetour()
  {
  this.router.navigate(['/informatique']);
  } 

  ngOnInit(): void {
    this.iden = this.activatedRoute.snapshot.params["id"];
    this.det = this.materielServices.getMaterielById(this.iden) ; 

  }

}
