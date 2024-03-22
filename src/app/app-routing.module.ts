import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssiduitesComponent } from './assiduites/assiduites.component';
import { UpdateAssiduiteComponent } from './update-assiduite/update-assiduite.component';
import { AddAssiduiteComponent } from './add-assiduite/add-assiduite.component';
import { ListeAbsencesComponent } from './liste-absences/liste-absences.component';
import { UpdateAbsenceComponent } from './update-absence/update-absence.component';
import { DocumentsComponent } from './documents/documents.component';
import { AddDocumentComponent } from './add-document/add-document.component';
import { UpdateDocumentComponent } from './update-document/update-document.component';
import { ContratComponent } from './contrat/contrat.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { UpdateContratComponent } from './update-contrat/update-contrat.component';

const routes: Routes = [
  {path: "assiduites", component : AssiduitesComponent},
  {path: "addAssiduite", component : AddAssiduiteComponent},
  {path: "updateAssiduite/:id", component :UpdateAssiduiteComponent},
  {path: "listeAbsences", component :ListeAbsencesComponent},
  {path: "updateAbsence", component :UpdateAbsenceComponent},
  {path: "documents", component :DocumentsComponent},
  {path: "addDocument", component : AddDocumentComponent},
  {path: "updateDocument/:id", component :UpdateDocumentComponent},
  {path: "contrats", component :ContratComponent},
  {path: "addContrat", component : AddContratComponent},
  {path: "updateContrat/:id", component :UpdateContratComponent},
  { path: "", redirectTo: "assiduites", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
 
}
