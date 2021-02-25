import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  items: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit(): void {
        this.items = [
            {label: 'Todos', icon: 'pi pi-fw pi-home',routerLink: ["/todos"]},
            {label: 'My Contacts', icon: 'pi pi-fw pi-calendar',routerLink: ['/my-contacts']},
        ];
  }

  getCurrentRoute(): MenuItem | null {
    const itemIndex = this.items.findIndex(item=> item.routerLink[0] ===this.router.url)
    if (itemIndex != -1) {
      return this.items[itemIndex];
    }
    return null;
  }


}
