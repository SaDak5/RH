import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssiduitesComponent } from './assiduites/assiduites.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TokenInterceptor } from './services/token.interceptor';
import { RegisterComponent } from './register/register.component';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';
import { NotificationComponent } from './notification/notification.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';

import { AddNotificationComponent } from './add-notification/add-notification.component';
import { UpadateNotificationComponent } from './upadate-notification/upadate-notification.component';

import { UpdateDemandePretComponent } from './update-demande-pret/update-demande-pret.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PublicationComponent } from './publication/publication.component';
import { AddPublicationComponent } from './add-publication/add-publication.component';
import { PersonnelCongeDataComponent } from './personnel-conge-data/personnel-conge-data.component';
import { PersonnelPretDataComponent } from './personnel-pret-data/personnel-pret-data.component';
import { PersonnelContratDataComponent } from './personnel-contrat-data/personnel-contrat-data.component';
import { PersonnelAssiduiteDataComponent } from './personnel-assiduite-data/personnel-assiduite-data.component';
import { ResponsableComponent } from './responsable/responsable.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { EditProfilRespComponent } from './edit-profil-resp/edit-profil-resp.component';
import { AdminComponent } from './admin/admin.component';
import { EditProfilAdminComponent } from './edit-profil-admin/edit-profil-admin.component';
import { PersonnelDocDataComponent } from './personnel-doc-data/personnel-doc-data.component';
import { PersonnelDataComponent } from './personnel-data/personnel-data.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { UsersComponent } from './users/users.component';
import { ProfilAdministrateurComponent } from './profil-administrateur/profil-administrateur.component';






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
    AddAbsenceComponent,
    
    NavbarComponent,
    LoginComponent,
    ForbiddenComponent,
    RegisterComponent,
    UpdateDepartementComponent,
    NotificationComponent,
    VerifEmailComponent,
  
    AddNotificationComponent,
    UpadateNotificationComponent,
    

    UpdateDemandePretComponent,
    DashboardComponent,

    PublicationComponent,
    AddPublicationComponent,
    PersonnelCongeDataComponent,
    PersonnelPretDataComponent,
    PersonnelContratDataComponent,
    PersonnelAssiduiteDataComponent,
    ResponsableComponent,
    EditProfilComponent,
    EditProfilRespComponent,
    AdminComponent,
    EditProfilAdminComponent,
    PersonnelDocDataComponent,
    PersonnelDataComponent,
    UpdateAdminComponent,
    UsersComponent,
    ProfilAdministrateurComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  
    

  ],
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
