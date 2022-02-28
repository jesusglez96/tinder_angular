import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  url: string = 'http://localhost:4000/api';
  constructor(private http: HttpClient) {}

  index() {
    return this.http.get(this.url + '/index');
  }
  store(name: string, email: string, ratio: number) {
    return this.http.post(this.url + '/store', {
      name: name,
      email: email,
      ratio: ratio,
    });
  }
  delete(email: string) {
    return this.http.post(this.url + '/delete', { email: email });
  }
  // index() {
  //   return this.http.get(this.url + '/index');
  // }
}
