import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  isActive(currentRoute: any[]): boolean {
    return this.router.isActive(this.router.createUrlTree(currentRoute), {
      paths: 'subset',
      queryParams: 'subset',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });
  }
}
