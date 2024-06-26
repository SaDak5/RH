import { Component, OnInit } from '@angular/core';
import { Pret } from '../model/pret.model';
import { PersonnelService } from '../services/Personnel.Service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.Service';

@Component({
  selector: 'app-listepret',
  templateUrl: './listepret.component.html',
  styleUrls: ['./listepret.component.css']
})
export class ListepretComponent implements OnInit{


  prets! : Pret[];

  
  constructor(private personnelService : PersonnelService,
    private router : Router ,public authService : AuthService){

  }

  chargerPrets(){
    this.personnelService.listePrets().subscribe(ps => {
      console.log(ps);
      this.prets = ps;
    });
  
    }



  supprimerPret(p: Pret) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) this.personnelService.supprimerPret(p.idPret).subscribe(() => {
      console.log("reclamation supprimé"); this.chargerPrets();
     }); 
    
    }


  modifierPret(idPret: number) {
    this.router.navigate(['/updatePret', idPret]);
    
    }


  ngOnInit(): void {
    this.chargerPrets();
  }

}