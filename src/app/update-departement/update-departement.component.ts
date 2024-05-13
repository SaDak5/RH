import { Component, OnInit } from '@angular/core';
import { Departement } from '../model/departement.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from '../services/Personnel.Service';
import { Personnel } from '../model/personnel.model';

@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styleUrls: ['./update-departement.component.css']
})
export class UpdateDepartementComponent implements OnInit {


  personnels! : Personnel[];
  updatedAsId! : number;
  currentDep = new Departement();

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private personnelService: PersonnelService) { }

    updateDepartement() {
      this.personnelService.updateDepartement(this.currentDep).subscribe(dep => {
        this.router.navigate(['/listeDep']);
        }); 
    }
   

  ngOnInit(): void {

    this.personnelService.listePersonnels().
    subscribe(abs => {this.personnels = abs;
    console.log(abs);
    });
    this.personnelService.consulterDepartement(this.activatedRoute.snapshot.params['id']).
    subscribe( as =>{ this.currentDep = as;
    this.updatedAsId =this.currentDep.personnel.id;
    } ) ;
    
   
  }

}