import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted :boolean = false;
  username:any;
  password : any;
  invalidCredentials :boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      username: new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required])
  });

  
  }

  onSubmit(){
    this.submitted = true;

    if(this.loginForm.valid){
      if(this.loginForm.value.username == "vishal" && this.loginForm.value.password=="123"){
        localStorage.setItem("CurrentUser",this.loginForm.value.username);
        this.router.navigate(["/home"]);
      }else{
        this.invalidCredentials = true;
      }
    }
  }

onKeyUp(){
  if(this.invalidCredentials){
    this.invalidCredentials=false;
  }
}
}
