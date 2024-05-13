import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../services/Personnel.Service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.Service';
import { NotificationComponent } from '../notification/notification.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor( private personnelService: PersonnelService ,private router: Router,public authService: AuthService) {
  
  }
  nombreNotificationsConge: number = 0;
  nombreNotificationsPret: number = 0;
  nombreNotificationsAbsence: number = 0;
  nombreNotificationsAccepte: number = 0;
  nombreNotificationsRefuse: number = 0;
  nombreMessages: number = 0;
  showNotificationIcon: boolean = true;

  

  
  ngOnInit(): void {
    this.initializeNavbar();
    this.countNotificationsAbsence();
    this.countNotificationsPret();
    this.countNotificationsConge();
    this.countAcceptedNotifications(); 
    this.countRefusedNotifications();
    this.countMessages(); // Appel de la méthode countMessages ici
  }
  
  
  showNotification() {
    alert('Notification: You have new messages!');
  }

  countNotificationsAbsence(): void {
    this.personnelService.listeNotifications().subscribe(notifications => {
      // Filter the notifications array to get only those with the state "En attente"
      const pendingNotifications = notifications.filter(notification => notification.etat === 'en attente' && notification.type === 'absence');
      // Count the filtered notifications
      this.nombreNotificationsAbsence = pendingNotifications.length;
    });
  }
  countNotificationsConge(): void {
    this.personnelService.listeNotifications().subscribe(notifications => {
      // Filter the notifications array to get only those with the state "En attente"
      const pendingNotifications = notifications.filter(notification => notification.etat === 'en attente' && notification.type === 'congé');
      // Count the filtered notifications
      this.nombreNotificationsConge = pendingNotifications.length;
    });
  }

  countNotificationsPret(): void {
    this.personnelService.listeNotifications().subscribe(notifications => {
      // Filter the notifications array to get only those with the state "En attente"
      const pendingNotifications = notifications.filter(notification => notification.etat === 'en attente' && notification.type === 'pret');
      // Count the filtered notifications
      this.nombreNotificationsPret = pendingNotifications.length;
    });
  }
  countAcceptedNotifications(): void {
    this.personnelService.listeNotifications().subscribe(notifications => {
      // Filter the notifications array to get only those with the state "Accepté"
      const acceptedNotifications = notifications.filter(notification => notification.etat === 'accepté');
      // Count the filtered notifications
      this.nombreNotificationsAccepte = acceptedNotifications.length;
    });
  }
  
  countRefusedNotifications(): void {
    this.personnelService.listeNotifications().subscribe(notifications => {
      // Filter the notifications array to get only those with the state "Refusé"
      const refusedNotifications = notifications.filter(notification => notification.etat === 'refusé');
      // Count the filtered notifications
      this.nombreNotificationsRefuse = refusedNotifications.length;
    });
  }
  
  countMessages(): void {
    this.personnelService.listeMessageries().subscribe(messages => {
      // Count all messages
      this.nombreMessages = messages.length;
    });
  }
  resetMessageCountAndNavigate(): void {
    // Réinitialiser le nombre de messages
    this.nombreMessages = 0;
    // Naviguer vers la page de messagerie
    this.router.navigate(['/messagerie']);
  }

  initializeNavbar() {
    const closeBtn = document.querySelector("#btn") as HTMLElement | null;
    const searchBtn = document.querySelector(".bx-search") as HTMLElement | null;

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        const sidebar = document.querySelector(".sidebar") as HTMLElement | null;
        if (sidebar) {
          sidebar.classList.toggle("open");
          this.menuBtnChange(closeBtn, sidebar);
        }
      });
    }

    if (searchBtn) {
      searchBtn.addEventListener("click", () => {
        const sidebar = document.querySelector(".sidebar") as HTMLElement | null;
        if (sidebar) {
          sidebar.classList.toggle("open");
          this.menuBtnChange(closeBtn, sidebar);
        }
      });
    }
  }

  menuBtnChange(closeBtn: HTMLElement | null, sidebar: HTMLElement | null) {
    if (closeBtn && sidebar) {
      if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    }
  }
}