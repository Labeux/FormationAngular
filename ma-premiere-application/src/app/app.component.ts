import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestion des wookies';
  title2 = 'Liste des wookies';

  // Image
  imageUrl = 'https://oddstuffmagazine.com/wp-content/uploads/2012/09/0LsHp.jpg';
  isDisplayLogo = false;

  // Bouton
  libelleSupprimerImage = 'Supprimer image';
  libelleAfficherImage = 'Afficher image';

  

  constructor() {
    
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
