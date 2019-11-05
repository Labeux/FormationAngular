import { Component, OnInit, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { Wookie } from '../models/wookie';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-liste-des-wookies',
  templateUrl: './liste-des-wookies.component.html',
  styleUrls: ['./liste-des-wookies.component.css']
})
export class ListeDesWookiesComponent implements OnInit {
  wookieList : Wookie[] = [];

  currentWookie : Wookie;

  constructor(private _logger: LoggerService) { 
    this.wookieList.push(new Wookie(1, 'Wookie 1', new Date('01/01/2000')));
    this.wookieList.push(new Wookie(2, 'Wookie 2', new Date()));
    this.wookieList.push(new Wookie(3, 'Wookie 3', new Date()));
  }

  ngOnInit() {
    
  }

  fonctionClickEdition(wookie : Wookie) {
    this._logger.log(`Bouton Edition click wookie ${wookie.id}`);
    this.currentWookie = wookie;
  }
}
