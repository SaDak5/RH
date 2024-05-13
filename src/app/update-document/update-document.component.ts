import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from '../model/docAdministratifs.model';
import { PersonnelService } from '../services/Personnel.Service';
import { Personnel } from '../model/personnel.model';
@Component({
  selector: 'app-update-document',
  templateUrl: './update-document.component.html',
  styleUrls: ['./update-document.component.css']
})
export class UpdateDocumentComponent implements OnInit {
  currentDocument = new Document();
  personnels! : Personnel[];
  updatedAsId! : String;
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private personnelService: PersonnelService) { }

    ngOnInit(): void {
      this.personnelService.listePersonnels().
      subscribe(pers => {this.personnels = pers;
      console.log(pers);
      });
      this.personnelService.consulterDocument(this.activatedRoute.snapshot.params['id']).
      subscribe( doc =>{ this.currentDocument = doc;
        this.updatedAsId =this.currentDocument.personnel.id.toString();
      
      } ) ;
      }
   //   
  updateDocument(){
    this.currentDocument.personnel = this.personnels?.find(ab => ab.id.toString() === this.updatedAsId)!
      this.personnelService.updateDocument(this.currentDocument).subscribe(doc => {
      this.router.navigate(['/documents']);
      }); 
    }
  
  
}


