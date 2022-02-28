import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { UtilitiesPipe } from '../utilities.pipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  @ViewChild('ingredients') ingredients!: ElementRef<HTMLInputElement>;
  // ingredients = new FormGroup({
  //   ingredient: new FormControl('', [Validators.required]),
  // });
  recipes!: any;

  constructor(private api: ApiService) {}

  newRecipes(): void {
    const ingredient = UtilitiesPipe.prototype.replaceSpaces(
      this.ingredients.nativeElement.value
    );
    this.api.getRecipes(ingredient).subscribe((res) => {
      this.recipes = res;
      console.log(this.recipes);
    });
    this.ingredients.nativeElement.value = '';
  }
}
