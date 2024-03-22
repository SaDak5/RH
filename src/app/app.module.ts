import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssiduitesComponent } from './assiduites/assiduites.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateAssiduiteComponent } from './update-assiduite/update-assiduite.component';
import { AddAssiduiteComponent } from './add-assiduite/add-assiduite.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ListeAbsencesComponent } from './liste-absences/liste-absences.component';
import { UpdateAbsenceComponent } from './update-absence/update-absence.component';
import { DocumentsComponent } from './documents/documents.component';
import { UpdateDocumentComponent } from './update-document/update-document.component';
import { AddDocumentComponent } from './add-document/add-document.component';
import { ContratComponent } from './contrat/contrat.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { UpdateContratComponent } from './update-contrat/update-contrat.component';


@NgModule({
  declarations: [
    AppComponent,
    AssiduitesComponent,
    UpdateAssiduiteComponent,
    AddAssiduiteComponent,
    SideBarComponent,
    ListeAbsencesComponent,
    UpdateAbsenceComponent,
    DocumentsComponent,
    UpdateDocumentComponent,
    AddDocumentComponent,
    ContratComponent,
    AddContratComponent,
    UpdateContratComponent
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
