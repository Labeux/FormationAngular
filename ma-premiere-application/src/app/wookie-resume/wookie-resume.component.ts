import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Wookie } from '../models/wookie';

@Component({
  selector: 'app-wookie-resume',
  templateUrl: './wookie-resume.component.html',
  styleUrls: ['./wookie-resume.component.css']
})
export class WookieResumeComponent implements OnInit {
  @Input() wookie : Wookie;

  @Output() eventEdition = new EventEmitter<Wookie>(false);

  ngOnInit(){}

  clickEdition() {
    this.eventEdition.emit(this.wookie);
  }

}
