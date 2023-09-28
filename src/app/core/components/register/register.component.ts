import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../../models/user";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userForm!: FormGroup;
  can_submit!: boolean;
  wrong_password !: string
  user: User = {
    username: "",
    password: "",
  };

 
  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(''),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]), 
      password_again: new FormControl('', ),
      birthdate: new FormControl('', )
    });
  }
  constructor(
    public authService: AuthService,
    public router: Router,
    
  ) {}

  login() {
    this.receiveValuesForm();
    if(this.can_submit){
      this.authService.register(this.user).subscribe(
        {
          next: (resp) =>{
            localStorage.setItem("isLoggedIn", "yes");
            this.router.navigate(["/login"]);
          },
          error: (err) =>{
            localStorage.setItem("isLoggedIn", "no");      
            this.router.navigate(["/login"]);
          }
  
        }  
        
      );
    }
   
  }

  logout() {
    this.authService.logout();
  }
  receiveValuesForm(){
    
    // this.user.name = this.username.value.name
    this.user.username = this.userForm.value.username;
    if(this.userForm.value.password === this.userForm.value.password_again){
      this.user.password = this.userForm.value.password;
      this.can_submit = true;
    }
    else{
      this.wrong_password = 'background-color: #f59696 !important'
      this.can_submit = false;
    }
    

  }
}
