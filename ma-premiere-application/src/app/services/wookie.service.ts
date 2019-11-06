import { Injectable } from '@angular/core';
import { Wookie } from '../models/wookie';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WookieService {

  constructor(private _httpClient: HttpClient) { }


  /* getAll() : Wookie[] {
    const wookieList : Wookie[] = [];

    wookieList.push(new Wookie(1, 'Wookie 1', new Date('01/01/2000')));
    wookieList.push(new Wookie(2, 'Wookie 2', new Date()));
    wookieList.push(new Wookie(3, 'Wookie 3', new Date()));

    return wookieList;
  } */

  getAll() : Observable<Wookie[]> {
    return this._httpClient.get<Wookie[]>( environment.apiUrl + '/wookies');
  }
}
