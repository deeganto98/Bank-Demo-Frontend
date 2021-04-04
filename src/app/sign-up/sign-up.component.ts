import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  opened: boolean
  responseData:any;

  signup_form = new FormGroup({
    signup_firstname: new FormControl,
    signup_lastname: new FormControl,
    signup_email: new FormControl,
    signup_age: new FormControl,
    signup_password: new FormControl,
    signup_branch: new FormControl
  })
  constructor(private builder: FormBuilder, private service: SignUpService) { }

  ngOnInit(): void {
    this.signup_form = this.builder.group({
      signup_firstname: ['', Validators.required],
      signup_lastname: ['', Validators.required],
      signup_email: ['', [Validators.required, Validators.email]],
      signup_age: ['', Validators.required],
      signup_password: ['', Validators.required],
      signup_branch: ['', Validators.required]
    })
  }

  toggle() {
    this.opened = !this.opened;
  }
  signup(){
    var signupdata={
      firstName:this.signup_form.get('signup_firstname').value,
      lastName:this.signup_form.get('signup_lastname').value,
      emailId:this.signup_form.get('signup_email').value,
      age:this.signup_form.get('signup_age').value,
      password:this.signup_form.get('signup_password').value,
      branchName:this.signup_form.get('signup_branch').value,
    }
    this.service.sendSignUpData(signupdata).subscribe(rest=>{

      this.responseData = rest;
      localStorage.setItem("email",this.responseData.emailId);
      localStorage.setItem("name",this.responseData.firstName + this.responseData.lastName);

    })
  }
}