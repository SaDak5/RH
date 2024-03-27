import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssiduitesComponent } from './assiduites/assiduites.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateAssiduiteComponent } from './update-assiduite/update-assiduite.component';
import { AddAssiduiteComponent } from './add-assiduite/add-assiduite.component';
import { ListeAbsencesComponent } from './liste-absences/liste-absences.component';
import { UpdateAbsenceComponent } from './update-absence/update-absence.component';
import { DocumentsComponent } from './documents/documents.component';
import { UpdateDocumentComponent } from './update-document/update-document.component';
import { AddDocumentComponent } from './add-document/add-document.component';
import { ContratComponent } from './contrat/contrat.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { UpdateContratComponent } from './update-contrat/update-contrat.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { ProfilPersonnelComponent } from './profil-personnel/profil-personnel.component';
import { ListeDepartementsComponent } from './liste-departements/liste-departements.component';
import { ListecongeComponent } from './listeconge/listeconge.component';
import { ListepretComponent } from './listepret/listepret.component';
import { UpdatePersonnelComponent } from './update-personnel/update-personnel.component';
import { UpdateCongeComponent } from './update-conge/update-conge.component';
import { UpdatePretComponent } from './update-pret/update-pret.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RechercheParDepartementComponent } from './recherche-par-departement/recherche-par-departement.component';
import { AddPersonnelComponent } from './add-personnel/add-personnel.component';
import { AddCongeComponent } from './add-conge/add-conge.component';
import { AddPretComponent } from './add-pret/add-pret.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddAbsenceComponent } from './add-absence/add-absence.component';


@NgModule({
  declarations: [
    AppComponent,
    AssiduitesComponent,
    UpdateAssiduiteComponent,
    AddAssiduiteComponent,
    ListeAbsencesComponent,
    UpdateAbsenceComponent,
    DocumentsComponent,
    UpdateDocumentComponent,
    AddDocumentComponent,
    ContratComponent,
    AddContratComponent,
    UpdateContratComponent,
    PersonnelComponent,
    ProfilPersonnelComponent,
    ListeDepartementsComponent,
    ListecongeComponent,
    ListepretComponent,
    UpdatePersonnelComponent,
    UpdateCongeComponent,
    UpdatePretComponent,
    RechercheParNomComponent,
    RechercheParDepartementComponent,
    AddPersonnelComponent,
    AddCongeComponent,
    AddPretComponent,
    AddDepartementComponent,
    SidebarComponent,
    AddAbsenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
