import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, RouterModule, AddProductComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products?: Product[]
  
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response;
      }
    });
  }
}
