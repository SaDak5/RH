import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../services/Personnel.Service';
import { Router, ActivatedRoute } from '@angular/router';
import { Conge } from '../model/conge.model';
import { Personnel } from '../model/personnel.model';

@Component({
  selector: 'app-add-conge',
  templateUrl: './add-conge.component.html',
  styleUrls: ['./add-conge.component.css']
})
export class AddCongeComponent implements OnInit {

  newConge = new Conge();
  personnels!: Personnel[];
  selectedPersonnel: Personnel | undefined;

  constructor(
    private personnelService: PersonnelService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.personnelService.listePersonnels().subscribe(personnels => {
      this.personnels = personnels;
    });

    // Récupérer les queryParams
    this.route.queryParams.subscribe(params => {
      if (params['typeConge']) {
        this.newConge.typeConge = params['typeConge'];
      }
      if (params['dateDebut']) {
        this.newConge.dateDebut = params['dateDebut'];
      }
      if (params['dateFin']) {
        this.newConge.dateFin = params['dateFin'];
      }
      if (params['dateDemande']) {
        this.newConge.dateDemande = params['dateDemande'];
      }
      if (params['nom'] && params['prenom'] && params['numCin']) {
        this.selectedPersonnel = this.personnels.find(personnel =>
          personnel.nom === params['nom'] &&
          personnel.prenom === params['prenom'] &&
          personnel.numCin === params['numCin']
        );
       
      }
    });
  }

  addConge() {
    if (this.selectedPersonnel) {
      this.newConge.personnel = this.selectedPersonnel;
      this.personnelService.ajouterConge(this.newConge).subscribe(() => {
        this.router.navigate(['/listeConge']);
      });
    } else {
      console.error('Veuillez sélectionner un personnel.');
    }
  }
}
