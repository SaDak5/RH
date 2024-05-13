import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.Service';
import { PersonnelService } from '../services/Personnel.Service';
import { Router } from '@angular/router';
import { Messagerie } from '../model/messagerie';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {
 
  successMessage: string = '';
  messages? : Messagerie[] ;
  constructor( private personnelService: PersonnelService ,private router: Router,public authService: AuthService) {
  
      }
 
  ngOnInit(): void {
   
    this.chargerMessagerie();
   
   }
  
   
   chargerMessagerie(){

     this.personnelService.listeMessageries().subscribe(abs=> {
       console.log(abs);
       this.messages= abs;
       });
   }
   
   supprimerMessage(a: Messagerie) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.personnelService.supprimerMessagerie(a.idMessagerie).subscribe(() => {
        console.log("message supprimé");
        this.chargerMessagerie();
        this.successMessage = 'Absence supprimée avec succès.'; // Mettre à jour le message de succès
        setTimeout(() => {
          this.successMessage = '';
        }, 4000);
      });
    }}}
