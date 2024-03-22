import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contrat } from '../model/contrat.model';
import { PersonnelService } from '../services/Personnel.Service';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css']
})
export class AddContratComponent implements OnInit {
  newContrat = new Contrat();
  
  constructor(private personnelService: PersonnelService,
    private router : Router) {}

    ngOnInit(): void {
     
    }


    addContrat(){
      
            this.personnelService.ajouterContrat(this.newContrat).subscribe(() => {
            this.router.navigate(['contrats']);
              });
              }
}

