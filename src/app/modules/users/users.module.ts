import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [UserComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule],
  exports: [LoginComponent, RegisterComponent, UserComponent],
})
export class UsersModule {}
