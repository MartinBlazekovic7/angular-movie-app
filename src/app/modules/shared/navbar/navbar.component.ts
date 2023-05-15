import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1.5s ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class NavbarComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
}
