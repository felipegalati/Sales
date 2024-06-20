import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { AddProductComponent } from './features/product/add-product/add-product.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,HttpClientModule,CommonModule,FormsModule,CategoryListComponent,ProductListComponent,AddProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AMS3SalesUI';
}
