import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatchComponent } from './modules/matches/match/match.component';
import { LoginComponent } from './modules/users/login/login.component';
import { RegisterComponent } from './modules/users/register/register.component';
import { UserComponent } from './modules/users/user/user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'match', component: MatchComponent },
  { path: 'matches/:id', component: MatchComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
