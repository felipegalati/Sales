import { Component } from '@angular/core';
import { CategoryListComponent } from '../../features/category/category-list/category-list.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CategoryListComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
