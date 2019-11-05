import { Injectable } from '@angular/core';

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
