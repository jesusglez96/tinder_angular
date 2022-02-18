import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './modules/users/users.module';
import { MatchesModule } from './modules/matches/matches.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UsersModule, MatchesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
