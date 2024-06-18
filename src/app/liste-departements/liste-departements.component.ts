import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../services/Personnel.Service';
import { Departement } from '../model/departement.model';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.Service';

@Component({
  selector: 'app-liste-departements',
  templateUrl: './liste-departements.component.html',
  styleUrls: ['./liste-departements.component.css']
})
export class ListeDepartementsComponent implements OnInit {

  departements: Departement[] = [];
  allDepartements: Departement[] = [];
  searchTerm: string = '';

  constructor(
    private personnelService: PersonnelService,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.chargerDepartements();
  }

  chargerDepartements() {
    this.personnelService.listeDepartements().subscribe(deps => {
      this.departements = deps;
      this.allDepartements = [...deps]; // Copy the departments to allDepartments
    });
  }

  supprimerDepartement(dep: Departement) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.personnelService.supprimerDepartement(dep.idDep).subscribe(() => {
        console.log("departement supprimé");
        this.chargerDepartements();
      });
    }
  }

  modifierDepartement(idDep: number) {
    this.router.navigate(['/updateDepartement', idDep]);
  }

  onKeyUp(filterText: string) {
    this.departements = this.allDepartements.filter(item =>
      item.nomDep.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}
