import { Component, OnInit, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { Wookie } from '../models/wookie';

@Component({
  selector: 'app-liste-des-wookies',
  templateUrl: './liste-des-wookies.component.html',
  styleUrls: ['./liste-des-wookies.component.css']
})
export class ListeDesWookiesComponent implements OnInit {
  wookieList : Wookie[] = [];

  currentWookie : Wookie;

  constructor() { 
    this.wookieList.push(new Wookie(1, 'Wookie 1', new Date('01/01/2000')));
    this.wookieList.push(new Wookie(2, 'Wookie 2', new Date()));
    this.wookieList.push(new Wookie(3, 'Wookie 3', new Date()));
  }

  ngOnInit() {
    
  }

  fonctionClickEdition(wookie : Wookie) {
    console.log(`Bouton Edition click wookie ${wookie.id}`);
    this.currentWookie = wookie;
  }
}
