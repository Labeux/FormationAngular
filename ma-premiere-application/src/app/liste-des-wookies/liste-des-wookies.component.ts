import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-des-wookies',
  templateUrl: './liste-des-wookies.component.html',
  styleUrls: ['./liste-des-wookies.component.css']
})
export class ListeDesWookiesComponent implements OnInit {
  wookieList = [];
  constructor() { 
    this.wookieList.push('wookie');
    this.wookieList.push('wookie2');
    this.wookieList.push('wookie3');
  }

  ngOnInit() {
  }

}
