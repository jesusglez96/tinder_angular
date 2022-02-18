import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _user!: User[];

  get users(): User[] {
    return [...this._user];
  }
  constructor() {}
}
