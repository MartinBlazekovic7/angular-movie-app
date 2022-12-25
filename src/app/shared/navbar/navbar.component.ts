import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  selectedOption = 'Home';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.url);
  }

  click(){
    console.log(this.router.url);
  }

}
