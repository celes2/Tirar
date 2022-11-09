import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = []
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: '',
        icon: 'pi pi-home',
        routerLink: "/inicio"

      },
      {
        label: 'Articulos',
        icon: 'pi pi-shopping-bag',
      items:[
        { 
          label: "Aceites",
          routerLink: "aceites"
        },
        {
          label: "Frutos Secos",
          routerLink: "frutos-secos"
        },
        {
          label: "Harinas",
          routerLink: "harinas"
        },
        {
          label: "Leche",
          routerLink: "leche"
        },
        {
          label: "Mantecas",
          routerLink: "mantecas"
        },
        {
          label: "Proteinas",
          routerLink: "proteinas"
        },
        {
          label: "Sales",
          routerLink: "sales"
        },
        {
          label: "Salsas",
          routerLink: "salsas"
        },
        {
          label: "Yerba",
          routerLink: "yerba"
        },
        {
          label: "Shampoo",
          routerLink: "shampoo"
        }
      ]
      },
      {
        label: "Contactenos",
        icon: "pi pi-phone",
        routerLink: "/contacto"
      },
      {
        label: "Admin",
        icon: "pi pi-user-plus",
        routerLink: "/admin",

      }
    ]

  }
}