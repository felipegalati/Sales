import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/Category';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterLink,RouterModule, CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit{
  categories?: Category[]

  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.categoryService.getAllCategories()
    .subscribe({
      next: (response) => {
        this.categories = response;
      }

    });

  }
}
