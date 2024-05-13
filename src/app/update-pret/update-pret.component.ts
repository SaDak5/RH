import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from '../services/Personnel.Service';
import { Pret } from '../model/pret.model';
import { Personnel } from '../model/personnel.model';

@Component({
  selector: 'app-update-pret',
  templateUrl: './update-pret.component.html',
  styleUrls: ['./update-pret.component.css']
})
export class UpdatePretComponent implements OnInit{

  currentPret = new Pret();
  personnels! : Personnel[];
  updatedAsId! : String;
  constructor(private activatedRoute: ActivatedRoute, 
              private router :Router,
              private personnelService : PersonnelService){}

              ngOnInit(): void {
                this.personnelService.listePersonnels().
                  subscribe(pers => {this.personnels = pers;
                  console.log(pers);
                  });
                this.personnelService.consulterPret(this.activatedRoute.snapshot.params['idPret']).
                subscribe( pret =>{ this.currentPret = pret;
                  this.updatedAsId =this.currentPret.personnel.id.toString();
                } ) ;
              }
            
  updatePret() {
    this.currentPret.personnel = this.personnels?.find(ab => ab.id.toString() === this.updatedAsId)!
    this.personnelService.updatePret(this.currentPret).subscribe(p => {
      this.router.navigate(['/listePret', this.currentPret.idPret]);
        });
      
  }

}