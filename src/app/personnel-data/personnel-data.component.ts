import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../services/Personnel.Service';
import { AuthService } from '../services/auth.Service';
import { Router } from '@angular/router';
import { Notification } from '../model/notification.model';
@Component({
  selector: 'app-personnel-data',
  templateUrl: './personnel-data.component.html',
  styleUrls: ['./personnel-data.component.css']
})
export class PersonnelDataComponent implements OnInit {

  nombreNotificationsAccepte: number = 0;
  nombreNotificationsRefuse: number = 0;
  showNotificationIcon: boolean = true;

 
  personnelData: any;
  error: boolean = false; // Définit la propriété 'error'
  personnelNotif: any;

  constructor(
    private personnelService: PersonnelService,
    public authService: AuthService,
    private router: Router
  ) {}

  navigateToSection(sectionId: string) {
    console.log('Navigating to section:', sectionId);
    this.router.navigate([], { fragment: sectionId, queryParamsHandling: 'preserve' });
  }

  countAcceptedNotifications(): void {
    this.personnelService.getNotificationData().subscribe((notifications: Notification[]) => {
      const acceptedNotifications = notifications.filter((notification: Notification) => 
        notification.etat === 'accepté' && !notification.lu
      );
      this.nombreNotificationsAccepte = acceptedNotifications.length;
    }, error => {
      console.error('Error fetching accepted notifications:', error);
    });
  }
  
  countRefusedNotifications(): void {
    this.personnelService.getNotificationData().subscribe((notifications: Notification[]) => {
      const refusedNotifications = notifications.filter((notification: Notification) => 
        notification.etat === 'refusé' && !notification.lu
      );
      this.nombreNotificationsRefuse = refusedNotifications.length;
    }, error => {
      console.error('Error fetching refused notifications:', error);
    });
  }
  
  showNotification() {
    alert('Notification: You have new messages!');
  }



  ngOnInit(): void {

   
    this.countAcceptedNotifications(); 
    this.countRefusedNotifications();
      this.authService.loadToken(); // Charger le token
      const token = this.authService.getToken();
    
      if (token) {
        // Récupérer les données personnelles
        this.personnelService.getPersonnelData().subscribe(
          (personnelResponse) => {
            this.personnelData = personnelResponse;
          },
          (personnelError) => {
            console.error('Error fetching personnel data:', personnelError);
          }
        );
    
        // Récupérer les données de notification
        this.personnelService.getNotificationData().subscribe(
          (notificationResponse) => {
            this.personnelNotif = notificationResponse;
           
          },
          (notificationError) => {
            console.error('Error fetching notification data:', notificationError);
          }
          
        );
      } else {
        console.error('No token found. Redirecting to login.');
        this.router.navigate(['/login']); // Redirection vers la page de connexion si le token est manquant
      }
  
  }

    navigateToProfileEdit() {
      this.router.navigate(['/editProfil'], { state: { personnelData: this.personnelData } });
    }
  }
