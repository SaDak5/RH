import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Messagerie } from '../model/messagerie';
import { PersonnelService } from '../services/Personnel.Service';
import { AuthService } from '../services/auth.Service';


@Component({
  selector: 'app-add-messagerie',
  templateUrl: './add-messagerie.component.html',
  styleUrls: ['./add-messagerie.component.css']
})
export class AddMessagerieComponent {
  message: string = ''; // Propriété pour stocker le message
  newMessagerie = new Messagerie();
  constructor(
    private personnelService: PersonnelService,public authService: AuthService,
    private router: Router
  ) {}

  // Fonction pour ajouter un message
  addMessage(): void {
    // Assignez la valeur de message à newMessagerie.message
    this.newMessagerie.message = this.message;
  
    // Appelez la méthode pour ajouter le message via le service
    this.personnelService.ajouterMessagerie(this.newMessagerie).subscribe(() => {
      console.log('Message ajouté avec succès !');
      this.router.navigate(['/messagerie']); // Rediriger vers la liste des messages après l'ajout
    }, error => {
      console.error('Erreur lors de l\'ajout du message :', error);
    });
  }
  
}
