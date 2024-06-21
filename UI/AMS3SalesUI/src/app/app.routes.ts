import { Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { AddProductComponent } from './features/product/add-product/add-product.component';
import { EditCategoryComponent } from './features/category/edit-category/edit-category.component';


export const routes: Routes = [
    {path: 'category', component:CategoryListComponent},
    {path: 'add-category', component:AddCategoryComponent},
    {path: 'product', component:ProductListComponent},
    {path: 'add-product', component:AddProductComponent},
    {path: 'edit-category', component:EditCategoryComponent},
];
