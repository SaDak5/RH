import {Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { Absence } from '../model/absence.model';

@Component({
  selector: 'app-update-absence',
  templateUrl: './update-absence.component.html',
  styleUrls: ['./update-absence.component.css']
})
export class UpdateAbsenceComponent implements OnInit {

  @Input()
  absence! : Absence;

  @Input()
ajout!:boolean;

  @Output()
  absenceUpdated = new EventEmitter<Absence>();
  
constructor(){}
ngOnInit(): void {
 console.log("ngOnInit du composant UpdateAbsence ",this.absence);
}
saveAbsence(){
 this.absenceUpdated.emit(this.absence);
 }


 modeAjout()
  {
    this.ajout=true;
    this.absence.idAbs = 0;
    this.absence.heuresAbs="";
    this.absence.typeAbs="";
    this.absence.statut="";
  }
  
  updateFields() {
   
      // Only update typeAbs and statut if they are empty
      if (!this.absence.typeAbs) {
        this.absence.typeAbs = "";
      }
      if (!this.absence.statut) {
        this.absence.statut = "";
      }
    }
    
}
