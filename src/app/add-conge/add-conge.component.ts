import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../services/Personnel.Service';
import { Router } from '@angular/router';
import { Conge } from '../model/conge.model';
import { Personnel } from '../model/personnel.model';

@Component({
  selector: 'app-add-conge',
  templateUrl: './add-conge.component.html',
  styleUrls: ['./add-conge.component.css']
})
export class AddCongeComponent implements OnInit {

  newConge =  new Conge();
  personnels!: Personnel[] ;
  newIdPersonnel! : String;
  newPersonnel! : Personnel;
  selectedPersonnel: Personnel | undefined;
   constructor(private personnelService : PersonnelService,
     private router:Router){}
  ngOnInit(): void {
      this.personnelService.listePersonnels().
        subscribe(abs => {console.log(abs);
        this.personnels = abs;
        }
        );
    }
  
 addConge(){
  if (this.selectedPersonnel) {
    this.newConge.personnel = this.selectedPersonnel; // Stocker l'objet Personnel sélectionné
    this.personnelService.ajouterConge(this.newConge).subscribe(() => {
      this.router.navigate(['/listeConge']);
    });
  } else {
    console.error('Veuillez sélectionner un personnel.');
  }
 }

}