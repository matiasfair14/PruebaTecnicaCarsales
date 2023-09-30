import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent {
  items: MenuItem[] = [];
  constructor(private router: Router) {
    this.createItems();
  }

  ngOnInit() {}
  createItems() {
    this.items = [
      {
        label: 'Episodios',
        icon: 'pi pi-play',
        command: (event: any) => {
          this.router.navigate(['/']);
        },
      },
      {
        label: 'Personajes',
        icon: 'pi pi-user',
        command: (event: any) => {
          this.router.navigate(['/character']);
        },
      },
      {
        label: 'Ubicaciones',
        icon: 'pi pi-map-marker',
        command: (event: any) => {
          this.router.navigate(['/location']);
        },
      }
    ];
  }
}
