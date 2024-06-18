import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../services/Personnel.Service';
import { Router } from '@angular/router';
import { Personnel } from '../model/personnel.model';
import { Notification } from '../model/notification.model';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css']
})
export class AddNotificationComponent implements OnInit {
  newNotification = new Notification(); // Crée une nouvelle instance de Notification
  personnels!: Personnel[];
  selectedPersonnel: Personnel | undefined;
  showPart1: boolean = false;
  showPart2: boolean = false;
  showPart3: boolean = false;
  
  constructor(private personnelService: PersonnelService, private router : Router) {
    // Initialisation du champ 'etat' de newNotification
    this.newNotification.etat = 'en attente';
  }

  ngOnInit(): void {
    this.personnelService.listePersonnels().subscribe(personnels => {
      this.personnels = personnels;
    });
  }

  addNotification() {
    // Vérifier si le type est sélectionné
    if (!this.newNotification.type) {
      console.error('Veuillez sélectionner un type.');
      alert('Veuillez sélectionner un type.');
      return;
    }

    // Si un personnel est sélectionné, l'ajouter à la notification
    if (this.selectedPersonnel) {
      this.newNotification.personnel = this.selectedPersonnel;
    }

    // Mettre à jour la date de notification à la date actuelle
    this.newNotification.dateDemande = new Date();

    this.personnelService.ajouterNotification(this.newNotification).subscribe(() => {
      console.log('Notification ajoutée avec succès.');
      this.router.navigate(['/notification']);
    }, error => {
      console.error('Erreur lors de l\'ajout de la notification :', error);
      alert('Une erreur est survenue lors de l\'ajout de la notification. Veuillez réessayer.');
    });
  }   
    
  showPart(partNumber: number) {
    this.showPart1 = partNumber === 1;
    this.showPart2 = partNumber === 2;
    this.showPart3 = partNumber === 3;
  }   
}
