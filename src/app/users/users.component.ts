import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../services/Personnel.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[] = [];

  constructor(private personnelService: PersonnelService, private router: Router) { }

  goToProfile(userId: number, userType: string): void {
    if (userType === 'Personnel') {
      this.router.navigate(['/profil', userId]);
    } else if (userType === 'Admin') {
      this.router.navigate(['/profilAdmin', userId ]);
    }
  }

  ngOnInit(): void {
    this.personnelService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
