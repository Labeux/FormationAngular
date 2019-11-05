import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  /**
   * 
   * @param message Message à logguer
   */
  log(message: string) {
    if (! environment.production) {
      console.log(message);
    }
  }
}
