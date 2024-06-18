import { Injectable } from '@angular/core';
import { Assiduite } from '../model/assiduite.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Absence } from '../model/absence.model';
import { Document } from '../model/docAdministratifs.model';
import { Contrat } from '../model/contrat.model';
import { Departement } from '../model/departement.model';
import { Personnel } from '../model/personnel.model';
import { Conge } from '../model/conge.model';
import { Pret } from '../model/pret.model';
import { Notification} from '../model/notification.model';
import { AuthService } from './auth.Service';

import { Commentaire } from '../model/commentaire.model';
import { Publication } from '../model/publication.model';
import { Admin } from '../model/admin.model';
import { Responsable } from '../model/responsable.model';
import { forkJoin, map } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders( {'Content-Type': 'application/json'} )
    };
  @Injectable({
    providedIn: 'root'
  })
  export class PersonnelService{
    apiURLAs= 'http://localhost:8088/ressourcesH/api';
    apiURLAb = 'http://localhost:8088/ressourcesH/api/abs';
    apiURLDoc= 'http://localhost:8088/ressourcesH/api/documents';
    apiURLCon='http://localhost:8088/ressourcesH/api/contrat';
    baseUrl="http://localhost:8088/ressourcesH/api";
    apiURL="http://localhost:8088/ressourcesH/api/departements";
    apiURLCong="http://localhost:8088/ressourcesH/api/conge";
    apiURLP="http://localhost:8088/ressourcesH/api/pret"
    apiNOT="http://localhost:8088/ressourcesH/api/notification"
    apiMess="http://localhost:8088/ressourcesH/api"
    apiComment="http://localhost:8088/ressourcesH/api/commentaire"

    apiResponsable="http://localhost:8088/ressourcesH/api/Responsable";
    apiAdmin="http://localhost:8088/ressourcesH/api/Admin";
   
    assiduites!: Assiduite[]; //un tableau de Assiduite
    absences!:Absence[]; //un tableau d'absence'
    documents!:Document[] //un tableau de document
    personnels! : Personnel[];  //un tableau de Personnel

    notifications! : Notification[];  //un tableau de not
    contrats! : Contrat[];  //un tableau de contrat
     prets! : Pret[];  //un tableau de pret
     conges!:Conge[];
    publications!:Publication[] //un tableau;
     commentaires!:Commentaire[];
    constructor(private http: HttpClient,private authService: AuthService,) {}
  
    listeAssiduite(): Observable<Assiduite[]>{
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.get<Assiduite[]>(this.apiURLAs+"/all",{headers:httpHeaders});
      }
      
    
      ajouterAssiduite( as: Assiduite):Observable<Assiduite>{
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.post<Assiduite>(this.apiURLAs+"/addass", as, {headers:httpHeaders});
        }
        supprimerAssiduite(id : number) {
        const url = `${this.apiURLAs}/delass/${id}`;
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.delete(url, {headers:httpHeaders});
        }
        consulterAssiduite(id: number): Observable<Assiduite> {
        const url = `${this.apiURLAs}/getbyid/${id}`;
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.get<Assiduite>(url,{headers:httpHeaders});
        }
        updateAssiduite(as :Assiduite) : Observable<Assiduite> {
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.put<Assiduite>(this.apiURLAs+"/updateass", as, {headers:httpHeaders});
        }
  

     listeAbsences(): Observable<Absence[]>{
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.get<Absence[]>(this.apiURLAb+"/all",{headers:httpHeaders});
      }
      
    
      ajouterAbsence( ab: Absence):Observable<Absence>{
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.post<Absence>(this.apiURLAb+"/addab", ab, {headers:httpHeaders});
        }
        supprimerAbsence(id : number) {
        const url = `${this.apiURLAb}/delab/${id}`;
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.delete(url, {headers:httpHeaders});
        }
        consulterAbsence(id: number): Observable<Absence> {
        const url = `${this.apiURLAb}/getbyid/${id}`;
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.get<Absence>(url,{headers:httpHeaders});
        }
        updateAbsence(ab :Absence) : Observable<Absence> {
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.put<Absence>(this.apiURLAb+"/updateab", ab, {headers:httpHeaders});
        }
     /////////////   les meth de Documents  /////////////////////
    
     listeDocument(): Observable<Document[]>{
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.get<Document[]>(this.apiURLDoc+"/all",{headers:httpHeaders});
      }
      
    
      ajouterDocument( as: Document):Observable<Document>{
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.post<Document>(this.apiURLDoc+"/add", as, {headers:httpHeaders});
        }
        supprimerDocument(id : number) {
        const url = `${this.apiURLDoc}/delete/${id}`;
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.delete(url, {headers:httpHeaders});
        }
        consulterDocument(id: number): Observable<Document> {
        const url = `${this.apiURLDoc}/getbyid/${id}`;
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.get<Document>(url,{headers:httpHeaders});
        }
        updateDocument(as :Document) : Observable<Document> {
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.put<Document>(this.apiURLDoc+"/updatedoc", as, {headers:httpHeaders});
        }
  /////////////////////////////////////////////////////////////////
    
  listeContrat(): Observable<Contrat[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Contrat[]>(this.apiURLCon+"/all",{headers:httpHeaders});
    }
    
  
    ajouterContrat( as: Contrat):Observable<Contrat>{
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.post<Contrat>(this.apiURLCon+"/add", as, {headers:httpHeaders});
      }
      supprimerContrat(id : number) {
      const url = `${this.apiURLCon}/delete/${id}`;
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.delete(url, {headers:httpHeaders});
      }
      consulterContrat(id: number): Observable<Contrat> {
      const url = `${this.apiURLCon}/getbyid/${id}`;
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.get<Contrat>(url,{headers:httpHeaders});
      }
      updateContrat(as :Contrat) : Observable<Contrat> {
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.put<Contrat>(this.apiURLCon+"/update", as, {headers:httpHeaders});
      }
  
        ////////////////// 23/03/2024 /////////////////////////
        listePersonnels(): Observable<Personnel[]>{
         
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
          return this.http.get<Personnel[]>(this.baseUrl+"/lkol",{headers:httpHeaders});
          }
          
        
          ajouterPersonnel( as: Personnel):Observable<Personnel>{
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.post<Personnel>(this.baseUrl+"/addP", as, {headers:httpHeaders});
            }
            supprimerPersonnel(id : number) {
            const url = `${this.baseUrl}/delete/${id}`;
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.delete(url, {headers:httpHeaders});
            }
            consulterPersonnel(idPersonnel: number): Observable<Personnel> {
            const url = `${this.baseUrl}/getbyID/${idPersonnel}`;
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.get<Personnel>(url,{headers:httpHeaders});
            }
            updatePersonnel(as :Personnel) : Observable<Personnel> {
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.put<Personnel>(this.baseUrl+"/updatePers", as, {headers:httpHeaders});
            }
      getPersonnelById(id:number):Observable<Personnel> {
        const  url = `${this.baseUrl}/getbyID/${id}`;
        return this.http.get<Personnel>(url,httpOptions);
        }
      
        trierPersonnels(){
          this.personnels = this.personnels.sort((n1,n2) => {
            if (n1.id! > n2.id!) 
            { return 1; } 
            if (n1.id! < n2.id!) 
            {return -1;}
            return 0;
          });
           }
      
        listeDepartements():Observable<Departement[]>{
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
          return this.http.get<Departement[]>(this.apiURL+"/all",{headers:httpHeaders});
          }
      
        rechercherParDepartement(idDep: number):Observable< Personnel[]> {
            const url = `${this.apiURL}/personsdep/${idDep}`;
              return this.http.get<Personnel[]>(url); 
            }
      
        rechercherParNom(nomPersonnel: string):Observable< Personnel[]> {
            const url = `${this.apiURL}/personsByName/${nomPersonnel}`;
              return this.http.get<Personnel[]>(url); }
      
        
       
    ajouterDepartement( as: Departement):Observable<Departement>{
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.post<Departement>(this.apiURL+"/addDep", as, {headers:httpHeaders});
      }
      
      consulterDepartement(id: number): Observable<Departement> {
        const url = `${this.apiURL}/getbyid/${id}`;
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.get<Departement>(url,{headers:httpHeaders});
        }

        updateDepartement( dep: Departement):Observable<Departement>{
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
          return this.http.put<Departement>(this.apiURL+"/updateDep", dep, {headers:httpHeaders}); 
          }
      
        supprimerDepartement(idDep : number) {
            const url = `${this.apiURL}/delDep/${idDep}`;
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.delete(url, {headers:httpHeaders});
            }
            //congee
            listeConges(): Observable<Conge[]>{
              let jwt = this.authService.getToken();
              jwt = "Bearer "+jwt;
              let httpHeaders = new HttpHeaders({"Authorization":jwt})
              return this.http.get<Conge[]>(this.apiURLCong+"/all",{headers:httpHeaders});
              }
              
            
              ajouterConge( as: Conge):Observable<Conge>{
                let jwt = this.authService.getToken();
                jwt = "Bearer "+jwt;
                let httpHeaders = new HttpHeaders({"Authorization":jwt})
                return this.http.post<Conge>(this.apiURLCong+"/addConge", as, {headers:httpHeaders});
                }
                supprimerConge(id : number) {
                const url = `${this.apiURLCong}/delConge/${id}`;
                let jwt = this.authService.getToken();
                jwt = "Bearer "+jwt;
                let httpHeaders = new HttpHeaders({"Authorization":jwt})
                return this.http.delete(url, {headers:httpHeaders});
                }
                consulterConge(id: number): Observable<Conge> {
                const url = `${this.apiURLCong}/getbyid/${id}`;
                let jwt = this.authService.getToken();
                jwt = "Bearer "+jwt;
                let httpHeaders = new HttpHeaders({"Authorization":jwt})
                return this.http.get<Conge>(url,{headers:httpHeaders});
                }
                updateConge(as :Conge) : Observable<Conge> {
                let jwt = this.authService.getToken();
                jwt = "Bearer "+jwt;
                let httpHeaders = new HttpHeaders({"Authorization":jwt})
                return this.http.put<Conge>(this.apiURLCong+"/update", as, {headers:httpHeaders});
                }
        
      
       
      
        //pret
        listePrets(): Observable<Pret[]>{
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
          return this.http.get<Pret[]>(this.apiURLP+"/all",{headers:httpHeaders});
          }
          
        
          ajouterPret( as: Pret):Observable<Pret>{
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.post<Pret>(this.apiURLP+"/addPret", as, {headers:httpHeaders});
            }
            supprimerPret(id : number) {
            const url = `${this.apiURLP}/delete/${id}`;
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.delete(url, {headers:httpHeaders});
            }
            consulterPret(id: number): Observable<Pret> {
            const url = `${this.apiURLP}/getbyid/${id}`;
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.get<Pret>(url,{headers:httpHeaders});
            }
            updatePret(as :Pret) : Observable<Pret> {
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.put<Pret>(this.apiURLP+"/update", as, {headers:httpHeaders});
            }
            //notification //////////////////////////////////
            listeNotifications(): Observable<Notification[]>{
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
          return this.http.get<Notification[]>(this.apiNOT+"/all",{headers:httpHeaders});
          }
          
        
          ajouterNotification( as: Notification):Observable<Notification>{
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.post<Notification>(this.apiNOT+"/add", as, {headers:httpHeaders});
            }
            supprimerNotification(id : number) {
            const url = `${this.apiNOT}/delete/${id}`;
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.delete(url, {headers:httpHeaders});
            }
            consulterNotification(id: number): Observable<Notification> {
            const url = `${this.apiNOT}/getbyid/${id}`;
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.get<Notification>(url,{headers:httpHeaders});
            }
            updateNotification(as :Notification) : Observable<Notification> {
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.put<Notification>(this.apiNOT+"/update", as, {headers:httpHeaders});
          }
           // Messagerie 08/05/2024 //////////////////////////////////
        
           ajouterPublication(publication: Publication): Observable<Publication> {
            let jwt = this.authService.getToken();
            jwt = "Bearer " + jwt;
            let httpHeaders = new HttpHeaders({ "Authorization": jwt });
            return this.http.post<Publication>(`${this.apiMess}/publication/ajouter`, publication, { headers: httpHeaders });
        }
        
        supprimerPublication(id: number): Observable<void> {
            const url = `${this.apiMess}/publication/supprimer/${id}`;
            let jwt = this.authService.getToken();
            jwt = "Bearer " + jwt;
            let httpHeaders = new HttpHeaders({ "Authorization": jwt });
            return this.http.delete<void>(url, { headers: httpHeaders });
        }
        
        listePublications(): Observable<Publication[]> {
            let jwt = this.authService.getToken();
            jwt = "Bearer " + jwt;
            let httpHeaders = new HttpHeaders({ "Authorization": jwt });
            return this.http.get<Publication[]>(`${this.apiMess}/publications/tous`, { headers: httpHeaders });
        }
        
        ajouterCommentaire(publicationId: number, commentaire: Commentaire): Observable<Commentaire> {
            let jwt = this.authService.getToken();
            jwt = "Bearer " + jwt;
            let httpHeaders = new HttpHeaders({ "Authorization": jwt });
            return this.http.post<Commentaire>(`${this.apiMess}/ajouterCommentaires/${publicationId}`, commentaire, { headers: httpHeaders });
        }
        supprimerCommentaire(id: number): Observable<void> {
          const url = `${this.apiMess}/supprimerCommentaire/${id}`;
          let jwt = this.authService.getToken();
            jwt = "Bearer " + jwt;
            let httpHeaders = new HttpHeaders({ "Authorization": jwt });
            return this.http.delete<void>(url, { headers: httpHeaders });
        
      }
        tousCommentaires(publicationId: number): Observable<Commentaire[]> {
            let jwt = this.authService.getToken();
            jwt = "Bearer " + jwt;
            let httpHeaders = new HttpHeaders({ "Authorization": jwt });
            return this.http.get<Commentaire[]>(`${this.apiMess}/tousCommentaires/${publicationId}`, { headers: httpHeaders });
        }
        ////// 1juin ////////////////
        getdocData(): Observable<any> {
          const token = this.authService.getToken();
          if (!token) {
            throw new Error('No token found.');
          }
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          });
          return this.http.get<any>(`${this. apiURLDoc}/data`, { headers });
        }
        getAdminData(): Observable<any> {
          const token = this.authService.getToken();
          if (!token) {
            throw new Error('No token found.');
          }
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          });
          return this.http.get<any>(`${this.apiAdmin}/data`, { headers });
        }
        updateAdmin( admin: Admin):Observable<Admin>{
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
          return this.http.put<Admin>(this.apiAdmin+"/update", admin, {headers:httpHeaders}); 
          }
          updateResponsable( resp: Responsable):Observable<Responsable>{
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.put<Responsable>(this.apiResponsable+"/update", resp, {headers:httpHeaders}); 
            }
        
            getResponsableData(): Observable<any> {
              const token = this.authService.getToken();
              if (!token) {
                throw new Error('No token found.');
              }
              const headers = new HttpHeaders({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
              });
              return this.http.get<any>(`${this.apiResponsable}/data`, { headers });
            }
          
          
          getPersonnelData(): Observable<any> {
            const token = this.authService.getToken();
            if (!token) {
              throw new Error('No token found.');
            }
            const headers = new HttpHeaders({
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            });
            return this.http.get<any>(this.baseUrl+"/personnel/data", { headers })    
          }
        
          getNotificationData( ): Observable<any> {
            const token = this.authService.getToken();
            if (!token) {
              throw new Error('No token found.');
            }
            const headers = new HttpHeaders({
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            });
            return this.http.get<any>(this.apiNOT+"/data", { headers })    
          }
        
          listeNotificationData( ): Observable<any> {
            const token = this.authService.getToken();
            if (!token) {
              throw new Error('No token found.');
            }
            const headers = new HttpHeaders({
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            });
            return this.http.get<any>(this.apiNOT+"/data", { headers })    
          }
        
        
          markNotificationsAsRead(notifications: Notification[]): Observable<any> {
            const token = this.authService.getToken();
            if (!token) {
              throw new Error('No token found.');
            }
            const headers = new HttpHeaders({
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            });
            return this.http.put(`${this.apiNOT}/markAsRead`, notifications, { headers });
          }
        
          getCongeData(): Observable<any> {
            const token = this.authService.getToken();
            if (!token) {
              throw new Error('No token found.');
            }
            const headers = new HttpHeaders({
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            });
            return this.http.get<any>(this.apiURLCong+"/data", { headers })    
          }
        
          getPretData(): Observable<any> {
            const token = this.authService.getToken();
            if (!token) {
              throw new Error('No token found.');
            }
            const headers = new HttpHeaders({
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            });
            return this.http.get<any>(this.apiURLP+"/data", { headers })    
          }
        
          getContratData(): Observable<any> {
            const token = this.authService.getToken();
            if (!token) {
              throw new Error('No token found.');
            }
            const headers = new HttpHeaders({
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            });
            return this.http.get<any>(this.apiURLCon+"/data", { headers })    
          }
        
          getAssiduiteData(): Observable<any> {
            const token = this.authService.getToken();
            if (!token) {
              throw new Error('No token found.');
            }
            const headers = new HttpHeaders({
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            });
            return this.http.get<any>(this.apiURLAs+"/data", { headers })    
          }
          consulterAdmin(id: number): Observable<Admin> {
            const url = `${this.apiAdmin}/getbyid/${id}`;
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.get<Admin>(url,{headers:httpHeaders});
            }

            getUsers(): Observable<any[]> {
              const personnels$ = this.http.get<any[]>(this.baseUrl+"/lkol");
              const admins$ = this.http.get<any[]>(this.apiAdmin+"/all");
            
              return forkJoin([personnels$, admins$]).pipe(
                map(([personnels, admin]) => {
                  // Ajout d'un type pour différencier les utilisateurs
                  personnels.forEach(p => p.userType = 'Personnel');
                  admin.forEach(a => a.userType = 'Admin');
                  return [...personnels, ...admin];
                })
              );
            }
            getAdminById(id: number): Observable<Admin> {
              const url = `${this.apiAdmin}/getbyid/${id}`;
              return this.http.get<Admin>(url, httpOptions);
                  }
  
  }