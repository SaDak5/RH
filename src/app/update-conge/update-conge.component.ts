import { Component, OnInit } from '@angular/core';
import { Conge } from '../model/conge.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from '../services/Personnel.Service';
import { Personnel } from '../model/personnel.model';

@Component({
  selector: 'app-update-conge',
  templateUrl: './update-conge.component.html',
  styleUrls: ['./update-conge.component.css']
})
export class UpdateCongeComponent implements OnInit {

  currentConge = new Conge();
  personnels! : Personnel[];
  updatedAsId! : String;
  constructor(private activatedRoute: ActivatedRoute, 
              private router :Router,
              private personnelService : PersonnelService) {}


              ngOnInit(): void {
                this.personnelService.listePersonnels().
                subscribe(abs => {this.personnels = abs;
                console.log(abs);
                });
                this.personnelService.consulterConge(this.activatedRoute.snapshot.params['idConge']).
                subscribe( as =>{ this.currentConge = as;
                  this.updatedAsId =this.currentConge.personnel.id.toString();
                
                } ) ;
                }
  updateConge() {
    this.currentConge.personnel = this.personnels?.find(ab => ab.id.toString() === this.updatedAsId)!
    this.personnelService.updateConge(this.currentConge).subscribe(p => {
      this.router.navigate(['/listeConge', this.currentConge.idConge]);
    });
  }

  
}