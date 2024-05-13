import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contrat } from '../model/contrat.model';
import { PersonnelService } from '../services/Personnel.Service';
import { AuthService } from '../services/auth.Service';
import { Personnel } from '../model/personnel.model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {

 contrats? : Contrat[] ;
 personnels! : Personnel[];
  constructor( private personnelService: PersonnelService ,private router: Router,public authService: AuthService) {
  
      }

      ngOnInit(): void {
        
        this.chargerContrats();
       }
      
       chargerContrats(){
         this.personnelService.listeContrat().subscribe(conts=> {
           console.log(conts);
           this.contrats = conts;
           });
           
       }
    
    
  supprimerContrat(c: Contrat)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.personnelService.supprimerContrat(c.idContrat).subscribe(() => {
            console.log("contrat supprimé");
            this.chargerContrats();     
          
    });
    }
    
    printPage() {
      window.print();
    }
}
