import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../services/Personnel.Service';
import { AuthService } from '../services/auth.Service';
import { Router } from '@angular/router';
import { Notification } from '../model/notification.model';
import { Personnel } from '../model/personnel.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications!: Notification[];
  notificationsAbsence: Notification[] = [];
  notificationsConge: Notification[] = [];
  notificationsPret: Notification[] = [];
  personnel!: Personnel[];
  afficherTableauAbsences: boolean = false;
  afficherTableauConges: boolean = false;
  afficherTableauPrets: boolean = false;
  selectedNotification: Notification | null = null;
  
  nbEnAttenteAbsences: number = 0;
  nbEnAttenteConges: number = 0;
  nbEnAttentePrets: number = 0;

  nbEnAcceptedAbsences: number = 0;
  nbEnAcceptedConges: number = 0;
  nbEnAcceptedPrets: number = 0;

  nbEnRefusedAbsences: number = 0;
  nbEnRefusedconges: number = 0;
  nbEnRefusedprets: number = 0;

  isAbsencesActive: boolean = false;
  isCongesActive: boolean = false;
  isPretsActive: boolean = false;

  constructor(
    private personnelService: PersonnelService,

    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.chargerNotifications();
  }

  chargerNotifications() {
    this.personnelService.listeNotifications().subscribe((notif) => {
      console.log(notif);
      this.notifications = notif;
      // Filtrer les notifications par type
      this.notificationsAbsence = this.notifications.filter(
        (notification) => notification.type === 'absence'
      );
      this.notificationsConge = this.notifications.filter(
        (notification) => notification.type === 'congé'
      );
      this.notificationsPret = this.notifications.filter(
        (notification) => notification.type === 'pret'
      );
      // Calculer le nombre de notifications en attente pour chaque type
      this.nbEnAttenteAbsences = this.notificationsAbsence.filter(
        (notification) => notification.etat === 'en attente'
      ).length;
      this.nbEnAttenteConges = this.notificationsConge.filter(
        (notification) => notification.etat === 'en attente'
      ).length;
      this.nbEnAttentePrets = this.notificationsPret.filter(
        (notification) => notification.etat === 'en attente'
      ).length;

     // Calculer le nombre de notifications acceptées pour chaque type
     this.nbEnAcceptedAbsences = this.notificationsAbsence.filter(
      (notification) => notification.etat === 'accepté'
    ).length;
    this.nbEnAcceptedConges = this.notificationsConge.filter(
      (notification) => notification.etat === 'accepté'
    ).length;
    this.nbEnAcceptedPrets = this.notificationsPret.filter(
      (notification) => notification.etat === 'accepté'
    ).length;

    // Calculer le nombre de notifications refusées pour chaque type
    this.nbEnRefusedAbsences = this.notificationsAbsence.filter(
      (notification) => notification.etat === 'refusé'
    ).length;
    this.nbEnRefusedconges = this.notificationsConge.filter(
      (notification) => notification.etat === 'refusé'
    ).length;
    this.nbEnRefusedprets = this.notificationsPret.filter(
      (notification) => notification.etat === 'refusé'
    ).length;
  });
}


  afficherAbsences() {
    this.afficherTableauAbsences = true;
    this.afficherTableauConges = false;
    this.afficherTableauPrets = false;

    this.isAbsencesActive = true;
    this.isCongesActive = false;
    this.isPretsActive = false;
  }

  afficherConges() {
    this.afficherTableauAbsences = false;
    this.afficherTableauConges = true;
    this.afficherTableauPrets = false;

    this.isAbsencesActive = false;
    this.isCongesActive = true;
    this.isPretsActive = false;
  }

  afficherPrets() {
    this.afficherTableauAbsences = false;
    this.afficherTableauConges = false;
    this.afficherTableauPrets = true;
    this.isAbsencesActive = false;
    this.isCongesActive = false;
    this.isPretsActive = true;
  }

  approuverDemande(notification: Notification): void {
    notification.etat = 'accepté';
    this.personnelService.updateNotification(notification).subscribe(() => {
      console.log("État de la notification mis à jour avec succès");
      this.chargerNotifications();
    }, error => {
      console.error("Erreur lors de la mise à jour de l'état de la notification :", error);
    });
  }

  refuserDemande(notification: Notification): void {
    notification.etat = 'refusé';
    this.personnelService.updateNotification(notification).subscribe(() => {
      console.log("État de la notification mis à jour avec succès");
      this.chargerNotifications();
    }, error => {
      console.error("Erreur lors de la mise à jour de l'état de la notification :", error);
    });
  }

  supprimerNotification(d: Notification)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
    this.personnelService.supprimerNotification(d.idNotification).subscribe(() => {
          console.log("Notification supprimé");
          this.chargerNotifications();     
        
  });
  }
  
}
