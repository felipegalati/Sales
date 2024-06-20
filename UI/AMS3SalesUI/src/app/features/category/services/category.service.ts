
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddCategoryRequest } from '../models/add-category-request.models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient ) {}

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(
      'https://localhost:7148/api/v1/Categories'
    )
  }

  addCategory(categoryRequest: AddCategoryRequest): Observable<AddCategoryRequest> {
    console.log("entrou na service");
    console.log(categoryRequest);
    
    return this.http.post<AddCategoryRequest>(
      'https://localhost:7148/api/v1/Categories',categoryRequest
    )
  }
}
