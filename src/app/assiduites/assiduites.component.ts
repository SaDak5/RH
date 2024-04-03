import { Component,OnInit } from '@angular/core';
import { Assiduite } from '../model/assiduite.model';
import { Router } from '@angular/router';
import { PersonnelService } from '../services/Personnel.Service';
import { AuthService } from '../services/auth.Service';

@Component({
  selector: 'app-assiduites',
  templateUrl: './assiduites.component.html',
  
})
export class AssiduitesComponent implements OnInit {
  assiduites? : Assiduite[] ;
  constructor( private personnelService: PersonnelService ,public authService: AuthService) {
  
      }
 
   ngOnInit(): void {
 
    this.chargerAssiduites();
   }
  
   chargerAssiduites(){
     this.personnelService.listeAssiduite().subscribe(ass=> {
       console.log(ass);
       this.assiduites = ass;
       });
   }


   supprimerAssiduite(a: Assiduite)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.personnelService.supprimerAssiduite(a.idAssiduite).subscribe(() => {
        console.log("produit supprimé");
        this.chargerAssiduites();     
      
});
}
  }
  
  
 
