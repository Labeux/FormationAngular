import { Injectable } from '@angular/core';
import { Wookie } from '../models/wookie';

@Injectable({
  providedIn: 'root'
})
export class WookieService {

  wookieList : Wookie[] = [];

  constructor() { }

  getAll() : Wookie[] {

    this.wookieList.push(new Wookie(1, 'Wookie 1', new Date('01/01/2000')));
    this.wookieList.push(new Wookie(2, 'Wookie 2', new Date()));
    this.wookieList.push(new Wookie(3, 'Wookie 3', new Date()));

    return this.wookieList;
  }
}
