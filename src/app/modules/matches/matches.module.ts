import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './match/match.component';
import { MatchedComponent } from './matched/matched.component';



@NgModule({
  declarations: [
    MatchComponent,
    MatchedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MatchesModule { }
