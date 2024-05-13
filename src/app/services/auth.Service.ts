import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL: string = 'http://localhost:8090/users';
  token!: string ;
  private helper = new JwtHelperService();
/*
  users: User[] = [{"username":"admin","password":"123","roles":['ADMIN']}, 
                   {"username":"sarra","password":"123","roles":['USER']} ,
                   {"username":"sadak","password":"123","roles":['USER']} 
                  ];

*/

public loggedUser!:string;
public isloggedIn: Boolean = false;
public roles!:string[];
////// ta3ml biha verifMail bch twli enable=1
public regitredUser : User = new User();
constructor(private router: Router,private http:HttpClient) { }


login(user : User)
{
return this.http.post<User>(this.apiURL+'/login', user , {observe:'response'});
}
saveToken(jwt:string){
 localStorage.setItem('jwt',jwt);
 this.token = jwt;
 this.isloggedIn = true;
 this.decodeJWT();
 }
 loadToken() {
  this.token = localStorage.getItem('jwt')!;
  this.decodeJWT();
  }
 /*
 SignIn(user :User):Boolean{
  let validUser: Boolean = false; 

  this.users.forEach((curUser) => { 
    if(user.username== curUser.username && user.password==curUser.password) 
      {
                validUser = true;
          
      this.loggedUser = curUser.username;
      this.isloggedIn = true;
      this.roles = curUser.roles;
      localStorage.setItem('loggedUser',this.loggedUser);
      localStorage.setItem('isloggedIn',String(this.isloggedIn));
    }

       });

          return validUser;

       } 
       */
 isAdmin():Boolean{
   if (!this.roles) //this.roles== undefiened 
    return false;
   return (this.roles.indexOf('ADMIN') >=0);
   }
   ///
   isUserOnly(): boolean {
    if (!this.roles || !Array.isArray(this.roles)) {
      return false; // Si les rôles ne sont pas définis ou ne sont pas un tableau, renvoie false
    }
    return this.roles.includes('USER') && !this.roles.includes('ADMIN');
  }
  
  
  

   logout() {
    this.loggedUser = undefined!;
    this.roles = undefined!;
    this.token= undefined!;
    this.isloggedIn = false;
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
    }
   
    setLoggedUserFromLocalStorage(login: string) {
      this.loggedUser = login;
      this.isloggedIn = true;
     // this.getUserRoles(login);
    }

    getToken():string {
      return this.token;
      }
      decodeJWT()
{ if (this.token == undefined)
 return;
const decodedToken = this.helper.decodeToken(this.token);
this.roles = decodedToken.roles;
console.log("roles"+this.roles);
this.loggedUser = decodedToken.sub;
}
   /*
   getUserRoles(username :string){
     this.users.forEach((curUser) => {
       if( curUser.username == username ) {
         this.roles = curUser.roles; 
        }
       });
       }
       */
       isTokenExpired(): Boolean
       {
       return this.helper.isTokenExpired(this.token); }

       registerUser(user :User){
        return this.http.post<User>(this.apiURL+'/register', user,
        {observe:'response'});
        }
///////// 148 VerifMail
        setRegistredUser(user : User){
          this.regitredUser=user;
          }
          getRegistredUser(){
          return this.regitredUser;
          }
        
          validateEmail(code : string){
            return this.http.get<User>(this.apiURL+'/verifyEmail/'+code);
            }
            
}