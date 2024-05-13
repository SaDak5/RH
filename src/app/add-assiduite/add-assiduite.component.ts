import { Component, OnInit } from '@angular/core';
import { Assiduite } from '../model/assiduite.model';
import { Absence } from '../model/absence.model';

import { Router } from '@angular/router';
import { PersonnelService } from '../services/Personnel.Service';
import { Personnel } from '../model/personnel.model';

@Component({
  selector: 'app-add-assiduite',
  templateUrl: './add-assiduite.component.html',
})
export class AddAssiduiteComponent implements OnInit {
  newAssiduite = new Assiduite();
  absences!: Absence[];
  newIdAbs!: number;
  newAbsence!: Absence;
  newIdPersonnel! : String;
  personnels!: Personnel[];
  selectedPersonnel!: Personnel ; // Ajout d'une variable pour stocker le personnel sélectionné

  constructor(private personnelService: PersonnelService, private router: Router) {}

  ngOnInit(): void {
    this.personnelService.listePersonnels().
    subscribe(abs => {console.log(abs);
    this.personnels = abs;
    }
    );
  }

  addAssiduite() {
    
    if (this.selectedPersonnel) {
      this.newAssiduite.personnel = this.selectedPersonnel; // Stocker l'objet Personnel sélectionné
      this.personnelService.ajouterAssiduite(this.newAssiduite).subscribe(() => {
        this.router.navigate(['/assiduites']);
      });
    } else {
      console.error('Veuillez sélectionner un personnel.');
    } 
  }
}
