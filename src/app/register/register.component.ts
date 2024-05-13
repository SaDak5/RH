import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user = new User();
  confirmPassword?:string;
  myForm!: FormGroup;
  err:any;
  loading : boolean = false;
  constructor(private formBuilder: FormBuilder,private authService :AuthService,private router:Router) { }
  ngOnInit(): void {
  this.myForm = this.formBuilder.group({
  username : ['', [Validators.required]],
  email : ['', [Validators.required, Validators.email]],
  password : ['', [Validators.required, Validators.minLength(6)]],
  confirmPassword : ['', [Validators.required]]
  } );
  }
  onRegister(){
      
console.log(this.user);
this.loading=true;
this.authService.registerUser(this.user).subscribe({
next:(res)=>{
  //////verifyEmail 148
  this. authService.setRegistredUser(this.user);
  alert("veillez confirmer votre email");
  this.router.navigate(["/verifEmail"]);  
},
error: (err: any) => {
  if (err.error.errorCode === "USER_EMAIL_ALREADY_EXISTS") {
    this.err = "email already used";
  }
}
}
)
}

}