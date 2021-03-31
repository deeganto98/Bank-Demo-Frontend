import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_form = new FormGroup({
    login_username:new FormControl,
    login_password:new FormControl
  })

  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {
    
    this.login_form = this.builder.group({
      login_username:['',Validators.required],
      login_password:['',Validators.required]
    })
  }

}
