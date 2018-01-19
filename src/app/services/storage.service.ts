import { Injectable } from '@angular/core';
import * as localforage from 'localforage';
import { User } from '../interfaces/user';

@Injectable()
export class StorageService {
  constructor() {}

  saveUser(user: User): Promise<any> {
    return localforage.setItem('user', user);
  }

  getUser(): Promise<User> {
    return localforage.getItem('user');
  }
}
