import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getRecipes(op: string) {
    return this.http.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${op}&app_id=ff9fc2d5&app_key=877245e878a96c59a8ef3c7c0e4f600c`
    );
  }
}
