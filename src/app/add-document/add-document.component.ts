import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Document } from '../model/docAdministratifs.model';
import { PersonnelService } from '../services/Personnel.Service';
import { Personnel } from '../model/personnel.model';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {
  newDocument = new Document();
  personnels: Personnel[] = [];
  selectedPersonnel: Personnel | undefined;
  selectedFile: File | null = null;
  constructor(private personnelService: PersonnelService, private router: Router) {}

  ngOnInit(): void {
    this.personnelService.listePersonnels().subscribe((personnels: Personnel[]) => {
      console.log(personnels);
      this.personnels = personnels;
    });
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  addDocument() {
    if (this.newDocument.type === 'Autres') {
      this.newDocument.type = this.newDocument.autreType;
    }

    if (this.selectedPersonnel) {
      this.newDocument.personnel = this.selectedPersonnel; // Stocker l'objet Personnel sélectionné
      this.personnelService.ajouterDocument(this.newDocument).subscribe(() => {
        this.router.navigate(['/documents']);
      });
    } else {
      console.error('Veuillez sélectionner un personnel.');
    }
  }
}
