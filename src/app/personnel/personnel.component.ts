import { PersonnelService } from './../services/Personnel.Service';
import { Personnel } from './../model/personnel.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.Service';


@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {
  personnels! : Personnel[];
  
 
  allPersonnels! : Personnel[];
  searchTerm!: string;
  constructor(private personnelService : PersonnelService,
    private router : Router,public authService : AuthService){}

  ngOnInit(): void {
    this.chargerPersonnels() ;

    this.personnelService.listePersonnels().subscribe(persons =>
      { console.log(persons);
        this.allPersonnels = persons;
      });
  }

  chargerPersonnels(){
  this.personnelService.listePersonnels().subscribe(persons => {
    console.log(persons);
    this.personnels = persons;
  });

  }

  voirDetails(idPersonnel: number): void {
    this.router.navigate(['/profil', idPersonnel]);
    }

  supprimerPersonnel(p: Personnel) { 
    let conf = confirm("Etes-vous sûr ?");
    if (conf) this.personnelService.supprimerPersonnel(p.id).subscribe(() => {
      console.log("reclamation supprimé"); this.chargerPersonnels(); }); 
    }


  modifierPersonnel(idPersonnel: number) {
      this.router.navigate(['/updatePersonnel', idPersonnel]);
    }

    onKeyUp(filterText : string){ ////onkeyup
      this.personnels = this.allPersonnels.filter(item => 
       item.nom.toLowerCase().includes(filterText));
      }
    
    
  

}