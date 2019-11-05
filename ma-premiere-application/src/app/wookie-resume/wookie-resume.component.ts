import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Wookie } from '../models/wookie';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-wookie-resume',
  templateUrl: './wookie-resume.component.html',
  styleUrls: ['./wookie-resume.component.css']
})
export class WookieResumeComponent implements OnInit {
  @Input() wookie : Wookie;

  @Output() eventEdition = new EventEmitter<Wookie>(false);

  constructor(private _logger: LoggerService) {
    
  }

  ngOnInit(){}

  clickEdition() {
    this.eventEdition.emit(this.wookie);
  }

}
