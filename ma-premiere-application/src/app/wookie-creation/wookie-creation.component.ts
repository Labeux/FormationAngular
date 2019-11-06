import { Component, OnInit } from '@angular/core';
import { Wookie } from '../models/wookie';

@Component({
  selector: 'app-wookie-creation',
  templateUrl: './wookie-creation.component.html',
  styleUrls: ['./wookie-creation.component.css']
})
export class WookieCreationComponent implements OnInit {

  wookie : Wookie = new Wookie(0, '', new Date);
  
  constructor() { }

  ngOnInit() {
  }

}
