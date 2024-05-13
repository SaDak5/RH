import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contrat } from '../model/contrat.model';
import { PersonnelService } from '../services/Personnel.Service';
import { Personnel } from '../model/personnel.model';

@Component({
  selector: 'app-update-contrat',
  templateUrl: './update-contrat.component.html',
  styleUrls: ['./update-contrat.component.css']
})
export class UpdateContratComponent implements OnInit {
  currentContrat = new Contrat();
  personnels! : Personnel[];
  updatedAsId! : String;
  
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private personnelService: PersonnelService) { }

    ngOnInit(): void {
      
      this.personnelService.listePersonnels().
      subscribe(abs => {this.personnels = abs;
      console.log(abs);
      });
      this.personnelService.consulterContrat(this.activatedRoute.snapshot.params['id']).
      subscribe( as =>{ this.currentContrat = as;
        this.updatedAsId =this.currentContrat.personnel.id.toString();
      } ) ;
      }
   //   
  updateContrat(){
      
    this.currentContrat.personnel = this.personnels?.find(ab => ab.id.toString() === this.updatedAsId)!;
    this.personnelService.updateContrat(this.currentContrat).subscribe(as => {
    this.router.navigate(['/contrats']);
    }); 
    }
  
  
}


