import { Component, OnInit } from '@angular/core';
import { Personnel } from '../model/personnel.model';
import { PersonnelService } from '../services/Personnel.Service';
import { AuthService } from '../services/auth.Service';
import { Router } from '@angular/router';
import { Assiduite } from '../model/assiduite.model';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  personnelCounts: { department: string, count: number }[] = [];
  notifications! :Notification[] ;
  personnel! :Personnel[] ;
  assiduites? : Assiduite[] ;
  nombreNotifications: number = 0;
  nombrePersonnel: number = 0;
  nombreDepartement: number = 0;
  nombreHeuresTravailleesMoyenne: number = 0;
  constructor( private personnelService: PersonnelService ,private router: Router ,public authService: AuthService) {
  
      }
      

      ngOnInit(): void {
 
        this.countNotifications();
        this.countPersonnel();
        this.countDepartement();
        this.chargerAssiduites(); 
        this.calculerMoyenneHeuresTravaillees();
        
        
        
       
       }
  countNotifications(): void {
    this.personnelService.listeNotifications().subscribe(notifications => {
      // Filter the notifications array to get only those with the state "En attente"
      const pendingNotifications = notifications.filter(notification => notification.etat === 'en attente');
      // Count the filtered notifications
      this.nombreNotifications = pendingNotifications.length;
    });
  }
  countPersonnel(): void {
    this.personnelService.listePersonnels().subscribe(personnel => {
      // Compter le nombre total de personnel
      this.nombrePersonnel = personnel.length;
    });
  }
  countDepartement(): void {
    this.personnelService.listeDepartements().subscribe(personnel => {
      // Compter le nombre total de personnel
      this.nombreDepartement = personnel.length;
    });
  }

  calculerMoyenneHeuresTravaillees(): void {
    if (this.assiduites && this.assiduites.length > 0) {
      let totalHeuresTravaillees = 0;
      for (let assiduite of this.assiduites) {
        totalHeuresTravaillees += assiduite.nbHeures;
      }
      this.nombreHeuresTravailleesMoyenne = totalHeuresTravaillees / this.assiduites.length;
    }
  }
  chargerAssiduites(){
    this.personnelService.listeAssiduite().subscribe(ass => {
      console.log(ass);
      this.assiduites = ass;
      this.calculerMoyenneHeuresTravaillees(); // Assurez-vous de calculer la moyenne après avoir reçu les données
    });
  }
  
}
