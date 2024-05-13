import { Component, OnInit } from '@angular/core';
import { Assiduite } from '../model/assiduite.model';
import { Absence } from '../model/absence.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from '../services/Personnel.Service';
import { Personnel } from '../model/personnel.model';


@Component({
  selector: 'app-update-assiduite',
  templateUrl: './update-assiduite.component.html',
  
})
export class UpdateAssiduiteComponent implements OnInit{
  currentAssiduite = new Assiduite();
  absences! : Absence[];
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
      this.personnelService.consulterAssiduite(this.activatedRoute.snapshot.params['id']).
      subscribe( as =>{ this.currentAssiduite = as;
        this.updatedAsId =this.currentAssiduite.personnel.id.toString();
      
      } ) ;
      }
   //   
  updateAssiduite(){
    this.currentAssiduite.personnel = this.personnels?.find(ab => ab.id.toString() === this.updatedAsId)!;
      this.personnelService.updateAssiduite(this.currentAssiduite).subscribe(as => {
      this.router.navigate(['/assiduites']);
      }); 
    }
  
  
}

