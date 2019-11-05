import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Wookie } from '../models/wookie';

@Component({
  selector: 'app-wookie-edition',
  templateUrl: './wookie-edition.component.html',
  styleUrls: ['./wookie-edition.component.css']
})
export class WookieEditionComponent implements OnInit {

  @Input() wookie : Wookie;

  constructor() { }

  ngOnInit() {
  }

  ClickAnnuler() {
    this.wookie = null;
  }

  ClickValider() {

  }

}
