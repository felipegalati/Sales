import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { AddProductRequest } from '../models/add-product-request.models';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ProductListComponent, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  model: AddProductRequest;

  constructor(private productService: ProductService){
    this.model={
      description: '',
      imageurl: '',
      price: '',
      stock: '',
      categoryid: '',

    }
  }

  onFormSubmit(): void{
    console.log(this.model);
    this.productService.addProduct(this.model)
    .subscribe({
      next:(response)=>{
        console.log(response);
      }
    });
  }
}
