import { Component, OnInit } from '@angular/core';
import { Absence } from '../model/absence.model';
import { Assiduite } from '../model/assiduite.model';
import { PersonnelService } from '../services/Personnel.Service';
import { Router } from '@angular/router';
import { Personnel } from '../model/personnel.model';


@Component({
  selector: 'app-add-absence',
  templateUrl: './add-absence.component.html',
  styleUrls: ['./add-absence.component.css']
})
export class AddAbsenceComponent implements OnInit {
  newAbsence = new Absence();
  assiduites!: Assiduite[] ;
  newIdAssiduite! : number;
  newAssiduite! : Assiduite;
  personnels!: Personnel[] ;
  newIdPersonnel! : String;
  newPersonnel! : Personnel;
  absence: Absence = new Absence();
  MessageAjout: string = '';

  selectedPersonnel: Personnel | undefined;
  constructor(private personnelService: PersonnelService,
    private router : Router) {}

    ngOnInit(): void {
      this.personnelService.listeAssiduite().
      subscribe(abs => {console.log(abs);
      this.assiduites = abs;
      }
      );}

      

    addAbsence(){
    
      this.newAbsence.assiduite = this.assiduites.find(ab => ab.idAssiduite == this.newIdAssiduite)!;
            this.personnelService.ajouterAbsence(this.newAbsence).subscribe(() => {
              this.router.navigate(['/listeAbsences']); });
            }
        }