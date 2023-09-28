import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../../models/user";
import { AuthService } from "../../services/auth.service";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  userForm!: FormGroup;
  user: User = {
    username: "",
    password: "",
  };

  username: FormControl = new FormControl(null, Validators.required);
  password: FormControl = new FormControl(null, Validators.required);
  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),  
    });
  }
  constructor(
    public authService: AuthService,
    public router: Router,
    
  ) {}

  login() {
    this.receiveValuesForm();
   
    const resp = this.authService.authenticate(this.user).subscribe(
      {
        next: (resp) =>{
          localStorage.setItem("isLoggedIn", "yes");
          this.router.navigate([""]);
          
        },
        error: (err) =>{
          localStorage.setItem("isLoggedIn", "no");      
          this.router.navigate(["/login"]);
        }

      }  
      
    );
  }

  logout() {
    this.authService.logout();
  }
  receiveValuesForm(){
    this.user.username = this.userForm.value.username;
    this.user.password = this.userForm.value.password;
  }
}