import { Component, Input, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/models/commentaire';

@Component({
  selector: 'ihe-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() com: Commentaire = new Commentaire();  
  @Input() index:number;
  constructor() { }

  ngOnInit(): void {
  }

}
