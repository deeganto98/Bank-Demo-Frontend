import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  opened:boolean
  signup_form = new FormGroup({
    signup_firstname:new FormControl,
    signup_lastname:new FormControl,
    signup_email:new FormControl,
    signup_age:new FormControl,
    signup_username:new FormControl
  })
  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {
    this.signup_form = this.builder.group({
      signup_firstname:['',Validators.required],
      signup_lastname:['',Validators.required],
      signup_email:['',Validators.required],
      signup_age:['',Validators.required],
      signup_username:['',Validators.required]
    })
  }
  toggle() {
    this.opened = !this.opened;
}
}
