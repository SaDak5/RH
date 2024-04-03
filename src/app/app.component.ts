import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ResourceHumaine';

  constructor(public authService: AuthService,
    private router :Router){}

ngOnInit() {
this.authService.loadToken();
if (this.authService.getToken()==null || 
this.authService.isTokenExpired())
this.router.navigate(['/login']);

}

onLogout(){
this.authService.logout();
}
}