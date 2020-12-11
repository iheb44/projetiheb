import { Commentaire }
from './commentaire';
export class Materiel {
 public id:string;
 public libelle:string;
 public photo: string;
 public marque: string;
 public prix: number;
 public description: string;
 public hautGamme: boolean;
 public quantite: number;
 public commentaires: Commentaire[];
}
