import { Injectable } from '@angular/core';
import { Assiduite } from '../model/assiduite.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Absence } from '../model/absence.model';
import { AbsenceWrapper } from '../model/absenceWrapped.model';
import { Document } from '../model/docAdministratifs.model';
import { Contrat } from '../model/contrat.model';

const httpOptions = {
    headers: new HttpHeaders( {'Content-Type': 'application/json'} )
    };
  @Injectable({
    providedIn: 'root'
  })
  export class PersonnelService{
    apiURL: string = 'http://localhost:8088/ressourcesH/api';
    apiURLAb: string = 'http://localhost:8088/ressourcesH/abs';
    apiURLDoc: string = 'http://localhost:8088/ressourcesH/api/documents';
    apiURLCon: string = 'http://localhost:8088/ressourcesH/api/contrat';
    assiduites!: Assiduite[]; //un tableau de Assiduite
    absences!:Absence[]; //un tableau d'absence'
    documents!:Document[] //un tableau de document
    constructor(private http: HttpClient) {}
  
    listeAssiduite(): Observable<Assiduite[]> {
      return this.http.get<Assiduite[]>(this.apiURL+"/all");
    }
    
    ajouterAssiduite( as: Assiduite):Observable<Assiduite>{
      return this.http.post<Assiduite>(this.apiURL +"/addass", as, httpOptions);
      }
  
      supprimerAssiduite(id : number) {
        const url = `${this.apiURL}/delass/${id}`;
        return this.http.delete(url, httpOptions);
        }
  
      updateAssiduite(as :Assiduite) : Observable<Assiduite>
      {
          return this.http.put<Assiduite>(this.apiURL+"/updateass", as, httpOptions);
      }
  
      consulterAssiduite(id: number): Observable<Assiduite> {
          const url = `${this.apiURL}/getbyid/${id}`;
          return this.http.get<Assiduite>(url);
          }
  
  /*
            listeAbsences():Observable<AbsenceWrapper>{
              return this.http.get<AbsenceWrapper>(this.apiURLAb);
              }
  */
      listeAbsences():Observable< AbsenceWrapper>{
    return this.http.get<AbsenceWrapper>(this.apiURLAb);
    }
      ajouterAbsence(ab: Absence): Observable<Absence> {
       return this.http.post<Absence>(this.apiURLAb,ab, httpOptions);
     }
        
              supprimerAbsence(id : number) {
                const url = `${this.apiURLAb}/${id}`;
                return this.http.delete(url, httpOptions);
                }       
     /////////////   les meth de Documents  /////////////////////
    
     listeDocument(): Observable<Document[]> {
      return this.http.get<Document[]>(this.apiURLDoc+"/all");
    }
    
    ajouterDocument( as: Document):Observable<Document>{
      return this.http.post<Document>(this.apiURLDoc +"/add", as, httpOptions);
      }
  
      supprimerDocument(id : number) {
        const url = `${this.apiURLDoc}/delete/${id}`;
        return this.http.delete(url, httpOptions);
        }
  
      updateDocument(doc :Document) : Observable<Document>
      {
          return this.http.put<Document>(this.apiURLDoc+"/updatedoc", doc, httpOptions);
      }
  
      consulterDocument(id: number): Observable<Document> {
          const url = `${this.apiURLDoc}/getbyid/${id}`;
          return this.http.get<Document>(url);
          }
  /////////////////////////////////////////////////////////////////
    
  listeContrat(): Observable<Contrat[]> {
    return this.http.get<Contrat[]>(this.apiURLCon+"/all");
  }
  
  ajouterContrat( as: Contrat):Observable<Contrat>{
    return this.http.post<Contrat>(this.apiURLCon +"/add", as, httpOptions);
    }
  
    supprimerContrat(id : number) {
      const url = `${this.apiURLCon}/delete/${id}`;
      return this.http.delete(url, httpOptions);
      }
  
    updateContrat(doc :Contrat) : Observable<Contrat>
    {
        return this.http.put<Contrat>(this.apiURLCon+"/update", doc, httpOptions);
    }
  
    consulterContrat(id: number): Observable<Contrat> {
        const url = `${this.apiURLCon}/${id}`;
        return this.http.get<Contrat>(url);
        }
  
    
    }