import { Component, NgModule } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.models';
import { CategoryListComponent } from '../category-list/category-list.component';
import { CategoryService } from '../services/category.service';
import { Router } from 'express';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [CategoryListComponent,FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  model: AddCategoryRequest;

  constructor(private categoryService:CategoryService
  ) {
    this.model = {
      description: '',
      imageurl: ''
    }   
  }
  onFormSubmit(): void{
    console.log(this.model);
    this.categoryService.addCategory(this.model)
    .subscribe({
      next:(response)=>{
        console.log(response);
      }
    });
  }
}

