import { PersonnelService } from './../services/Personnel.Service';
import { Component, OnInit } from '@angular/core';
import { Conge } from '../model/conge.model';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.Service';

@Component({
  selector: 'app-listeconge',
  templateUrl: './listeconge.component.html',
  styleUrls: ['./listeconge.component.css']
})
export class ListecongeComponent implements OnInit {

  conges! : Conge[];
  
  
  constructor(private personnelService : PersonnelService,
    private router : Router,public authService : AuthService){

  }

  chargerConges(){
    this.personnelService.listeConges().subscribe(cong => {
      console.log(cong);
      this.conges = cong;
    });
  
    }
    supprimerConge(c: Conge) {
      let conf = confirm("Etes-vous sûr ?");
      if (conf) this.personnelService.supprimerConge(c.idConge).subscribe(() => {
        console.log("reclamation supprimé"); this.chargerConges(); }); 
      }
    
    
    
    
    
    modifierConge(idConge: number) {
      this.router.navigate(['/updateConge', idConge]);
    
    }



   
  
  ngOnInit(): void {
    

  this.chargerConges();

}



}