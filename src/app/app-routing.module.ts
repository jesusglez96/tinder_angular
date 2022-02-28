import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipesComponent } from './modules/api/recipes/recipes.component';
import { TinderComponent } from './modules/tinder/tinder/tinder.component';

const routes: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'tinder', component: TinderComponent },
  { path: 'words', component: RecipesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
