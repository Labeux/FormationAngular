import { Component, OnInit, ComponentFactory, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { Wookie } from '../models/wookie';
import { LoggerService } from '../services/logger.service';
import { WookieService } from '../services/wookie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-liste-des-wookies',
  templateUrl: './liste-des-wookies.component.html',
  styleUrls: ['./liste-des-wookies.component.css']
})
export class ListeDesWookiesComponent implements OnInit, OnDestroy {
  title = 'Gestion des wookies';
  title2 = 'Liste des wookies';

  // Image
  imageUrl = 'https://oddstuffmagazine.com/wp-content/uploads/2012/09/0LsHp.jpg';
  isDisplayLogo = false;

  // Bouton
  libelleSupprimerImage = 'Supprimer image';
  libelleAfficherImage = 'Afficher image';
  
  wookieList : Wookie[] = [];

  currentWookie : Wookie;

  private _subscriptions: Subscription[] = [];

  constructor(private _logger: LoggerService, 
              private _wookieService: WookieService
              ) { 
    
  }
  
  ngOnDestroy(): void {
    this._subscriptions.forEach(souscription => souscription.unsubscribe());
  }
  
  ngOnInit() {
    //this.wookieList = _wookieService.getAll();
    const laSubscription = this._wookieService.getAll().subscribe(tableau => this.wookieList = tableau);
    this._subscriptions.push(laSubscription);
  }

  fonctionClickEdition(wookie : Wookie) {
    this._logger.log(`Bouton Edition click wookie ${wookie.id}`);
    this.currentWookie = Object.assign({}, wookie);
  }

  
  /**
   * Fonction du bouton
   */
  fonctionClick() {
    console.log("Bouton click");

    this.isDisplayLogo = !this.isDisplayLogo;
  }

  get afficherImageOuiNon() : string {
    return this.isDisplayLogo ? this.libelleSupprimerImage : this.libelleAfficherImage;
  }
}
