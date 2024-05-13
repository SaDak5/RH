import { Component, OnInit } from '@angular/core';
import { Personnel } from '../model/personnel.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from '../services/Personnel.Service';
import { Notification } from '../model/notification.model';
@Component({
  selector: 'app-upadate-notification',
  templateUrl: './upadate-notification.component.html',
  styleUrls: ['./upadate-notification.component.css']
})
export class UpadateNotificationComponent implements OnInit {
  currentNotification = new Notification();
  personnels! : Personnel[];
  updatedAsId! : String;
  
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private personnelService: PersonnelService) { }

    ngOnInit(): void {
      
      this.personnelService.listePersonnels().
      subscribe(abs => {this.personnels = abs;
      console.log(abs);
      });
      this.personnelService.consulterNotification(this.activatedRoute.snapshot.params['id']).
      subscribe( as =>{ this.currentNotification = as;
        this.updatedAsId =this.currentNotification.personnel.id.toString();
      } ) ;
      }
   //   
  updateNotification(){
      
    this.currentNotification.personnel = this.personnels?.find(ab => ab.id.toString() === this.updatedAsId)!;
    this.personnelService.updateNotification(this.currentNotification).subscribe(as => {
    this.router.navigate(['/notification']);
    }); 
    }
  
  
}


