import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Wookie } from '../models/wookie';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-wookie-edition',
  templateUrl: './wookie-edition.component.html',
  styleUrls: ['./wookie-edition.component.css']
})
export class WookieEditionComponent implements OnInit {

  @Input() wookie : Wookie;

  constructor(private _logger: LoggerService) { }

  ngOnInit() {
  }

  ClickAnnuler() {
    this.wookie = null;
  }

  ClickValider() {

  }

}
