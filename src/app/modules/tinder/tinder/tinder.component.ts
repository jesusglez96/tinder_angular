import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Match } from '../match.interface';
import { MatchService } from '../match.service';
import { TinderPipe } from '../tinder.pipe';

@Component({
  selector: 'app-tinder',
  templateUrl: './tinder.component.html',
  styleUrls: ['./tinder.component.css'],
})
export class TinderComponent implements OnInit {
  matches!: Match[];
  formMatch: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    ratio: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
  });
  // formMatch: FormGroup = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.required]),
  //   ratio: new FormControl(0, [Validators.required]),
  // });
  constructor(private fb: FormBuilder, private matchService: MatchService) {}

  ngOnInit(): void {
    this.matchService.index().subscribe((res) => {
      this.matches = TinderPipe.prototype.transform(
        JSON.parse(JSON.stringify(res))
      );
      console.log(JSON.parse(JSON.stringify(res)));
      console.log(this.matches.length);
    });
  }

  newMatch(): void {
    this.matchService
      .store(
        this.formMatch.value.name,
        this.formMatch.value.email,
        this.formMatch.value.ratio
      )
      .subscribe((res) => {
        if (res) {
          this.matches.push({
            name: this.formMatch.value.name,
            email: this.formMatch.value.email,
            ratio: this.formMatch.value.ratio,
          });
        }
      });
  }

  eliminar(email: string): void {
    this.matchService.delete(email).subscribe((res) => {
      if (res) {
        this.matches = this.matches.filter((match) => match.email != email);
      }
    });
  }
}
