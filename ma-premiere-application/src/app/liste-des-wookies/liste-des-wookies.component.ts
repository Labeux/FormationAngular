import { Component, OnInit, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { Wookie } from '../models/wookie';
import { LoggerService } from '../services/logger.service';
import { WookieService } from '../services/wookie.service';

@Component({
  selector: 'app-liste-des-wookies',
  templateUrl: './liste-des-wookies.component.html',
  styleUrls: ['./liste-des-wookies.component.css']
})
export class ListeDesWookiesComponent implements OnInit {
  wookieList : Wookie[] = [];

  currentWookie : Wookie;

  constructor(private _logger: LoggerService, private _wookieService: WookieService) { 
    this.wookieList = _wookieService.getAll();
  }

  ngOnInit() {
  }

  fonctionClickEdition(wookie : Wookie) {
    this._logger.log(`Bouton Edition click wookie ${wookie.id}`);
    this.currentWookie = wookie;
  }
}
