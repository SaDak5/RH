import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contrat } from '../model/contrat.model';
import { PersonnelService } from '../services/Personnel.Service';
import { Personnel } from '../model/personnel.model';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css']
})
export class AddContratComponent implements OnInit {
  newContrat = new Contrat();
  personnels!: Personnel[];
  selectedPersonnel: Personnel | undefined;

  constructor(private personnelService: PersonnelService, private router: Router) {}

  ngOnInit(): void {
    this.personnelService.listePersonnels().subscribe(personnels => {
      this.personnels = personnels;
    });
  }

  addContrat(): void {
    // Vérifier si un personnel est sélectionné
    if (this.selectedPersonnel) {
      // Extraire le personnel sélectionné et l'assigner au contrat
      this.newContrat.personnel = this.selectedPersonnel;
      
      // Valider les dates du contrat
      if (this.validateContrat()) {
        // Ajouter le contrat avec le personnel sélectionné
        this.personnelService.ajouterContrat(this.newContrat).subscribe(() => {
          // Rediriger vers la liste des contrats après l'ajout
          this.router.navigate(['/contrats']);
        });
      } else {
        // Afficher une erreur si les dates ne sont pas valides
        console.error("La date d'embauche ne peut pas être antérieure à la date de signature.");
      }
    } else {
      // Afficher une erreur si aucun personnel n'est sélectionné
      console.error('Veuillez sélectionner un personnel.');
    }
  }

  // Fonction pour valider les dates du contrat
  validateContrat(): boolean {
    const dateEmbauche = new Date(this.newContrat.dateEmbauche);
    const dateSignature = new Date(this.newContrat.dateSignature);
  
    return dateSignature<dateEmbauche  ;
  }
}
