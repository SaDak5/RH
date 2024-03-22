import { Component,OnInit } from '@angular/core';
import { Absence } from '../model/absence.model';
import { PersonnelService } from '../services/Personnel.Service';


@Component({
  selector: 'app-liste-absences',
  templateUrl: './liste-absences.component.html',

})
export class ListeAbsencesComponent implements OnInit {

  newAbsence = new Absence();
absences! : Absence[];

updatedAbs:Absence = {"idAbs":0,"heuresAbs":"","typeAbs":"","statut":""};

  ajout:boolean=true;
  constructor(private personnelService : PersonnelService) { }

  ngOnInit(): void {
    
    this.chargerAbsences();
  
  }
 
  absenceUpdated(ab:Absence){
    console.log("ab updated event",ab);
    this.personnelService.ajouterAbsence(ab).
     subscribe( ()=> this.chargerAbsences());
    }

    chargerAbsences(){
      this.personnelService.listeAbsences().
     subscribe(abs => {
      this.absences = abs._embedded.absences;
       console.log(abs); });
   
      }

      updateAbs(ab:Absence) {
        this.updatedAbs=ab;
        }  


        supprimerAbsence(ab : Absence) {
          let conf = confirm("Etes-vous sûr ?");
             if (conf)
             {
               this.personnelService.supprimerAbsence(ab.idAbs).subscribe(() => {
                console.log("Absence supprimée");
                this.chargerAbsences(); }  );
             }
        }

        
}