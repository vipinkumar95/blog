import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from './types/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  http = inject(HttpClient);

  constructor() { }

  getCategoryList(){
   return this.http.get<Category[]>("https://localhost:44366/api/Category")

  }

}
