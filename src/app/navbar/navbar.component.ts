import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../sign-up/sign-up.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
    name = localStorage.getItem("lastName");

  constructor() { }

  ngOnInit(): void {
  }

}
