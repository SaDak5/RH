import { Component, OnInit } from '@angular/core';
import { Pret } from '../model/pret.model';
import { Router } from '@angular/router';
import { PersonnelService } from '../services/Personnel.Service';
import { Personnel } from '../model/personnel.model';

@Component({
  selector: 'app-add-pret',
  templateUrl: './add-pret.component.html',
  styleUrls: ['./add-pret.component.css']
})
export class AddPretComponent implements OnInit {

newPret = new Pret ;
personnels!: Personnel[] ;
  newIdPersonnel! : String;
  newPersonnel! : Personnel;
  selectedPersonnel: Personnel | undefined;
constructor(private personnelService : PersonnelService,
            private router:Router){}

addPret(){
  if (this.selectedPersonnel) {
    this.newPret.personnel = this.selectedPersonnel; // Stocker l'objet Personnel sélectionné
    this.personnelService.ajouterPret(this.newPret).subscribe(() => {
      this.router.navigate(['/listePret']);
    });
  } else {
    console.error('Veuillez sélectionner un personnel.');
  }
}
  ngOnInit(): void {
    this.personnelService.listePersonnels().
    subscribe(abs => {console.log(abs);
    this.personnels = abs;
    }
    );
  }

}